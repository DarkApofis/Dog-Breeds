import { Header, H1, StyledLink } from "./styles"

export default function HeaderComponent(){
    return (
        <Header>
            <H1>
                <StyledLink to='/home'>Dog Breeds</StyledLink>
            </H1>
            <StyledLink to='/create'>Create Breed</StyledLink>
        </Header>
    )
}