
function Spinner () {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div
        className="h-12 w-12 animate-spin rounded-full border-4 border-gray-300 border-t-[#2B4593]"
        role="status"
      ></div>
    </div>
  );
};

export default Spinner;
