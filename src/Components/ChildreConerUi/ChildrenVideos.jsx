import { useState, useEffect } from 'react';

// Function to shuffle an array
const shuffleArray = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

function ChildrenVideos({ data }) {
  const [shuffledData, setShuffledData] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    // Shuffle the data when the component mounts
    setShuffledData(shuffleArray([...data]));
  }, [data]);

  const handleVideoClick = (videoLink) => {
    setSelectedVideo(videoLink);
  };

  const handleCloseModal = () => {
    setSelectedVideo(null);
  };

  // Helper function to generate random sizes for the video cards
  const getRandomSize = () => {
    const widths = ['w-[300px]', 'w-[350px]', 'w-[400px]', 'w-[450px]', 'w-[600px]'];
    const heights = ['h-[250px]', 'h-[280px]', 'h-[300px]', 'h-[320px]', 'h-[500px]'];
    const randomWidth = widths[Math.floor(Math.random() * widths.length)];
    const randomHeight = heights[Math.floor(Math.random() * heights.length)];
    return `${randomWidth} ${randomHeight}`;
  };

  // Pagination logic
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentData = shuffledData.slice(startIndex, startIndex + itemsPerPage);
  const totalPages = Math.ceil(shuffledData.length / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="pad1 flex flex-col items-center my-8">
      <div className="flex justify-center items-center flex-wrap gap-8 mb-4">
        {currentData.map((video, index) => (
          <div
            key={index}
            className={`relative cursor-pointer overflow-hidden rounded-lg ${getRandomSize()}`}
            onClick={() => handleVideoClick(video.video_content_url)}
          >
            <video src={video.video_content_url} className="w-full h-full" controls={false} muted autoPlay loop></video>
            <div className="absolute bottom-0 left-0 w-full bg-main-color text-white text-center text-[19px]">
              Story Title: {video.content_title}
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-8 justify-center mt-8 w-full">
        <button
          className={`px-4 py-2 bg-gray-700 text-white rounded ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
          onClick={handlePrevPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className="text-white">{`Page ${currentPage} of ${totalPages}`}</span>
        <button
          className={`px-4 py-2 bg-gray-700 text-white rounded ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>

      {selectedVideo && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
          onClick={handleCloseModal} // Close modal when clicking on the background
        >
          <div
            className="relative bg-white rounded-lg overflow-hidden shadow-lg"
            onClick={(e) => e.stopPropagation()} // Prevent click inside modal from closing it
          >
            <button
              className="absolute top-2 right-2 z-50 text-white bg-gray-700 hover:bg-gray-900 rounded-full p-1"
              onClick={handleCloseModal}
            >
              Close
            </button>
            <video controls className="w-full max-w-3xl">
              <source src={selectedVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </div>
  );
}

export default ChildrenVideos;
