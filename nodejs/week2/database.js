const { knex } = require('knex')

const connection = {
  client: 'mysql',
  connection: {
    host: '127.0.0.1',
    user: 'root',
    password: '123',
    database: 'HWdataWeek3',
  },
}

const knexInstance = knex(connection)

module.exports = knexInstance
