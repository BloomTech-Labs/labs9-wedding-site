// Update with your config settings.
const AWS_DBendpoint = 'beloved2.coooh5m7ic7b.us-east-2.rds.amazonaws.com';


module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './database/beloveddb.sqlite3'

    },
    useNullAsDefault: true,
    migrations: {
      directory: './database/migrations_2'
    }
  },
  production: {
    client: 'mysql',
    version: '5.6.41',
    connection: {

      host: AWS_DBendpoint,
      port: '3306',
      user: 'belovedapp',   //master username as listed in the AWS Console,
      password: 'belovedapp',
      database: 'belovedDB2',  
    },
    pool: {
    min: 1,
    max: 10,
    },
    useNullAsDefault: true,
    migrations: {
      directory: './database/migrations'
    }
  }

};