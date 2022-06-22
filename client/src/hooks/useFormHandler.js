import {useEffect, useState} from "react"
import { useDispatch } from "react-redux"
import { createBreed } from "../redux/actions"

export default function useFormHandler(){

    const nameRegex = /\w{3,}[^\d]/
    const numberRegex = /\d+\s\-\s\d+/

    const [deactiveSubmit, setDiactiveSubmit] = useState(true)

    let dispatch = useDispatch()

    const [inputValues, setInputValues] = useState({
        name: "",
        weight: "",
        height: "",
        lifeSpan: "",
        temperaments: [],
    })


    
    const [inputErrors, setInputErrors] = useState({
        nameError: undefined,
        weightError: undefined,
        heightError: undefined,
        lifeSpanError: undefined,
        temperamentsError: undefined,
    })
    
    useEffect(() => {
        let name = inputErrors.nameError === ""
        let weight = inputErrors.weightError === ""
        let height = inputErrors.heightError === ""
        let lifeSpan = inputErrors.lifeSpanError === ""
        if(name && weight && height && lifeSpan){
            setDiactiveSubmit(false)
        } else {
            setDiactiveSubmit(true)
        }
    }, [inputValues.name, inputValues.weight, inputValues.height, inputValues.lifeSpan])

    function breedNameField(breed){
        setInputValues(prevFormData => {
            return {
                ...prevFormData,
                name: breed
            }
        })
        if(nameRegex.test(breed)){
            setInputValues(prevFormData => {
                return {
                    ...prevFormData,
                    name: breed
                }
            })
        } else{
            return setInputErrors(prevFormData => {
                return {
                    ...prevFormData,
                    nameError: "The breed name should have at least 3 characters"
                }
            })
        }
        setInputErrors(prevFormData => {
            return {
                ...prevFormData,
                nameError: ""
            }
        })
    }

    function numberRange(numRange, input){
        setInputValues(prevFormData => {
            return {
                ...prevFormData,
                [input]: numRange
            }
        })
        if(numberRegex.test(numRange)){
            let minValue = Number(numRange.split("-")[0])
            let maxValue = Number(numRange.split("-")[1])
            if(minValue < maxValue){
                setInputValues(prevFormData => {
                    return {
                        ...prevFormData,
                        [input]: numRange
                    }
                })
            } else{
                return setInputErrors(prevFormData => {
                    return {
                        ...prevFormData,
                        [`${input}Error`]: 'Invalid format, the first number should be lower'
                    }
                }) 
            }
        }else{
            return setInputErrors(prevFormData => {
                return {
                    ...prevFormData,
                    [`${input}Error`]: 'Invalid format, should be equal to "4 - 10"'
                }
            }) 
        }
        setInputErrors(prevFormData => {
            return {
                ...prevFormData,
                [`${input}Error`]: ""
            }
        }) 

    }

    function addTemperaments(temp){
        const tempIndex = inputValues.temperaments.findIndex(item => item === temp)
        const newTemps = [...inputValues.temperaments]
        if(tempIndex === -1){
            newTemps.push(temp)
        }
        setInputValues(prevFormData => {
            return {
                ...prevFormData,
                temperaments: newTemps
            }
        })
    }

    function deleteTemperaments(temp){
        const tempIndex = inputValues.temperaments.findIndex(item=> item === temp)
        const newTemps = [...inputValues.temperaments]
        newTemps.splice(tempIndex, 1)
        setInputValues(prevFormData => {
            return {
                ...prevFormData,
                temperaments: newTemps
            }
        })
    }

    function handleSubmit(e){
        e.preventDefault()
        dispatch(createBreed(inputValues))
        setInputValues({
            name: "",
            weight: "",
            height: "",
            lifeSpan: "",
            temperaments: []
        })
    }



    return {
        inputErrors,
        inputValues,
        deactiveSubmit,
        breedNameField,
        numberRange,
        addTemperaments,
        deleteTemperaments,
        handleSubmit
    }
}
