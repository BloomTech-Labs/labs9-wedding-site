// Update with your config settings.

module.exports = {

  development: {
    client: 'mysql',
    version: '5.6.41',
    connection: {

      host: 'beloved2.coooh5m7ic7b.us-east-2.rds.amazonaws.com',
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
  },
  production: {
    client: 'mysql',
    version: '5.6.41',
    connection: {

      host: 'beloved2.coooh5m7ic7b.us-east-2.rds.amazonaws.com',
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