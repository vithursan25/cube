cube(`calls`, {
    sql_table: `public.calls`,
    data_source: `default`,
    
    
    dimensions: {
      id: {
        sql: `id`,
        type: `string`,
        primary_key: true
      },
      
      call_history_id: {
        sql: `call_history_id`,
        type: `string`
      },
    
    },
    
    measures: {
      count: {
        type: `count`
      }
    },
    
    pre_aggregations: {
        calls_rollup: {
            external: false,
            dimensions: [id, call_history_id],
            type: "rollup",
            measures: [count],
            indexes: {
              records_index: { columns: [call_history_id] }
            }
          },
          combined_rollup: {
            type: "rollup_join",
            dimensions: [cl_calls.call_history_id, cl_calls.is_answered, cl_calls.start_time, cl_calls.end_time, calls.id, calls.call_history_id],
            rollups: [cl_calls.callspg_rollup, calls.calls_rollup]
          }
    },
    joins: {
        calls: {
          sql: `${CUBE.call_history_id} = ${cl_calls.call_history_id}`,
          relationship: `belongsTo`
        },
    }
  });
  