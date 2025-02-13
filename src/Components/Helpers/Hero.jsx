import { Link } from 'react-router-dom'
import { FaPlay } from "react-icons/fa";
import VideoSrc from '../../assests/Vid/heroVid.mp4'
import { FaMoneyBill } from "react-icons/fa";

function Hero({ setSelectedCard }) {
    const handleGiving = () => {
        setSelectedCard('onlineGiving')
    }

    const videoUrl = "https://youtu.be/-ndFtmrpN5U?rel=0";

    const embedUrl = videoUrl
    .split("?")[0]
    .replace("youtu.be/", "www.youtube.com/embed/") + "?autoplay=1&mute=1";

  return (
    <div className='w-full h-[90vh] relative'>
        <div className='absolute pad1 w-full h-full z-20 bg-transparent-bg left-0 top-0 flex flex-col justify-center'>
            <h1 className='text-[48px] small-pc:text-[36px] tablet:text-[32px] phone:text-[32px] text-white '>    
                Live Prayer Session. <br /> Connect With Fada Everyday.
            </h1>

            <div className='flex items-center gap-3 mt-8 phone:flex-col smaller-phone:flex-col'>

                <Link 
                    to='/sermon' 
                    className={`flex items-center justify-center gap-3 py-3 phone:w-full tablet:w-[75%] phone:py-2 px-16 small-pc:px-14 tablet:px-14 link text-[18px] tablet:text-[16px] duration-300 border-[2px] border-main-color bg-main-color text-white hover:text-white hover:bg-main-color-dark`}
                >
                    <FaPlay className='' />
                    Click To Watch Now
                </Link>
                {/**
                 * 
                <Link 
                    onClick={handleGiving}
                    className={`flex items-center justify-center gap-3 py-3 phone:w-full tablet:w-[75%] phone:py-2 px-16 small-pc:px-14 tablet:px-14 link text-[18px] tablet:text-[16px] duration-300 border-[2px] border-main-color bg-main-color text-white hover:text-white hover:bg-main-color-dark`}
                >
                    <FaMoneyBill className='text-[26px]' />
                    Online Giving
                </Link>
                 */}

                <Link 
                    to='/Holy-Ghost-prayer-movement'
                    className={`flex items-center justify-center gap-3 py-3 phone:w-full tablet:w-[75%] phone:py-2 px-16 small-pc:px-14 tablet:px-14 link text-[18px] tablet:text-[16px] duration-300 border-[2px] border-main-color bg-main-color text-white hover:text-white hover:bg-main-color-dark`}
                >
                    Register For 2025 Convention
                </Link>
            </div>
        </div>
        <p></p>
        
        {/**
         * 
         <video src={VideoSrc} autoPlay muted 
             className='z-10 w-full h-full object-cover object-top'>
         </video>

         */}

    <iframe
        src={embedUrl}
        className="absolute top-0 left-0 w-full h-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
    />


    </div>
  )
}

export default Hero