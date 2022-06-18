'use strict'

const controller = require('../controllers/controller')

const express= require('express')

const {model} = require('mongoose')

const router = express.Router()

router.get('/', controller.getElements)

router.post('/newElement', controller.newElement)

module.exports = router
 
