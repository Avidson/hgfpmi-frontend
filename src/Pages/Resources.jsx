import Menu from '../Components/Helpers/Menu'
import QuickNav from '../Components/Helpers/QuickNav'
import Banner from '../Components/Helpers/Banner'
import ResourcesComponents from '../Components/ResourcesComponents'
import Footer from '../Components/Helpers/Footer'
import { useEffect } from 'react'
import HeroBg from '../assests/hero-bg.jpg'

function Resources({setSelectedCard}) {
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
              text={'Resources'}
            />
        </div>

        <ResourcesComponents />

        <Footer />
      
    </div>
  )
}

export default Resources
