import { useEffect, useState } from "react"
import CountryCard from "./CountryCard"
import { ScrollTop } from "./ScrollTop";


const Pagination = ({ data, itemsPerPage }) => {

  const [totalPage, setTotalPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate total pages whenever `data` or `itemsPerPage` changes
  useEffect(() => {
    setTotalPage(Math.ceil(data.length / itemsPerPage))
  }, [data, itemsPerPage])


  // Calculate the items to display for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayItems = data.slice(startIndex, endIndex)


  // Generate pagination buttons
  const prevThree = Array.from({ length: 1 }, (_, index) => currentPage - 1 - index)
    .filter((value) => value > 0).reverse()

  const nextFour = Array.from({ length: 2 }, (_, index) => currentPage + index)
    .filter(value => value <= totalPage)

  const paginationButtons = [...prevThree, ...nextFour];

  // Page change handlers
  const handlePageChange = (next) => setCurrentPage(next)

  //prev page button
  const nextPage = () => {
    if (currentPage < totalPage) setCurrentPage(currentPage + 1)
  }

  //next page button
  const previousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1)
  }

  return (<>

    {/* scroll page to top */}
    <ScrollTop dependency={currentPage} />

    <div className="grid-col-four">
      {displayItems.map((crrCountry, index) => {
        return (
          <>
            <CountryCard key={index} country={crrCountry} />
          </>)
      })}
    </div>

    {/* Pagination controls */}
    <div className="card pagination" role="navigation" aria-label="Pagination">


      {/* Previous Button */}
      {currentPage > 1 && (
        <button
          type="button"
          className="pagination-btn"
          onClick={previousPage}
          aria-label="Previous Page"
        >
          {"<"}
        </button>
      )}


      {/* Pagination Buttons */}
      {paginationButtons.map((value) => (
        <button
          key={value}
          onClick={() => handlePageChange(value)}
          className={
            currentPage === value ? "pagination-btn-active" : "pagination-btn"
          }
          aria-label={`Page ${value}`}
        >
          {value}
        </button>
      ))}


      {/* Next Button */}
      {currentPage < totalPage && (
        <button
          type="button"
          className="pagination-btn"
          onClick={nextPage}
          aria-label="Next Page"
        >
          {">"}
        </button>
      )}
    </div >

  </>)

}

export default Pagination