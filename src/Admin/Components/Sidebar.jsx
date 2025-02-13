import { FiLogOut } from 'react-icons/fi'
import LogoImg from '../../assests/HGFPMI-LOGO.png'
import { menuLinks } from '../Data/menuLinks'
import { Link, useLocation } from 'react-router-dom'

function Sidebar() {
    const location = useLocation();
    const isActive = (path) => {
      return location.pathname === path;
    };
    
    const menu = menuLinks

  return (
    <div className='w-full gap-[2rem] h-full overflow-hidden flex flex-col items-center justify-center p-2' >
      <div className="w-full flex flex-col gap-1 items-center justify-center">
        <img alt='Logo' src={LogoImg} className='w-[50px]' />
        <div className="w-full p-1 bg-color-1 rounded-[12px] flex items-center justify-center">
            <p className="text-center text-[24px] text-white font-semibold">HGFPMI</p>
        </div>
      </div>

      <div className="w-full h-full overflow-y-auto flex flex-col gap-[2px] scrollbar-thin">
        {
            menu.map((item, idx) => (
                <Link 
                    key={idx} 
                    to={`${item?.link}`} 
                    className={`w-full p-[10px] hover:bg-main-color-dark hover:text-white rounded-[10px] ${isActive(`${item.link}`) ? 'text-white bg-main-color-dark' : '' }`}
                >
                    {item?.name}
                </Link>
            ))
        }
      </div>

      <div className="mt-auto flex items-center justify-center h-[45px] w-full">
        <p className="flex text-white text-center text-[18px] items-center gap-1 text-error cursor-pointer hover:text-red-600">
            <FiLogOut />
            Logout
        </p>
      </div>

    </div>
  )
}

export default Sidebar
