import {useSelector} from "react-redux"
import Card from "../../components/Card"
import { Section } from "./styles"

export default function Cards({breeds}){

    // const breeds = useSelector(state => state.breeds)

    return (
        <Section>
            {breeds.map(breed => (
                <Card 
                    key={breed.id}
                    id={breed.id}
                    image={breed.image}
                    name={breed.name}
                    temperament={breed.temperament}
                    weight={breed.weight}
                />)
            )}
        </Section>
    )
}