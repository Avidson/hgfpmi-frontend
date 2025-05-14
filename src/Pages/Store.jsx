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

            <div className="bg-main-color pad1 py-8 gap-8 text-white flex flex-col items-center justify-center">
        
                    <h3 className='text-[26px] tablet:text-[18px]'>For Fast Order Placement!</h3>
        
                    <p className='text-center'>
                           Please Contact: 
                    </p>
                    <p className='text-center'>
                           Nwanneka Lynda Chukwurah: +1 (614) 369 9147 
                    </p>
        
              </div>

        <div className="mt-auto">
            <Footer />
        </div>
    </div>
  )
}

export default Store