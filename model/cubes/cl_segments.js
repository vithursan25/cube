// cube(`cl_segments`, {
//   sql_table: `public.cl_segments`,
  
//   data_source: `default`,
  
//   joins: {
    
//   },
  
//   dimensions: {
//     id: {
//       sql: `id`,
//       type: `number`,
//       primary_key: true
//     },
    
//     call_history_id: {
//       sql: `call_history_id`,
//       type: `string`
//     },
    
//     end_time: {
//       sql: `end_time`,
//       type: `time`
//     },
    
//     start_time: {
//       sql: `start_time`,
//       type: `time`
//     }
//   },
  
//   measures: {
//     count: {
//       type: `count`
//     }
//   },
  
//   pre_aggregations: {
//     // Pre-aggregation definitions go here.
//     // Learn more in the documentation: https://cube.dev/docs/caching/pre-aggregations/getting-started
//   }
// });
