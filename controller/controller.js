const {sql} = require("../db/sql")

const showSelect = async (req, res) => {
    const id = req.params.id
    if(!id) {
        const sqlScript = "SELECT * FROM clientes"
        const result = await sql(sqlScript)
        res.send(result)
    }

    const sqlScript = `SELECT * FROM clientes WHERE id = ${id}`
    const result = await sql(sqlScript)
    res.send(result)
}

module.exports = {
    showSelect
}