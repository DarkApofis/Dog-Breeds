import { Article, ImageContainer, Div, H2, P, Section } from "./styles"

export default function LoadingCard(){

    const loading = [1, 2, 3, 4, 5, 6, 7, 8]

    return(
    <Section>
        {loading.map(item => (
            <Article key={item}>
                <ImageContainer></ImageContainer>
                <Div>
                    <H2></H2>
                    <P></P>
                    <P></P>
                </Div>
            </Article>
        ))}
    </Section>
    )
}