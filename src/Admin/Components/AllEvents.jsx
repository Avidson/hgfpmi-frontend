import { useState } from "react";
import Button from "../../Components/Helpers/Button";
import { events } from "../Data/Events";
import EventsCard from "./Helpers/EventsCard";

function AllEvents({ setSelectedCard, setEditEventID }) {
  const allEvents = events;

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Calculate the total number of pages
  const totalPages = Math.ceil(allEvents.length / itemsPerPage);

  // Get current page data
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentData = allEvents.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const handleNewEvent = () => {
    setEditEventID();
    setSelectedCard("newEvents");
  };
  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="text-black">All Events</h2>
        <div>
          <Button onClick={handleNewEvent} text={"Add Event"} style={`p-1`} />
        </div>
      </div>

      <div className="mt-[3rem] flex items-center justify-center flex-wrap gap-6">
        {currentData.map((item) => (
          <EventsCard
            key={item._id}
            data={item}
            setEditEventID={setEditEventID}
            setSelectedCard={setSelectedCard}
          />
        ))}
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
  );
}

export default AllEvents;
