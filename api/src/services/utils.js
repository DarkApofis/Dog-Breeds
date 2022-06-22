const axios = require('axios')
const {Breed, Temperament} = require('../db')

async function getDogsFromApi(){
    const {data} = await axios.get("https://api.thedogapi.com/v1/breeds")
    return data
}

async function getDogsFromDb(){
    const data = await Breed.findAll({
        include:{
            model: Temperament,
            attributes: ["name"],
            through: {
                attributes: []
            }
        }
    })
    return data
}

async function getAllDogs(){
    let responseApi = await getDogsFromApi()
    let responseDB = await getDogsFromDb()
    let dataDB = []
    if(responseDB){
        responseDB.map(breed => {
            let obj = {
                id: breed.id,
                name: breed.name,
                height: breed.height,
                weight: breed.weight,
                lifeSpan: breed.lifeSpan,
                image: breed.image ? breed.image : "https://previews.123rf.com/images/cole123rf/cole123rf1504/cole123rf150400083/38609083-perro-de-trabajo-bulldog-vestido-como-trabajador-de-la-construcci%C3%B3n-en-el-fondo-blanco.jpg",
                createdInDB: breed.createdInDB,
                temperament: breed.temperaments
                    .map(item => {
                        return item.name;
                    })
                    .join(", "),
            }
            dataDB.push(obj)
        })
    }
    let dataApi = []
    responseApi.map(breed => {
        let obj = {
            id: breed.id,
            name: breed.name,
            height: breed.height.metric,
            weight: breed.weight.metric,
            temperament: breed.temperament,
            image: breed.image.url,
            lifeSpan: breed.life_span,
            createdInDB: false
        }
        dataApi.push(obj)
    })
    return [ ...dataApi, ...dataDB]
}

async function getDogByBreed(breedId){
    const response = await getAllDogs()
    const data = response.filter(breed => breed.id === breedId)
    return data
}

async function getBreedByQuery(query){
    const response = await getAllDogs()
    const data = response.filter(breed => breed.name.toLowerCase().includes(query.toLowerCase()))
    return data
}

async function getTemperaments(){
    let responseApi = await getDogsFromApi()
    const temp = responseApi.map(item => item.temperament)
    return Array.from(new Set(temp.join(', ').split(', '))).filter(item => item != "")
}

module.exports = {
    getDogsFromApi, 
    getDogsFromDb, 
    getAllDogs, 
    getTemperaments, 
    getDogByBreed, 
    getBreedByQuery
}