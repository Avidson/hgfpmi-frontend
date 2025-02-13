import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import { IoPersonCircleOutline } from "react-icons/io5";

function Navbar({ title }) {
  return (
    <div className="sticky z-[999] w-full p-2 top-0 left-0 h-[50px] flex items-center justify-between bg-slate-200">
      <div>
        <h1 className="font-semibold text-[21px] uppercase">{title}</h1>
      </div>

      <div className="w-[50%] flex items-center gap-1 border-[1px] bg-white p-1 rounded-[8px]">
        <input type="text" className="input border-none p-0 outline-none" />
        <div className="hover:bg-slate-200 duration-300 p-1 cursor-pointer">
          <FaSearch className="text-[20px]" />
        </div>
      </div>

      {/* Parent div with group class for hover functionality */}
      <div className="relative group">
        <p className="font-semibold text-[20px] cursor-pointer">Hello Peter</p>

        {/* Profile menu, hidden by default and shown on hover */}
        <div className="absolute hidden group-hover:flex flex-col gap-3 right-3 w-[150px] bg-white p-4 z-[999] shadow-md rounded-[12px]">
          <Link to={'/admin/profile'} className="flex text-text-color-3 text-[18px] items-center gap-1 hover:text-primary">
            <IoPersonCircleOutline />
            My Profile
          </Link>
          
          <p className="flex text-text-color-3 text-[18px] items-center gap-1 text-error cursor-pointer hover:text-red-600">
            <FiLogOut />
            Logout
          </p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
