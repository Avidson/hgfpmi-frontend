import { useState } from "react";
import { upcomingEvents } from "../../data/events"
import EventsCard from "./EventsCard"

function EventsAndCommunity() {
  const events = upcomingEvents

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Calculate the total number of pages
  const totalPages = Math.ceil(events.length / itemsPerPage);

  // Get current page data
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentData = events.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
            <div className="flex w-full">
        <div className="w-full p-8 rounded-[20px] mt-4 mb-8 bg-main-color-dark text-white flex items-center justify-center">
            <h2 className="text-[32px] tablet:text-[26px] phone:text-[24px] font-semibold">Upcoming Events</h2>
        </div>
      </div>

      {/**EVENTS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {
          currentData.map((item, idx) => (
            <EventsCard data={item} key={idx} />
          ))
        }
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
  )
}

export default EventsAndCommunity
