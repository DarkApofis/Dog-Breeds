import LoadingCard from "../../components/LoadingCard"
import Pagination from "../../components/Pagination"
import { Suspense, lazy} from "react";
const Cards = lazy(() =>  {
    return import("../Cards")
});
import usePagination from "../../hooks/usePagination";

export default function CardsContainer(){
    const {
        postsPerPage,
         currentPosts, 
         currentPage, 
         paginate, 
         breeds
    } = usePagination()
    

    // if(breeds.length === 0){
    //     return (
    //         <h1>Who let the dogs out?</h1>
    //     )
    // }


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