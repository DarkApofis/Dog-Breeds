import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function usePagination(){
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage] = useState(8);

    const breeds = useSelector(state => state.breeds)

    //Get current breeds
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = breeds.slice(indexOfFirstPost, indexOfLastPost);

    //Change page
    function paginate(pageNumber){
        return setCurrentPage(pageNumber)
    }

    return {
        currentPosts,
        paginate,
        postsPerPage,
        currentPage,
        breeds
    }
}