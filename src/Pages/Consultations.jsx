import { useEffect } from "react"
import ConsultationCategory from "../Components/ConsultationUi/ConsultationCategory"
import Banner from "../Components/Helpers/Banner"
import Footer from "../Components/Helpers/Footer"
import Menu from "../Components/Helpers/Menu"
import QuickNav from "../Components/Helpers/QuickNav"
import HeroBg from '../assests/hero-bg.jpg'

function Consultations({ setSelectedCard }) {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });

}, []);

  return (
    <div>
      <Menu setSelectedCard={setSelectedCard} />
      <div className="mt-[70px]">
          <QuickNav setSelectedCard={setSelectedCard} />
      </div>
      <div className="mt-[30px]">
          <Banner
            img={HeroBg}
            text={'Community'}
          />
      </div>

      <ConsultationCategory setSelectedCard={setSelectedCard} />


      <Footer />

    </div>
  )
}

export default Consultations
