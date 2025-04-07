import { ImFilePlay } from "react-icons/im";
import { PiChurchLight } from "react-icons/pi";
import { RiShoppingBag4Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { MdArrowForwardIos } from "react-icons/md";

function QuickBanner() {
  return (
    <div className="p-20 gap-8 flex tablet:flex-col flex-wrap items-center justify-between bg-white">
      <div className="flex-1 flex gap-2 flex-col items-center justify-center">
        <ImFilePlay className="text-[55px]" />
        <h1 className="text-center text-[32px] tablet:text-[26px] phone:text-[24px]">Find Past Messages</h1>
        <Link to='/sermon' className=" flex items-center gap-2 text-main-color hover:text-main-color-dark duration-300 text-[21px]">
          View Messages
          <MdArrowForwardIos className="" />
        </Link>
      </div>
      
      <div className="flex-1 flex gap-2 flex-col items-center justify-center">
        <PiChurchLight className="text-[65px]" />
        <h1 className="text-center text-[32px] tablet:text-[26px] phone:text-[24px]">Find a Church</h1>
        <Link to='/about-us' className=" flex items-center gap-2 text-main-color hover:text-main-color-dark duration-300 text-[21px]">
          Find A Church
          <MdArrowForwardIos className="" />
        </Link>
      </div>
      
      <div className="flex-1 flex gap-2 flex-col items-center justify-center">
        <RiShoppingBag4Line className="text-[60px]" />
        <h1 className="text-center text-[32px] tablet:text-[26px] phone:text-[24px]">Check Out The Store</h1>
        <Link to='/shop' className=" flex items-center gap-2 text-main-color hover:text-main-color-dark duration-300 text-[21px]">
          View Store
          <MdArrowForwardIos className="" />
        </Link>
      </div>
      
    </div>
  )
}

export default QuickBanner
