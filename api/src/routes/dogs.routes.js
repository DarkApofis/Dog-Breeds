const express = require('express')
const DogService = require('../services/dog.service')

const router = express.Router();
const service = new DogService()

router.get('/', async (req, res) => {
    const {name} = req.query
    const dogs = await service.find()
    if(name) {
        try {
            const breeds = await service.findByQuery(name)
            return res.json(breeds)
        } catch (error) {
            return res.status(404).send({msg: error.message})
        }
    }
    res.json(dogs)
})

router.get('/:breedId', async(req, res) => {
    const {breedId} = req.params
    try {
        const dogBreed = await service.findOne(Number(breedId) || breedId)
        res.json(dogBreed)
    } catch (error) {
        res.status(400).send({msg: error.message})
    }
})

router.post('/', async (req, res) => {
    const {name, height, weight, lifeSpan, temperaments, image} = req.body
    try {
        const newBreed = await service.createBreed(name,height,weight,lifeSpan,temperaments, image)
        res.status(201).json(newBreed)
    } catch (error) {
        res.status(404).json({msg: error.message})
    }
})

router.delete('/:breedId', async (req, res) => {
    const {breedId} = req.params
    const deletedBreed = await service.deleteBreed(breedId)
    res.json(deletedBreed)
})

module.exports = router