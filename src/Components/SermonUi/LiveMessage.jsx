import { FaPlay } from "react-icons/fa";
import CountdownTimer from "../Helpers/CountdownTimer";
import { FaFacebookF } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Comments from "./Comments";
import { useFetchMessages } from "../../Helpers/fetch.hooks";
import Spinner from "../Helpers/Spinner";

function LiveMessage({ countDownTime }) {
  const { data, isFetching } = useFetchMessages({live: true})
  const liveData = data|| []
  const liveObject = liveData[0]
  console.log('object', liveObject)
  
  const getEmbedUrl = (url) => {
  if (!url) return "";

  try {
    const yt = new URL(url);

    // 1. Handle direct video links: youtube.com/watch?v=VIDEO_ID
    if (yt.searchParams.get("v")) {
      return `https://www.youtube.com/embed/${yt.searchParams.get("v")}`;
    }

    // 2. Handle share links: youtu.be/VIDEO_ID
    if (yt.hostname === "youtu.be") {
      return `https://www.youtube.com/embed/${yt.pathname.slice(1)}`;
    }

    // 3. Handle permanent live links: youtube.com/.../live
    if (yt.pathname.endsWith("/live")) {
      // channel live embed format
      return `https://www.youtube.com/embed/live_stream?channel=${yt.pathname.split("/")[2]}`;
    }

    // 4. Already an embed link
    if (yt.pathname.startsWith("/embed")) {
      return url;
    }

    // fallback
    return url;
  } catch {
    return url;
  }
};

  return (
    <div className="pad1 mt-8 mb-16 flex flex-col items-center justify-center">
      
      <div className="mt-4 mb-12">
        <CountdownTimer initialHours={countDownTime} text={'Next Program starts in:'} />
      </div>

      {
        isFetching ? (
          <Spinner />
        ) : (
          <iframe 
            src={getEmbedUrl(liveObject?.url_for)}
            className="w-[850px] small-pc:w-[95%] h-[500px] shadow-xl border-[2px] border-main-color rounded-[10px] flex items-center justify-center relative"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          >
            <div className=" flex items-center justify-center p-8 bg-main-color text-white rounded-full ">
              <FaPlay className="text-[32px]" />
            </div>
          
          </iframe>
        )
      }

      <h1 className="text-center mt-8 text-[24px] tablet:text-[18px] text-main-color">{liveObject?.message_title}</h1>

      <div className="flex items-center tablet:flex-col justify-center gap-6 mt-12">
        <Link target="_parent" to={`https://www.facebook.com/fadaebube`} className="py-4 px-8 cursor-pointer text-white flex items-center justify-center gap-2 bg-[#1877F2]">
          <FaFacebookF className="text-[20px]" />
          Watch on Facebook
        </Link>
        <Link target="_blank" to={`https://vm.tiktok.com/ZMkRMheak`} className="py-4 px-8 cursor-pointer text-white flex items-center justify-center gap-2 bg-[#000000]">
          <FaTiktok className="text-[20px]" />
          Watch on TikTok
        </Link>
      </div>

      {
        /**
         * 
      <div className="w-[50%] my-10">
        <Comments />
      </div>
         */
      }

    </div>
  )
}

export default LiveMessage
