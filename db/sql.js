var mysql = require('mysql2/promise');
var con = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "Root",
    database: "mydb"
});

const sql = async (sql) => {
    try {
        const result = await con.query(sql)
        return result[0]
    } catch (e) {
        return e.code
    }
}

module.exports = {
    sql
}
