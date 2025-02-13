import { useEffect } from "react";
import Menu from "../Helpers/Menu";
import QuickNav from "../Helpers/QuickNav";
import Banner from "../Helpers/Banner";
import VideoSrc from "../../assests/Vid/heroVid.mp4";
import Footer from "../Helpers/Footer";
import { FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import CountdownTimer from "../Helpers/CountdownTimer";
import Comments from "./Comments";

function TiktokLive({ setSelectedCard, countDownTime }) {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div className="page">
      <Menu setSelectedCard={setSelectedCard} />
      <div className="mt-[70px]">
        <QuickNav setSelectedCard={setSelectedCard} />
      </div>

      <div className="mt-[30px]">
        <Banner video={VideoSrc} text={"Tiktok Live"} style={"object-top"} />
      </div>

      <div className="mt-8 mb-8">
        <CountdownTimer initialHours={countDownTime} text={'Next Program starts in:'} />
      </div>

      <div className="pad1 mb-16 flex flex-col items-center justify-center">
        <div className="w-[850px] small-pc:w-[95%] h-[500px] shadow-xl border-[2px] border-main-color rounded-[10px] flex items-center justify-center relative">
          <div className=" flex items-center justify-center p-8 bg-main-color text-white rounded-full ">
            <FaPlay className="text-[32px]" />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center gap-6 mt-4 mb-12">
        <Link to={`/sermon`} className="py-4 px-12 cursor-pointer text-white flex items-center justify-center gap-2 bg-[#000000]">
          <IoArrowBack className="text-[20px]" />
          Back
        </Link>
      </div>
      
      {/**
       * 
      <div className="w-[50%] my-10 m-auto">
        <Comments />
      </div>
       */}

      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
}

export default TiktokLive;
