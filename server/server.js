const express = require('express')
const bodyparser = require('body-parser')
const sourcemapsupport = require('source-map-support')
const bodyparser= require('body-parser')
const mysql = require('mysql')
const port = process.env.PORT || 3000

const app = express()

app.use(express.static('static'))

app.use(bodyparser())

app.use(app.use(express.static('static')))

app.listen(port, ()=>{
    console.log('Server started on port 3000')
})