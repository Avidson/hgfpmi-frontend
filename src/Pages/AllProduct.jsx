
import Navbar from '../Components/Helpers/Navbar'
import QuickNav from '../Components/Helpers/QuickNav'
import Banner from '../Components/Helpers/Banner'
import Footer from '../Components/Helpers/Footer'
import Menu from '../Components/Helpers/Menu'
import { useEffect } from 'react'
import HeroBg from '../assests/hero-bg.jpg'
import { useFetchProducts } from '../Helpers/fetch.hooks'
import Products from '../Components/Helpers/Products'
import Spinner from '../Components/Helpers/Spinner'

function AllProduct({ setSelectedCard }) {
    const { data, isFetching } = useFetchProducts()
    const allProducts = data || []

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
              text={'All Product'}
            />
        </div>
        <div className="mt-[2rem]"></div>

        {
            isFetching ? (
                <div className="bg-none w-full flex items-center justify-center">
                    <Spinner />
                </div>
            ) : (
                <Products data={allProducts} pagination={true} noPerPage={10} />
            )
        }
        
        <div className="mt-[2rem]"></div>
        <div className="mt-auto">
            <Footer />
        </div>
    </div>
  )
}

export default AllProduct