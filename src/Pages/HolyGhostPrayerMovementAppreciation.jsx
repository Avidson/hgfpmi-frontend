import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import LogoImg from '../assests/HGFPMI-LOGO.png'
import { FaHotel } from "react-icons/fa6";

function HolyGhostPrayerMovementAppreciation({ setSelectedCard }) {
    const navigate = useNavigate()
    const [ formData, setFormData ] = useState({})
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value })
    }

    const returnHome = async () => {
        navigate('/')
    }
    return (
      <div className="bg-white flex flex-col min-h-[100vh]">
        <div className="w-full p-3 mb-4">
            <Link to='/'>
                <span className="text-main-color-dark">Return home</span>
            </Link>
        </div>
  
        <div className="flex flex-col items-center justify-center gap-3">
          <img alt="logo" src={LogoImg} className="w-20" />
          <h2 className="uppercase font-semibold text-center text-main-color tablet:w-[98%]">
              Holy Ghost Fraternity prayer movement international
          </h2>
          <p className="uppercase text-main-color font-light">
              2025 convention (usa)
          </p>
          <p>
              JUNE - JULY
          </p>
  
          <div className="w-[550px] phone:w-full border flex flex-col gap-5 p-5 mb-9">

            <div className="flex items-center justify-center">
                <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="60" cy="60" r="50" stroke="#1c2e64" stroke-width="4" fill="none" stroke-dasharray="314" stroke-dashoffset="314">
                        <animate attributeName="stroke-dashoffset" from="314" to="0" dur="0.8s" fill="freeze"/>
                    </circle>

                    <polyline points="40,60 55,75 80,45" stroke="#1c2e64" stroke-width="5" fill="none" stroke-linecap="round" stroke-linejoin="round"
                        stroke-dasharray="50" stroke-dashoffset="50">
                        <animate attributeName="stroke-dashoffset" from="50" to="0" dur="0.5s" begin="0.6s" fill="freeze"/>
                    </polyline>
                </svg>
            </div>
            <h3 className="text-main-color mt-2 font-semibold text-center mb-8">Form submitted successfuly</h3>
  
              <Link to='/' className="flex items-center justify-center w-full bg-main-color hover:bg-main-color-dark text-white py-[10px] px-[15px] outline-none border-none rounded-2xl">
                  Return Home
              </Link>

              <a
                target="_blank"
                href="https://www.marriott.com/event-reservations/reservation-link.mi?id=1738342446062&key=GRP&guestreslink2=true&app=resvlink" 
                className="flex items-center justify-center w-full bg-color-1 text-main-color-dark font-semibold py-[10px] px-[15px] outline-none border-none rounded-2xl gap-[4px]"
            >
                  <FaHotel />
                  Get Hotel Reservation
              </a>
  
          </div>
  
        </div>
      </div>
    )
  }
  
  export default HolyGhostPrayerMovementAppreciation
  