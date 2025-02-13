import Button from "../../Components/Helpers/Button"

function ConsultationTable({ data }) {
  return (
    <table className="w-full">
        <thead className="bg-gray-100 rounded-t-[10px] p-8">
            <tr className="w-full p-3 flex items-center">
                <th className="flex flex-1 tablet:p-2 text-start text-[15px] font-normal">Name</th>
                <th className="flex flex-1 tablet:p-2 text-start text-[15px] font-normal">Email</th>
                <th className="flex flex-1 tablet:p-2 text-start text-[15px] font-normal">Phone Number</th>
                <th className="flex flex-1 tablet:p-2 text-start text-[15px] font-normal">Gender</th>
                <th className="flex flex-1 tablet:p-2 text-start text-[15px] font-normal">Reason for consultation</th>
                <th className="flex flex-1 tablet:p-2 text-start text-[15px] font-normal">Action</th>
            </tr>
        </thead>

        <tbody>
            {
              data?.map((i, idx) => (
                <tr key={idx} className="w-full p-3 flex items-center mb-3 border-b-[1px] last:border-b-[0]" >
                    <td className="flex flex-1 tablet:p-2 text-start text-[14px] font-normal">{i.name}</td>
                    <td className="flex flex-1 tablet:p-2 text-start text-[14px] font-normal">{i.email}</td>
                    <td className="flex flex-1 tablet:p-2 text-start text-[14px] font-normal">{i.phoneNumber}</td>
                    <td className="flex flex-1 tablet:p-2 text-start text-[14px] font-normal">{i.gender}</td>
                    <td className="flex flex-1 tablet:p-2 text-start text-[14px] font-normal">{i.reasonToSeeFada}</td>
                    <td className="flex flex-1 tablet:p-2 text-start text-[14px] font-normal">
                      <div className="flex items-center gap-4">
                        <Button text={`Accept`} style={`!bg-green-500 !py-2 !px-1 !text-[14px]`} />
                        <Button text={`Reject`} style={`!bg-error !py-2 !px-1 !text-[14px]`} />
                      </div>
                    </td>
                </tr>
              ))
            }
        </tbody>
      
    </table>
  )
}

export default ConsultationTable
