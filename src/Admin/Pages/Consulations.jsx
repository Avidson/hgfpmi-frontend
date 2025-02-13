import { useState } from "react";
import ConsultationTable from "../Components/ConsultationTable";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import { consultationRequest } from "../Data/consultation";

function Consultations() {
  const data = consultationRequest;

  const filterOptions = [
    { text: "All" },
    { text: "Accepted" },
    { text: "Pending" },
    { text: "Rejected" },
  ];
  const [selectedOption, setSelectedOption] = useState(filterOptions[0].text);

  const filterData = data.filter(
    (item) =>
      selectedOption.toLowerCase() === "all" ||
      item?.status?.toLowerCase() === selectedOption.toLowerCase()
  );

  return (
    <div className="relative flex items-start gap-[12px] p-3 h-[100vh] w-[100vw]">
      <div className="fixed rounded-[20px] left-3 top-3 w-[260px] h-[calc(100vh-24px)] bg-main-color z-10">
        <Sidebar />
      </div>

      <div className="relative overflow-x-hidden flex-1 ml-[272px] h-full rounded-[20px] border-[2px] border-red-500">
        <Navbar title={"Consultations"} />

        <div className="mt-[1rem] p-3">
          <div className="mt-8 flex items-center gap-2 mb-4">
            {filterOptions.map((i, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedOption(i.text)}
                className={`py-2 px-4 bg-gray-100 rounded-[10px] cursor-pointer ${
                  i.text === selectedOption ? "!bg-gray-600 !text-white" : ""
                }`}
              >
                {i.text}
              </div>
            ))}
          </div>
          {/* Render filtered data */}
          <ConsultationTable data={filterData} />
        </div>
      </div>
    </div>
  );
}

export default Consultations;
