import axios from "axios"

export const getBreeds = () => {
    return async function(dispatch){
        const response = await axios.get("/dogs")
        const {data} = response
        if(data !== undefined){
            dispatch({type: 'GET_BREEDS', payload: data})
        }
    }
}

export const getBreedByName = (breed) => {
    return async function(dispatch){
            try {
                const response = await axios.get(`/dogs/?name=${breed}`)
                const {data} = response;
                dispatch({type: 'BREEDS_BY_NAME', payload: data})
            } catch (error) {
                dispatch({type: 'BREEDS_BY_NAME', payload: 'error'})
            }
            // if(response.status === 200){
            // }
            // else{
            //     dispatch({type: 'BREEDS_BY_NAME', payload: []})
            // }
    }
}

export const getBreedById = (id) => {
    return async function(dispatch){
        const response = await axios.get(`/dogs/${id}`)
        if(response.status === 200){
            const {data} = response;
            dispatch({type: 'BREED_BY_ID', payload: data[0]})
        }
    }
}

export const getBreedsTemperaments = () => {
    return async function(dispatch){
        const response = await axios.get(`/temperament`)
        const {data} = response
        if(data !== undefined){
            dispatch({type: 'GET_TEMPERAMENTS', payload: data})
        }
    }
}

export const createBreed = (breedData) => {
    return async function(dispatch){
        const response = await axios.post("/dogs", breedData)
    }
}

export const orderBy = (value) => ({
    type: 'ORDER_BY',
    payload: value
})

export const orderByTemperament = (temperament) => ({
    type: 'ORDER_BY_TEMPERAMENT',
    payload: temperament
})

export const cleanDetails = () => ({
    type: 'CLEAN_DETAIL'
})