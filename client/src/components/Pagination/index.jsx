import { Nav, UL, LI, DIV} from "./styles";

export default function Pagination({postsPerPage, totalPosts, paginate, currentPage}){
    
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
      }
    
      return (
        <Nav>
          <UL className='pagination'>
            {pageNumbers.map(number => (
              <LI key={number}>
                <DIV 
                  onClick={() => paginate(number)} 
                  className={`${currentPage === number ? "paint" : ""}`}
                >
                  {number}
                </DIV>
              </LI>
            ))}
          </UL>
        </Nav>
      );
}