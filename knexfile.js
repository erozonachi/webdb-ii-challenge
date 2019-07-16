module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/cardealer.db3'
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations',
      tableName: 'db_migrations'
    },
    seeds: {
      directory: './data/seeds'
    }
  }
};
