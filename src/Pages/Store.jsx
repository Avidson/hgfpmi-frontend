import Navbar from '../Components/Helpers/Navbar'
import QuickNav from '../Components/Helpers/QuickNav'
import Banner from '../Components/Helpers/Banner'
import Footer from '../Components/Helpers/Footer'
import StoreCategory from '../Components/StoreCategory'
import Menu from '../Components/Helpers/Menu'
import { useEffect } from 'react'
import HeroBg from '../assests/hero-bg.jpg'

function Store({ setSelectedCard }) {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });

}, []);

  return (
    <div className='page'>
        <Menu setSelectedCard={setSelectedCard} />
        <div className="mt-[70px]">
            <QuickNav setSelectedCard={setSelectedCard} />
        </div>

        <div className="mt-[30px]">
            <Banner 
              img={HeroBg} 
              text={'Store'}
            />
        </div>
        <StoreCategory />



        <div className="mt-auto">
            <Footer />
        </div>
    </div>
  )
}

export default Store