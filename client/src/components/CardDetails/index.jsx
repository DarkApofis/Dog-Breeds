import { useParams, useNavigate } from "react-router-dom"
import { getBreedById, cleanDetails } from "../../redux/actions"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { 
    Section, 
    Main, 
    Button, 
    ImageContainer, 
    Image, 
    InfoContainer, 
    UL, 
    LI,
    Span
} from "./styles"

export default function CardDetails(){
    let {breedId} = useParams()

    let dispatch = useDispatch()
    
    let navigate = useNavigate()

    function goBackAndClean(){
        navigate(-1)
        dispatch(cleanDetails())
    }

    
    useEffect(() => {
        dispatch(getBreedById(breedId))
    }, [])
    
    let breed = useSelector(state => state.breed)

    return (

        <Section>
            <Button onClick={() => goBackAndClean()}>GO BACK</Button>
            <Main>
                <ImageContainer>
                    <Image src={`${breed?.image}`}/>
                </ImageContainer>
                <InfoContainer>
                    <UL>
                        <LI><Span>Name:</Span> {`${breed?.name}`}</LI>
                        <LI><Span>Weight:</Span> {`${breed?.weight}`}</LI>
                        <LI><Span>Height:</Span> {`${breed?.height}`}</LI>
                    </UL>
                    <UL>
                        <LI><Span>Life Span:</Span> {`${breed?.lifeSpan}`}</LI>
                        <LI><Span>Temperament:</Span> {`${breed?.temperament}`}</LI>
                    </UL>
                </InfoContainer>
            </Main>
        </Section>
    )
}