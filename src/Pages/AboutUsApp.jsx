import { useEffect, useState } from "react"
import Banner from "../Components/Helpers/Banner"
import Menu from "../Components/Helpers/Menu"
import QuickNav from "../Components/Helpers/QuickNav"
import Minstry from "../Components/AboutUi/Minstry"
import AboutFada from "../Components/AboutUi/AboutFada"
import Branches from "../Components/AboutUi/Branches"
import AboutHGFPMI from "../Components/AboutUi/AboutHGFPMI"
import HeroBg from '../assests/hero-bg.jpg'

function AboutUsApp({ setSelectedCard }) {
  const [ activeCard, setActiveCard ] = useState('abouthgfmi')

  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });

}, []);

  const toggleCard = (cardValue) => {
    setActiveCard(cardValue)
  }

  return (
    <div className="page">
        

        <div className="">
            <Banner 
              text={'About Us'}
              img={HeroBg}
            />
        </div>

        <div className="w-full pad1 bg-main-color flex items-center justify-center gap-[2px] flex-wrap tablet:text-[14px]">
          <div onClick={() => toggleCard('abouthgfmi')} className={`cursor-pointer flex flex-1 items-center justify-center border-b-[4px] tablet:border-b-[2px] p-1 ${activeCard === 'abouthgfmi' ? 'border-b-color-1' : 'border-b-white'} hover:border-b-color-1 ${activeCard === 'abouthgfmi' ? 'text-color-1' : 'text-white'} hover:text-color-1`}>
              <p className={`text-center uppercase font-semibold text-[24px] phone:text-[14px] `}>About us</p>
          </div>
          <div onClick={() => toggleCard('fada')} className={`cursor-pointer flex flex-1 items-center justify-center border-b-[4px] tablet:border-b-[2px] p-1 ${activeCard === 'fada' ? 'border-b-color-1' : 'border-b-white'} hover:border-b-color-1 ${activeCard === 'fada' ? 'text-color-1' : 'text-white'} hover:text-color-1`}>
              <p className={`text-center uppercase font-semibold text-[24px] phone:text-[14px] `}>FADA</p>
          </div>
          <div onClick={() => toggleCard('ministry')} className={`cursor-pointer flex flex-1 items-center justify-center border-b-[4px] tablet:border-b-[2px] p-1 ${activeCard === 'ministry' ? 'border-b-color-1' : 'border-b-white'} hover:border-b-color-1 ${activeCard === 'ministry' ? 'text-color-1' : 'text-white'} hover:text-color-1`}>
              <p className={`text-center uppercase font-semibold text-[24px] phone:text-[14px] `}>Leaders</p>
          </div>
          <div onClick={() => toggleCard('branches')} className={`cursor-pointer flex flex-1 items-center justify-center border-b-[4px] tablet:border-b-[2px] p-1 ${activeCard === 'branches' ? 'border-b-color-1' : 'border-b-white'} hover:border-b-color-1 ${activeCard === 'branches' ? 'text-color-1' : 'text-white'} hover:text-color-1`}>
              <p className={`text-center uppercase font-semibold text-[24px] phone:text-[14px] `}>Branches</p>
          </div>
        </div> 

        <div>
          {
            activeCard === 'abouthgfmi' && (
              <AboutHGFPMI hideFooter={true} />
            )
          }
          {
            activeCard === 'fada' && (
              <AboutFada hideNavbar={true} hideFooter={true} />
            )
          }
          {
            activeCard === 'ministry' && (
              <Minstry hideNavbar={true} hideFooter={true} />
            )
          }
          {
            activeCard === 'branches' && (
              <Branches hideFooter={true} />
            )
          }
        </div>
    </div>
  )
}

export default AboutUsApp