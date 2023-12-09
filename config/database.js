const mysql = reqiure(' mysql2/promise')

const connectionPool = mysql.createPool({
    uri: process.env.DB_URI || `msql://root@localhost:3306/nutrinosh`
})

module.exports = { connectionPool};
