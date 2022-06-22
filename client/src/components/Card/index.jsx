import { useNavigate } from "react-router-dom"
import { Image, Article, Div, H2, P, ImageContainer } from "./styles"
import { Span } from "../CardDetails/styles"

export default function Card({image, name, weight, temperament, id}){

    let navigate = useNavigate()

    return(
        <Article onClick={() => navigate(`/breeds/${id}`)}>
            <ImageContainer>
                <Image src={image} alt={`Image of dog breed called ${name}`} loading="lazy"/>
            </ImageContainer>
            <Div>
                <H2><Span>{name}</Span></H2>
                <P><Span>Weight:</Span> {weight}</P>
                <P><Span>Temperament:</Span> {temperament}</P>
            </Div>
        </Article>
    )
}