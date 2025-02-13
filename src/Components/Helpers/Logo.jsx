import { Link } from "react-router-dom"
import LogoImg from '../../assests/HGFPMI-LOGO.png'

function Logo() {
  return (
    <Link to='/' className="flex flex-col h-full gap-[2px]">
      <div className="link text-white text-[28px] h-full flex items-center gap-2">
        <img src={LogoImg} alt="logo" className="w-[35px] rounded-full" />
        <hr className="w-[2px] h-full bg-white border-none" />
        <div className="flex flex-col font-font-2">
          <h3 className="font-semibold text-[20px]">HGFPMI</h3>
          {
            /**
             <p className="font-light text-[15px] mt-[-12px]">Ministries</p>
             * 
             */
          }
          <p className="text-white mt-[-4px] text-[10px] medium-pc:text-[8px] small-pc:text-[6px]">Holy Ghost Fraternity <br /> Prayer Movement International</p>
        </div>
      </div>








      {/**
       * 
       *       <div className="link text-white text-[28px] h-full flex items-center gap-2">
        <img src={LogoImg} alt="logo" className="w-[35px] rounded-full" />
        <hr className="w-[2px] h-full bg-white border-none" />
        <div className="flex flex-col font-font-2">
          <h3 className="font-semibold text-[21px]">HGFPMI</h3>
          <p className="font-light text-[15px] mt-[-12px]">Ministries</p>
        </div>
      </div>

      <div className="h-full">
        <p className="text-white text-[10px]">Holy Ghost Adoration Prayer Movement International</p>
      </div>
       */}
    </Link>
  )
}

export default Logo