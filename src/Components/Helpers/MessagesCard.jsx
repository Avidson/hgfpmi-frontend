import { useState } from 'react';
import { Link } from "react-router-dom";

const MessagesCard = ({ image, title, author, link, id }) => (

  <div className="group bg-white rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2">
    <div className="relative overflow-hidden h-64">
      <iframe 
        src={image} 
        alt={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
    </div>
    <div className="p-6">
      <h3 className="text-2xl font-bold mb-3 text-gray-800 group-hover:text-main-color transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 line-clamp-3 mb-4">
        {author}
      </p>
      <div className="flex items-center justify-between">
        <Link 
          to={`${link}`}
          target='_blank'
          className="text-main-color-dark font-semibold hover:text-main-color transition-colors flex items-center gap-2">
          OPEN
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

const MessagesSection = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Calculate the total number of pages
  const totalPages = Math.ceil(data?.length / itemsPerPage);

  // Get current page data
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentData = data?.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <section className="py-16 pad1 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl small-pc:text-4xl tablet:text-3xl font-bold text-gray-900 mb-4">Previous Messages</h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentData.map((message) => {
            const embedUrl = message?.url_for
            .split("?")[0]
            .replace("youtu.be/", "www.youtube.com/embed/") + "?autoplay=1&mute=1";

            return (
              <MessagesCard 
                key={message?.id}
                image={embedUrl}
                title={message?.message_title}
                author={message?.author || 'HGFPMI'}
                link={message?.url_for}
                id={message?.id}
              />
            )
          }
          )}
        </div>

        {/** PAGINATION */}
        <div className="flex justify-center items-center mt-8 space-x-4">
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
    </section>
  );
};

export default MessagesSection;
