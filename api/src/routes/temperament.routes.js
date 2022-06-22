const express = require('express')
const TemperamentService = require('../services/temperament.service')

const router = express.Router()
const service = new TemperamentService

router.get('/', async (req, res) => {
    const temperament = await service.find()
    res.json(temperament)
})

module.exports = router