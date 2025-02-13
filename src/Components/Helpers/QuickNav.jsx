import { IoPersonCircleOutline } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

function QuickNav({setSelectedCard}) {
  const cart = useSelector(state => state.cart)
  const [ showSearch, setShowSearch ] = useState(false)

  const toggleSearch = () => {
    setShowSearch((prev) => !prev)
  }
  return (
    <div className="z-[990] flex items-center h-[20px] justify-between py-[18px] pad1 bg-main-color-dark fixed top-[70px] left-0 w-full">
      {/**
       * 
      <marquee className={`text-white font-semibold`}>
        Blog Headlines....
        </marquee>
       */}

        {/**SEARCH BAR */}
        {
          showSearch && (
          <div className="ml-auto w-full flex items-center gap-2">
            <input type="text" className="w-[95%] rounded-[5px] outline-none border-none px-2 py-[2px]" />
            <div onClick={toggleSearch} className="cursor-pointer">
              <IoClose className="text-color-1 text-[26px] phone:text-[22px]" />
            </div>
          </div>
          )
        }

        <div className='flex items-center ml-auto gap-10 phone:gap-3'>
          {
            !showSearch && (
              <div onClick={toggleSearch} className="cursor-pointer">
                <FaSearch className="text-color-1 text-[26px] phone:text-[22px]" />
              </div>
            )
          }

            <Link onClick={() => setSelectedCard('shoppingCart')} className="relative text cursor-pointer  text-color-1 hover:text-white duration-200">
                <MdOutlineShoppingCart className="text-[28px] phone:text-[24px]" />
                {
                  cart.products?.length >= 1 && (
                    <span className="absolute top-[-1px] right-[-5px] bg-color-1 rounded-full h-[20px] w-[20px] flex items-center justify-center p-[1px] text-main-color">{cart.products?.length > 10 ? '9+' : `${cart.products?.length}` }</span>
                  )
                }
            </Link>

            <Link onClick={() => setSelectedCard('authenticate')} className="text cursor-pointer  text-color-1 hover:text-white duration-200">
                <IoPersonCircleOutline className="text-[28px] phone:text-[24px]" />
            </Link>
        </div>
    </div>
  )
}

export default QuickNav