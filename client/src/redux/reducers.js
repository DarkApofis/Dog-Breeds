const initialState = {
    allBreeds: [],
    breeds: [],
    breed: {},
    temperament: []
}

export const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case 'GET_BREEDS':
            return {...state, breeds: action.payload, allBreeds: action.payload}
        case 'BREEDS_BY_NAME':
            return {...state, breeds: action.payload} 
        case 'BREED_BY_ID':
            return {...state, breed: action.payload}
        case 'CREATE_BREED':
            return {...state}
        case 'ORDER_BY':
            if(action.payload === 'allBreeds'){
                return {...state, breeds: [...state.allBreeds]}
            }
            if(action.payload === 'apiBreeds'){
                return {
                    ...state,
                    breeds: [...state.allBreeds].filter(breed => breed.createdInDB === false)
                }
            }
            if(action.payload === 'dbBreeds'){
                return {
                    ...state,
                    breeds: [...state.allBreeds].filter(breed => breed.createdInDB === true)
                }
            }
            if(action.payload === 'alfaAZ'){
                return {
                    ...state, 
                    breeds: [...state.breeds].sort((a, b) => {
                        return (a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1)
                    })
                }
            }
            if(action.payload === 'alfaZA'){
                return {
                    ...state, 
                    breeds: [...state.breeds].sort((a, b) => {
                        return (a.name.toLowerCase() < b.name.toLowerCase() ? 1 : -1)
                    })
                }
            }
            if(action.payload === 'pesoBA'){
                return {
                    ...state,
                    breeds: [...state.breeds].sort((a, b) => {
                        let weightA = Number(a.weight.split('-')[0])
                        let weightB = Number(b.weight.split('-')[0])
                        return weightA > weightB ? 1 : -1
                    })
                }
            }
            if(action.payload === 'pesoAB'){
                return {
                    ...state,
                    breeds: [...state.breeds].sort((a, b) => {
                        let weightA = Number(a.weight.split('-')[0])
                        let weightB = Number(b.weight.split('-')[0])
                        return weightA < weightB ? 1 : -1
                    })
                }
            }
        case 'ORDER_BY_TEMPERAMENT':
            return {
                ...state,
                breeds: [...state.allBreeds].filter(breed => {
                    return breed.temperament?.includes(action.payload)
                })
            }
        case 'GET_TEMPERAMENTS': {
            return {...state, temperament: action.payload}
        }
        case 'CLEAN_DETAIL':
            return {...state, breed: {}}
        default:
            return state
    }
    
}