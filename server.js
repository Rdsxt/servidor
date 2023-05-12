const express = require('express')
const app = express()
const { sql } = require('./db/sql')
const route = require("./routes/route")

app.use('/', route)

app.listen(5000, () => {
    console.log('Connected');
})