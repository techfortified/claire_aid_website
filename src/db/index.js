import { registerService } from '@/utils';

const mysql = require('mysql2/promise');

const dbConnection = () => {

  const pool =  mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'claire_aid',
    port: parseInt(process.env.MYSQL_PORT), //3306
    waitForConnections: true,
    connectionLimit: 20,
    maxIdle: 20, // max idle connections, the default value is the same as `connectionLimit`
    idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
    queueLimit: 0,
    enableKeepAlive: true,
    keepAliveInitialDelay: 0
  })

  const dbService = registerService('db', () => pool)
  return dbService
}


export default dbConnection