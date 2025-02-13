import { useState } from "react";
import Product from "./Product";

function Products({ data, quantityToDisplay, slug, pagination, noPerPage }) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / noPerPage);

  const startIdx = (currentPage - 1) * noPerPage;
  const endIdx = startIdx + noPerPage;
  const productsToDisplay = quantityToDisplay
    ? data.slice(0, quantityToDisplay)
    : data.slice(startIdx, endIdx);

  // Handle page change
  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-3 small-pc:mb-4 flex-wrap w-full">
       <div className="flex items-center justify-center gap-3 small-pc:mb-4 flex-wrap w-full">
        {
            productsToDisplay?.map((item, idx) => (
                <Product key={idx} data={item} />
            ))
        }
      </div> 

        {pagination && totalPages > 1 && (
          <div className="flex justify-center items-center mt-5 mb-5">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
            >
              Previous
            </button>

            <span className="mx-4">
              Page {currentPage} of {totalPages}
            </span>

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
            >
              Next
            </button>
          </div>
        )}
    </div>
  )
}

export default Products