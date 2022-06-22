const {getTemperaments} = require('./utils')
const {Temperament} = require('../db')

class TemperamentService {
    async find(){
        const response = await getTemperaments()
        response.forEach(item => {
            Temperament.findOrCreate({
                where: {name: item}
            })
        })
        const allTemperaments = await Temperament.findAll();
        return allTemperaments
    }
}

module.exports = TemperamentService