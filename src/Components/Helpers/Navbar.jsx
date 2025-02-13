import { Link } from "react-router-dom"
import Logo from "./Logo"
import { navlinks } from "../../data/navLinks"
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoCloseCircleOutline } from "react-icons/io5";
import { useState } from "react";

function Navbar({setSelectedCard}) {
  const [ isOpen, setIsOpen ] = useState(false)

  const toggleNav = () => {
    setIsOpen((prev) => !prev)
  } 

  const handleDonation = () => {
    setSelectedCard('donations')
  }

  return (
    <div className="z-[999] flex items-center h-[70px] justify-between pt-4 pb-4 pad1 bg-main-color fixed top-0 left-0 w-full">
        <Logo />

        <div className={`flex ${ isOpen ? 'small-pc:flex' : 'small-pc:hidden'} items-center gap-8 small-pc:absolute small-pc:flex-col small-pc:top-[10px] small-pc:right-4 small-pc:shadow-xl small-pc:rounded-[20px] small-pc:p-4 small-pc:bg-main-color small-pc:z-[9999]`}>
          <div onClick={toggleNav} className="hidden small-pc:flex cursor-pointer" >
            <IoCloseCircleOutline className="text-[28px] text-white" />
          </div>
          {
            navlinks.map((item, idx) => (
              <Link onClick={ item.onclick ? handleDonation : null } key={idx} to={`/${item.link}`} className={`link text-white text-[19px] small-pc:text-[16px] border-b-[2px] border-b-transparent hover:border-b-white duration-200 ${item?.style}`}>{item?.name}</Link>
            ))
          }
        </div>

        <div onClick={toggleNav} className="hidden small-pc:flex cursor-pointer">
            <HiOutlineMenuAlt3 className="text-[32px] phone:text-[28px] text-white" />
        </div>
    </div>
  )
}

export default Navbar