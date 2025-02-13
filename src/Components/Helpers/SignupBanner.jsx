import { useState } from 'react'
import Button from './Button'
import { newsletterSubscription } from '../../Helpers/apis'
import toast from 'react-hot-toast'

function SignupBanner() {
  const [ formData, setFormData ] = useState({})
  const [ errorText, setErrorText ] = useState()
  const [ loading, setLoading ] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }
  const handleSubscribe = async (e) => {
    e.preventDefault()
    if(loading){
      return
    }
    if(!formData.firstName){
      setErrorText('Enter your First name')
      setTimeout(() => {
        setErrorText()
      }, 2000)
    }
    if(!formData.lastName){
      setErrorText('Enter your Last name')
      setTimeout(() => {
        setErrorText()
      }, 2000)
    }
    if(!formData.email){
      setErrorText('Enter your email address')
      setTimeout(() => {
        setErrorText()
      }, 2000)
    }
    try {
      setLoading(true)
      const res = await newsletterSubscription(formData)
      if(res.data.message){
        toast.success(res?.data.message)
        setFormData({ firstName: '', lastName: '', email: '' })
      }
    } catch (error) {
      toast.error('Unable to subscribe user')
      setErrorText('Unable to subscribe user')
      setTimeout(() => {
        setErrorText()
      }, 2000)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='w-full bg-text-color-3 flex items-center justify-center p-8'>
        <div className="w-full">
            <form className=' w-full small-pc:w-full flex flex-col items-center justify-center gap-5 text-white'>
              <h2 className='text-[28px] tablet:text-[21px] phone:text-[19px] text-center'>Sign up to receive life changing hope and encouragement!</h2>
              <div className='flex items-center justify-center small-pc:flex-col gap-3 small-pc:w-full phone:w-full'>
                <div className="inputGroup small-pc:w-full ">
                  <input onChange={handleChange} type="text" id='firstName' value={formData?.firstName} placeholder='First Name'className='small-pc:w-full text-[17px] p-2 border-none text-text-color-2 outline-none' />
                </div>
                <div className="inputGroup">
                  <input onChange={handleChange} type="text" id='lastName' value={formData?.lastName} placeholder='Last Name' className='text-[17px] p-2 border-none text-text-color-2 outline-none' />
                </div>
                <div className="inputGroup">
                  <input onChange={handleChange} type="email" id='email' value={formData?.email} placeholder='Email Address' className='text-[17px] p-2 border-none text-text-color-2 outline-none' />
                </div>

                {/**ERROR TEXT */}
                  <Button disabled={loading} onClick={handleSubscribe} text={`${loading ? 'Signing...' : 'Sign up'}`} style={'uppercase transition-all duration-200 p-1'} />
              </div>
                <p className='font-bold text-main-color '>
                  { errorText ? (errorText) : ''}
                </p>
              <small className='text-[14px] pad1'>
                *By submitting this form, you consent to receive emails from HGFPMI Ministries. We respect your privacy and will handle your information in accordance with our TOS/Privacy Policy. You can unsubscribe at any time.
              </small>
            </form>
        </div>
    </div>
  )
}

export default SignupBanner
