import Button from "../../Components/Helpers/Button"
import AllTestimonies from "../Components/AllTestimonies"
import Navbar from "../Components/Navbar"
import Sidebar from "../Components/Sidebar"
import { testimoniesData } from "../Data/testimonies"

function Testimonies({ setSelectedCard, setTestimonyId }) {
    const data = testimoniesData
    const handleNewTestimony = () => {
      setSelectedCard('newTestimony')
    }
  return (
    <div className="relative flex items-start gap-[12px] p-3 h-[100vh] w-[100vw]">

      <div className="fixed rounded-[20px] left-3 top-3 w-[260px] h-[calc(100vh-24px)] bg-main-color z-10">
        <Sidebar />
      </div>

      <div className="relative overflow-x-hidden flex-1 ml-[272px] h-full rounded-[20px] border-[2px] border-red-500">
        <Navbar title={'Testimonies'} />

        <div className="mt-[1rem] p-3">
            
          <div className="flex items-center">
             <div className="ml-auto">
                <Button onClick={handleNewTestimony} text={'Add Testimony'} style={''} />
             </div>
          </div>

          <div className="mt-[1rem] p-3">

            <AllTestimonies data={data} setSelectedCard={setSelectedCard} setTestimonyId={setTestimonyId} />

          </div>

        </div>

      </div>

    </div>
  )
}

export default Testimonies
