import { useEffect, useState } from 'react'
import Menu from '../Components/Helpers/Menu'
import QuickNav from '../Components/Helpers/QuickNav'
import Banner from '../Components/Helpers/Banner'
import Footer from '../Components/Helpers/Footer'
import Spinner from '../Components/Helpers/Spinner'
import HeroBg from '../assests/hero-bg.jpg'
import toast from 'react-hot-toast'
import { feedback } from '../Helpers/apis'

function ContactUs({setSelectedCard}) {
  const [ formData, setFormData ] = useState({})
  const [ loading, setLoading ] = useState(false)
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });

  }, []);

  const handleChange = (e) => {
    setFormData({  ...formData, [e.target.id]: e.target.value })
  }

  const handleSubmit = async () => {
    if(loading) return
    if(!formData?.full_name) return toast.error('Enter Full Name')
    if(!formData?.contact_info) return toast.error('Provide contact email')
    if(!formData?.message) return toast.error('Enter message')

    try {
        setLoading(true)

        const res = await feedback(formData)
        if(res.status === 201) {
            res.success(res.data.message || 'Message submitted successful')
            setFormData({})
        } else {
            toast.error('Unable to send message')
        }
    } catch (error) {
        
    } finally {
        setLoading(false)
    }
  }


  return (
    <div>
        <Menu setSelectedCard={setSelectedCard} />
        <div className="mt-[70px]">
            <QuickNav setSelectedCard={setSelectedCard} />
        </div>

        <div className="mt-[30px]">
            <Banner
              img={HeroBg} 
              text={'Contact Us'}
            />
        </div>

        <div className="w-full mt-[2rem] mb-[2rem] pad1 flex flex-col items-center justify-center gap-[2px] flex-wrap tablet:text-[14px]">
            <div className="text-center mb-2">
                <h2 className="text-5xl phone:text-3xl font-bold text-gray-900 mb-4">Contact Us</h2>
                <div className="w-56 h-1 bg-yellow-500 mx-auto rounded-full"></div>
            </div>
            <div className="text-color-1 shadow-xl border-none text-[16px] max-phone:text-[14px] font-semibold">We Love to hear from you</div>

            {/**FORM */}
            <div className="mt-[2rem]">
                <div className="border-[1px] rounded-[10px] p-[10px] border-main-color flex flex-col gap-3 border-[2px] w-[450px] max-phone:w-[90%]">
                    <div className="inputGroup">
                        <label className="label">Full Name</label>
                        <input type="text" id='full_name' defaultValue={formData?.full_name} onChange={handleChange} className="input p-[4px] border-[1px]" />
                    </div>
                    <div className="inputGroup">
                        <label className="label">Email</label>
                        <input type="text" id='contact_info' defaultValue={formData?.contact_info} onChange={handleChange} className="input p-[4px] border-[1px]" />
                    </div>
                    <div className="inputGroup">
                        <label className="label">Reason For Contact, Related To Account Deletion?</label>
                        <textarea onChange={handleChange} id="message" defaultValue={formData?.message} className='input p-[4px] resize-none h-[100px]'></textarea>
                    </div>

                    <div className="mt-[2rem]">
                        <div onClick={handleSubmit} className="w-full text-center bg-main-color text-white p-[12px] cursor-pointer hover:bg-main-color-dark duration-500 transition-ease rounded-[10px]">{ loading ? 'Submitting' : 'Get in Touch'}</div>
                    </div>
                </div>
            </div>
        </div>

        <Footer />
    </div>
  )
}

export default ContactUs