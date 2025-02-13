import Footer from "../Helpers/Footer"
import OurCampaign from '../Helpers/OurCampaign'

function AboutHGFPMI() {
  return (
    <div className="">
        <div className="pad1 mb-8">

        <div className="flex w-full">
        <div className="w-full p-8 rounded-[20px] mt-8 mb-8 bg-main-color-dark text-white flex items-center justify-center">
            <h2 className="text-[32px] tablet:text-[26px] phone:text-[24px] font-semibold">About HGFPMI</h2>
        </div>
      </div>


         <OurCampaign />
        </div>

      <Footer />
    </div>
  )
}

export default AboutHGFPMI
