import { useState } from 'react';
import { Link } from "react-router-dom";

const BlogCard = ({ image, title, body, link }) => (
  <div className="group bg-white rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2">
    <div className="relative overflow-hidden h-64">
      <img 
        src={image} 
        alt={title}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
    </div>
    <div className="p-6">
      <h3 className="text-2xl font-bold mb-3 text-gray-800 group-hover:text-main-color transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 line-clamp-3 mb-4">
        {body}
      </p>
      <div className="flex items-center justify-between">
        <Link 
          to={`/blog/${link}`}
          className="text-main-color-dark font-semibold hover:text-main-color transition-colors flex items-center gap-2">
          READ MORE 
          <svg 
            className="w-4 h-4 group-hover:translate-x-1 transition-transform" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  </div>
);

const BlogSection = ({ data, pagination, noPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / noPerPage);

  // Determine what data to display
  const currentPageData = pagination 
    ? data.slice((currentPage - 1) * noPerPage, currentPage * noPerPage)
    : data;

  // Function to handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <section className="py-16 pad1">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">BLOGS</h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentPageData.map((blog) => (
            <BlogCard 
              key={blog.id}
              image={blog.image}
              title={blog.title}
              body={blog.body}
              link={blog.id}
            />
          ))}
        </div>

        {/* Pagination Controls */}
        {pagination && (
  <div className="flex justify-center items-center mt-8">
    <button
      onClick={() => handlePageChange(currentPage - 1)}
      disabled={currentPage === 1}
      className={`px-4 py-2 rounded-l ${
        currentPage === 1 ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-main-color text-white hover:bg-main-color-dark'
      }`}
    >
      &lt;
    </button>

    <span className="mx-4 text-lg font-semibold">
      {currentPage} / {totalPages}
    </span>

    <button
      onClick={() => handlePageChange(currentPage + 1)}
      disabled={currentPage === totalPages}
      className={`px-4 py-2 rounded-r ${
        currentPage === totalPages ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-main-color text-white hover:bg-main-color-dark'
      }`}
    >
      &gt;
    </button>
  </div>
)}
      </div>
    </section>
  );
};

export default BlogSection;
