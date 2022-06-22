import { useEffect, useState } from "react"
import { Form, Input, Select } from "./styles"
import { useDispatch, useSelector } from "react-redux"
import usePagination from "../../hooks/usePagination"
import { 
    getBreeds, 
    getBreedByName, 
    orderBy, 
    getBreedsTemperaments,
    orderByTemperament
} from "../../redux/actions"
export default function FilterBreeds(){
    
    const {paginate} = usePagination()

    const [order, setOrder] = useState("")
    const [breedName, setBreedName] = useState("")
    const [temperament, setTemperament] = useState("")

    const dispatch = useDispatch()

    const temperaments = useSelector(state => state.temperament)

    useEffect(() => {
        dispatch(getBreedsTemperaments())
    }, [])

    useEffect(() => {
        if(breedName.length >= 1) {
            dispatch(getBreedByName(breedName))
        } else {
            dispatch(getBreeds())
        }
    },[breedName])

    useEffect(() => {
        dispatch(orderBy(order))
    }, [order])

    useEffect(() => {
        dispatch(orderByTemperament(temperament))
    },[temperament])

    function handleBreedName(e){
        e.preventDefault()
        setBreedName(e.target.value)
    }

    function handleTemperament(e){
        setTemperament(e.target.value)
        paginate(1)
    }

    return (
        <Form>
            <Input 
                placeholder='Search breed...' 
                value={breedName} 
                onChange={e => handleBreedName(e)}
            />
            <div>
                <Select value={order} onChange={(e) => setOrder(e.target.value)}>
                    <option value='allBreeds'>ALL BREEDS</option>
                    <option value='apiBreeds'>API BREEDS</option>
                    <option value='dbBreeds'>DB BREEDS</option>
                    <option value='alfaAZ'>ALFABETO: A - Z</option>
                    <option value='alfaZA'>ALFABETO: Z - A</option>
                    <option value='pesoBA'>PESO: DE BAJO A ALTO</option>
                    <option value='pesoAB'>PESO: DE ALTO A BAJO</option>
                </Select>
                <Select 
                    onChange={(e) => handleTemperament(e)}
                    value={temperament}
                >
                    {temperaments && temperaments.map(temperament => (
                        <option 
                            key={temperament.id} 
                            value={temperament.name}
                        >
                            {temperament.name}
                        </option>
                    ))}
                </Select>
            </div>
        </Form>
    )
}