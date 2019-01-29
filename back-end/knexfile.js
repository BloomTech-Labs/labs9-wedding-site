// Update with your config settings.
const AWS_DBendpoint = 'myvbeloveddb.coooh5m7ic7b.us-east-2.rds.amazonaws.com';
require('dotenv').config();

module.exports = {

  development: {
    client: 'mysql',
    version: '5.6.41',
    connection: {

      host: AWS_DBendpoint,
      port: '3306',
      user: 'vbelovedDB',   //master username as listed in the AWS Console,
      password: 'vbelovedDB',
      database: 'vbeloveddb',  
    },
    pool: {
    min: 1,
    max: 10,
    },
    useNullAsDefault: true,
    migrations: {
      directory: './database/migrations_aws'
    }
  },
  production: {
    client: 'mysql',
    version: '5.6.41',
    connection: {

      host: AWS_DBendpoint,
      port: '3306',
      user: 'vbelovedDB',   //master username as listed in the AWS Console,
      password: 'vbelovedDB',
      database: 'vbeloveddb',  
    },
    pool: {
    min: 1,
    max: 10,
    },
    useNullAsDefault: true,
    migrations: {
      directory: './database/migrations_aws'
    }
  },
  testing: {
      client: 'sqlite3',
      connection: {
        filename: './database/beloveddb.sqlite3'
  
      },
      useNullAsDefault: true,
      migrations: {
        directory: './database/migrations'
      }
    }

};

