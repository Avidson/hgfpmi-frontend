import { useState } from 'react';
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoCloseCircleOutline } from "react-icons/io5";
import Logo from './Logo';
import { Link } from 'react-router-dom';
import { menuLinks } from '../../data/navLinks';

const Menu = ({setSelectedCard}) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = menuLinks

  const handleClick = (value) => {
    setSelectedCard(`${value}`)
  }

  return (
    <nav className="z-[999] h-[70px] pt-4 pb-4 pad1 bg-main-color fixed top-0 left-0 w-full flex items-center justify-between">
          {/* Logo */}
          <Logo />

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <IoCloseCircleOutline className="text-[32px] h-6 w-6" />
            ) : (
              <HiOutlineMenuAlt3 className="h-6 w-6" />
            )}
          </button>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center justify-center space-x-8">
            {menuItems.map((item, index) => (
              <li key={index} className="relative group">
                <Link
                  to={`${item.link}`}
                  onClick={ () => item.onclick ? handleClick(item?.clickValue) : null }
                  className={`${item?.style ? item?.style : `text-slate-100 hover:text-color-1 font-medium  text-[14px] medium-pc:text-[8px] small-pc:text-[8px]  flex items-center uppercase` } uppercase`}
                >
                  {item.name}
                </Link>
                {/* Desktop Dropdown */}
              </li>
            ))}
          </ul>


        {/* Mobile Menu */}
        <div
          className={`lg:hidden ${
            isOpen ? 'block' : 'hidden'
          } absolute top-[70px] left-0 w-full bg-main-color pb-6 pad1`}
        >
          <ul className="px-4 pt-2 space-y-4">
            {menuItems.map((item, index) => (
              <li key={index} className="relative">
                <div
                  className={``}
                >
                  <Link
                    to={`${item.link}`}
                    onClick={ () => item.onclick ? handleClick(item?.clickValue) : null }
                    className={`${item?.style ? item?.style : 'mb-3 text-slate-100 hover:text-color-1 font-medium text-[14px] ' } uppercase`}
                  >
                    {item.name}
                  </Link>
                </div>
                {/* Mobile Dropdown */}
              </li>
            ))}
          </ul>
        </div>

    </nav>
  );
};

export default Menu;