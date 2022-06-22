import { Form, Label, Input, Select, DIV, H2, P, Button} from "./styles"
import { useDispatch, useSelector } from "react-redux"
import { getBreedsTemperaments } from "../../redux/actions"
import { useEffect } from "react"
import useFormHandler from "../../hooks/useFormHandler"

import Tempe from "../Temperaments"
import HeaderComponent from "../Header"
export default function CreateBreed(){

    const {
        deactiveSubmit,
        inputErrors, 
        inputValues, 
        breedNameField, 
        numberRange, 
        addTemperaments, 
        deleteTemperaments,
        handleSubmit,
    } = useFormHandler()

    const {
        nameError, 
        weightError, 
        heightError, 
        lifeSpanError
    } = inputErrors

    let dispatch = useDispatch()

    useEffect(() => {
        dispatch(getBreedsTemperaments())
    }, [])

    let temperament = useSelector(state => state.temperament)

    return (
        <>
            <HeaderComponent/>
            <Form onSubmit={handleSubmit}>
                <Label>Breed Name*
                    <Input 
                        placeholder='Tenry'
                        value={inputValues.name}
                        className={`${nameError === "" ? 'correct' : "error"}`}
                        onChange={(e) => breedNameField(e.target.value)}
                        />
                    <P
                        className={nameError && 'error'}
                    >
                        {nameError}
                    </P>
                </Label>
                <Label>Breed Weight*
                    <Input
                        placeholder='5 - 15'
                        value={inputValues.weight}
                        className={`${weightError === "" ? "correct" : "error"}`}
                        onChange={(e) => numberRange(e.target.value, "weight")}
                    />
                    <P
                        className={weightError && 'error'}
                    >
                        {weightError}
                    </P>
                </Label>
                <Label>Breed Height*
                    <Input
                        placeholder='23 - 29'
                        value={inputValues.height}
                        className={`${heightError === "" ? "correct" : 'error'}`}
                        onChange={(e) => numberRange(e.target.value, "height")}
                    />
                    <P
                        className={heightError && 'error'}
                    >
                        {heightError}
                    </P>
                </Label>
                <Label>Life Span
                    <Input
                        placeholder='10 - 12'
                        value={inputValues.lifeSpan}
                        className={`${lifeSpanError === "" ? "correct" : 'error'}`}
                        onChange={(e) => numberRange(e.target.value, "lifeSpan")}
                    />
                    <P
                        className={lifeSpanError && 'error'}
                    >
                        {lifeSpanError}
                    </P>
                </Label>
                <Label>Select Breeds
                    <Select onChange={(e) => addTemperaments(e.target.value)}>
                        {temperament && temperament.map(temperament => (
                            <option 
                                key={temperament.id} 
                                value={temperament.name}
                            >
                                {temperament.name}
                            </option>
                        ))}
                    </Select>            
                </Label>
                {inputValues.temperaments.length > 0 && 
                <DIV>
                    <H2>Selected Temperaments</H2>
                    {inputValues.temperaments.map(temp => <Tempe key={temp} temp={temp} deleteTemp={deleteTemperaments}/>)}
                </DIV>
                }
                <Button disabled={deactiveSubmit}>CREATE BREED</Button>
            </Form>
        </>
    
    )
}