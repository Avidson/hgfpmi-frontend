import { useState } from "react";
import LogoImg from "../../assests/HGFPMI-LOGO.png";
import { TbEdit } from "react-icons/tb";
import { MdDelete } from "react-icons/md";

function AllTestimonies({ data, setSelectedCard, setTestimonyId }) {
  const allTestimonies = data;

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Calculate the total number of pages
  const totalPages = Math.ceil(allTestimonies.length / itemsPerPage);

  // Get current page data
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentData = allTestimonies.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const handleEdit = (value) => {
    setTestimonyId(value);
    setSelectedCard("newTestimony");
  };

  const handleDelete = () => {

  }
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-center flex-wrap gap-4 w-ful mb-8">
        {currentData.map((item, idx) => (
          <div
            key={idx}
            className="bg-white w-[450px]  rounded-xl shadow-md p-6 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
          >
            <div className="flex flex-col items-center">

              <div className="mb-4">
                <div className="w-16 h-16 relative flex items-center justify-center">
                  <div className="absolute inset-0 bg-red-500 rounded-full opacity-20"></div>
                  <img alt="logo" src={LogoImg} className="w-[38px]" />
                </div>
              </div>

              <blockquote className="text-gray-700 text-center mb-4 line-clamp-4">
                "{item?.testimony}"
              </blockquote>

              <div className="text-center mt-auto">
                <h4 className="font-semibold text-gray-900 mb-1">
                  {item?.name}
                </h4>
                <p className="text-red-500 text-sm">{item?.role}</p>
              </div>

              <div className="flex items-center justify-center gap-6 mt-6">
                  <div onClick={() => handleEdit(item?.id)} className="flex flex-col items-center justify-center gap-1 text-green-500">
                    <TbEdit className="text-[24px]"/>
                    Edit
                  </div>
                  <div onClick={() => handleDelete(item?.id)} className="flex flex-col items-center justify-center gap-1 text-error">
                      <MdDelete className="text-[24px]" />
                      Delete
                  </div>
              </div>

            </div>
          </div>
        ))}
      </div>
      {/** PAGINATION */}
      <div className="flex justify-center items-center mt-auto space-x-4">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-white text-main-color border rounded disabled:opacity-50"
        >
          Prev
        </button>
        <span className="text-gray-700">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-white text-main-color border rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default AllTestimonies;
