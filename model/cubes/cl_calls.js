cube(`cl_calls`, {
  sql_table: `public.cl_calls`,

  data_source: `datasource1`,



  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primary_key: true
    },

    is_answered: {
      sql: `is_answered`,
      type: `boolean`
    },

    call_history_id: {
      sql: `call_history_id`,
      type: `string`
    },

    start_time: {
      sql: `start_time`,
      type: `time`
    },

    end_time: {
      sql: `end_time`,
      type: `time`
    }
  },

  measures: {
    count: {
      type: `count`
    }
  },

  pre_aggregations: {
    callspg_rollup: {
      type: "rollup",
      external: false,
      dimensions: [is_answered, start_time, end_time, id, call_history_id],
      indexes: {
        calls_index: { columns: [call_history_id] }
      }
    },

    // combined_rollup: {
    //   type: "rollup_join",
    //   dimensions: [CUBE.call_history_id],
    //   rollups: [CUBE.callspg_rollup, calls.calls_rollup]
    // }

  
  },

  joins: {
    calls: {
      sql: `${CUBE.call_history_id} = ${calls.call_history_id}`,
      relationship: `belongsTo`
    }
  }
});
