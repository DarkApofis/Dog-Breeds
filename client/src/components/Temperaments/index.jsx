import { DIV, Button } from "./styles"

export default function Tempe({temp, deleteTemp}){
    return(
        <DIV>
            <p>{temp}</p>
            <Button onClick={() => deleteTemp(temp)}>x</Button>
        </DIV>
    )
}