'use restrict'

const express = require('express')

const app = express()

require('../drivers/mongo-connect')

//settigs 
app.set('port', process.emitWarning.PORT || 3000)

//middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//routers
app.use('/api',require('../routes/index'));

module.exports = app
