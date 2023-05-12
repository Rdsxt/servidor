const express = require("express")
const route = express.Router()
const {showSelect} = require("../controller/controller")

route.get("/:id?", showSelect)

module.exports = route