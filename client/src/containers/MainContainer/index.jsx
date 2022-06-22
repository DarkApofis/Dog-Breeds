import FilterBreeds from "../../components/FilterBreeds"
import CardsContainer from "../CardsContainer"
import { Main } from "./styles"
import HeaderComponent from "../../components/Header"

export default function MainContainer(){
    return (
        <>
            <HeaderComponent/>
            <Main>
                <FilterBreeds/>
                <CardsContainer/>

            </Main>
        </>
    )
}