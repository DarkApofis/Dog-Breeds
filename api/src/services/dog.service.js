const {getAllDogs, getDogByBreed, getBreedByQuery} = require('./utils')
const {Breed, Temperament} = require('../db')

class DogService {
    constructor(){}

    async find() {
        try {
            const response = await getAllDogs()
            let data = []
            response.map(breed => {
                let obj = {
                    id: breed.id,
                    name: breed.name,
                    weight: breed.weight,
                    temperament: breed.temperament,
                    image: breed.image,
                    createdInDB: breed.createdInDB
                }
                data.push(obj)
            })
            return data
        } catch (error) {
            throw new Error(error)
        }
    }

    async findByQuery(query){
        const response = await getBreedByQuery(query)
        if(response.length === 0) throw new Error(`No se encontro la/s raza/s ${query}`)
        return response
    }

    async findOne(id) {
        const response = await getDogByBreed(id)
        if(!response) throw new Error('No se encontro la raza')
        return response
    }
    async createBreed(name, height, weight, lifeSpan, temperaments, image){
        let newBreed = await Breed.create({name, height, weight, lifeSpan, image})
        let temps = await Temperament.findAll({
            where: { name: temperaments },
        });
        newBreed.addTemperament(temps);
        return newBreed
    }

    async deleteBreed(id){
        let deleteBreed = await Breed.destroy({
            where: {
                id: id
            }
        })

        return deleteBreed
    }
}

module.exports = DogService;