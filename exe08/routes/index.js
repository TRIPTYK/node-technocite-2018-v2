const express = require('express')
const router = express.Router()
const pagesController = require(`${process.cwd()}/controllers/pagesController`)
router.get('/', pagesController.home)
router.get('/about', pagesController.about)

module.exports = router