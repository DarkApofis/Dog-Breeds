import LoadingCard from "../../components/LoadingCard"
import Pagination from "../../components/Pagination"
import { Suspense, lazy} from "react";
const Cards = lazy(() =>  {
    return import("../Cards")
});
import usePagination from "../../hooks/usePagination";
import { H1 } from "./styles";

export default function CardsContainer(){
    const {
        postsPerPage,
         currentPosts, 
         currentPage, 
         paginate, 
         breeds
    } = usePagination()
    

    if(breeds === 'error'){
        return (
            <H1>Who let the dogs out?</H1>
        )
    }


    return(
        <>
            <Suspense fallback={<LoadingCard/>}>
                <Cards breeds={currentPosts}/>
            </Suspense>
            <Pagination 
                    postsPerPage={postsPerPage}
                    totalPosts={breeds.length}
                    paginate={paginate}
                    currentPage={currentPage}
            />
        </>
    )
}