const PostgresDriver = require('@cubejs-backend/postgres-driver');

module.exports = {
  driverFactory: ({ dataSource }) => {
    if (dataSource === 'default') {
      return new PostgresDriver({
        database: 'uc_enterprise',
        host: '15.207.103.137',
        user: 'phonesystem',
        password: 'BSkOPWsSZy9Jiq',
        port: '5432',
      })
    }

    if (dataSource === 'datasource1') {
      return new PostgresDriver({
        database: 'database_single',
        host: '15.207.103.137',
        user: 'phonesystem',
        password: 'BSkOPWsSZy9Jiq',
        port: '5432',
      })
    }

    throw new Error('dataSource is undefined');
  },
};