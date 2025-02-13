import { useLocation } from "react-router-dom"
import Menu from "../Components/Helpers/Menu"
import QuickNav from "../Components/Helpers/QuickNav"
import Banner from "../Components/Helpers/Banner"
import Footer from "../Components/Helpers/Footer"

function SermonTeachings({setSelectedCard}) {
  const loc = useLocation()
  const pathName = loc.pathname.split('/')[3]

  return (
    <div>
      <Menu setSelectedCard={setSelectedCard} />
      <div className="mt-[70px]">
          <QuickNav setSelectedCard={setSelectedCard} />
      </div>
      <div className="mt-[30px]">
          <Banner
            video={'https://videos.pexels.com/video-files/3772777/3772777-sd_640_360_24fps.mp4'} 
            text={'Teachings'}
          />
      </div>

      <div className="pad1 my-4">
      SermonTeachings {pathName}

      </div>

      <Footer />
    </div>
  )
}

export default SermonTeachings
