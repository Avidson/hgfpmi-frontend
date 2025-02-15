import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import LogoImg from '../assests/HGFPMI-LOGO.png'
import { FaHotel } from "react-icons/fa6";
import toast from "react-hot-toast";
import { conventionRequest } from "../Helpers/apis";

function HolyGhostPrayerMovement({ setSelectedCard }) {
    const navigate = useNavigate()
    const [ formData, setFormData ] = useState({})
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value })
    }

    const [ loading, setLoading ] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        if(!formData?.first_name){
            toast.error('Enter First Name')
            return
        }
        if(!formData?.last_name){
            toast.error('Enter Last Name')
            return
        }
        if(!formData?.telephone){
            toast.error('Enter Telephone')
            return
        }
        if(!formData?.email){
            toast.error('Enter Email')
            return
        }
        if(!formData?.gender){
            toast.error('Enter Gender')
            return
        }
        if(!formData?.numbers_of_people_attending_with){
            toast.error('Enter number of people coming')
            return
        }     
        if(!formData?.convention_location){
            toast.error('Select you concention location')
        }   
        try {
            setLoading(true)
            const res = await conventionRequest(formData)
            navigate('/Holy-Ghost-prayer-movement-success')
        } catch (error) {
            toast.error('Unable to submit convention form')
            console.log('UNABLE TO SUBMIT CONVENTION FORM', error)
        } finally {
            setLoading(false)
        }
    }
    return (
      <div className="bg-white flex flex-col min-h-[100vh]">
        <div className="w-full p-3 mb-4">
            <Link to='/'>
                <span className="text-main-color-dark font-semibold">Return home</span>
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
  
          <h3 className="text-main-color border-b-[2px] border-b-main-color mt-8 font-semibold text-center">Please fill the form below</h3>
          <form onSubmit={handleSubmit} className="w-[650px] phone:w-full border flex flex-col gap-5 p-5 mb-9">
              <div className="flex items-center gap-2 justify-between w-full tablet:flex-col phone:w-full ">
                  <div className="formCard">
                      <label className="uppercase label" htmlFor="">First Name<span style={{ color: 'red' }}>*</span></label>
                      <input onChange={handleChange} type="text" name="first_name" id="first_name" className="input p-2" />
                  </div>
                  <div className="formCard">
                      <label className="uppercase label" htmlFor="">Last Name<span style={{ color: 'red' }}>*</span></label>
                      <input onChange={handleChange} type="text" name="last_name" id="last_name" className="input p-2" />
                  </div>
              </div>
  
              <div className="flex items-center gap-2 justify-between tablet:flex-col">
                  <div className="formCard">
                      <label className="uppercase label" htmlFor="">Telephone<span style={{ color: 'red' }}>*</span></label>
                      <input onChange={handleChange} type="number" name="telephone" id="telephone" className="input p-2" />
                  </div>
                  <div className="formCard">
                      <label className="uppercase label" htmlFor="">Email</label>
                      <input onChange={handleChange} type="email" name="email" id="email" className="input p-2" />
                  </div>
              </div>
              <div className="flex items-center gap-2 justify-between tablet:flex-col">
                  <div className="formCard">
                      <label className="uppercase label" htmlFor="">City<span style={{ color: 'red' }}>*</span></label>
                      <input onChange={handleChange} type="text" name="city" id="telephone" className="input p-2" />
                  </div>
                  <div className="formCard">
                      <label className="uppercase label" htmlFor="">State</label>
                      <input onChange={handleChange} type="text" name="state" id="email" className="input p-2" />
                  </div>
                  <div className="formCard">
                      <label className="uppercase label" htmlFor="">Country</label>
                      <input onChange={handleChange} type="text" name="country" id="email" className="input p-2" />
                  </div>
              </div>
  
              <div className="flex items-center gap-2 justify-between tablet:flex-col">
                  <div className="formCard">
                      <label className="uppercase label" htmlFor="">Gender</label>
                      <select onChange={handleChange} name="gender" id="gender" className="input p-2 w-full">
                          <option value="">-- SELECT GENDER --</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                      </select>
                  </div>
                  <div className="formCard">
                      <label className="uppercase label" htmlFor="">Convention Location
                      <span style={{ color: 'red' }}>*</span>
                      </label>
                      <select onChange={handleChange} name="convention_location" id="convention_location" className="input p-2 w-full">
                          <option value="">-- SELECT LOCATION --</option>
                          <option value="Houston">Houston</option>
                          <option value="New York">New York</option>
                          <option value="Both">Both - New York & Houston</option>
                      </select>
                  </div>
              </div>

              <div className="flex items-center gap-2 justify-between tablet:flex-col">
                  <div className="formCard">
                      <label className="uppercase label" htmlFor="">Number of people attending with</label>
                      <input onChange={handleChange} type="number" name="numbers_of_people_attending_with" id="numbers_of_people_attending_with" className="input p-2" />
                  </div>
                  <div className="formCard">
                      <label className="uppercase label" htmlFor="">Mailing address</label>
                      <input onChange={handleChange} type="text" name="mailing_address" id="mailing_address" className="input p-2" />
                  </div>
              </div>        
  
              <button onSubmit={handleSubmit} className="flex items-center justify-center w-full bg-main-color hover:bg-main-color-dark text-white py-[10px] px-[15px] outline-none border-none rounded-2xl">
                  { !loading ? 'Register' : 'Submitting...' }
              </button>

              <a
                target="_blank"
                href="https://www.marriott.com/event-reservations/reservation-link.mi?id=1738342446062&key=GRP&guestreslink2=true&app=resvlink" 
                className="flex items-center justify-center w-full bg-color-1 text-main-color-dark font-semibold py-[10px] px-[15px] outline-none border-none rounded-2xl gap-[4px]"
            >
                  <FaHotel />
                  Get Hotel Reservation
              </a>
  
          </form>
  
        </div>
      </div>
    )
  }
  
  export default HolyGhostPrayerMovement
  