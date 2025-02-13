import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Button from '../Helpers/Button'
import { donationCourse } from '../../data/donationCourse'

function Donations({setSelectedCard}) {
    const { currentUser } = useSelector(state => state.user)
    const user = currentUser?.data
    const [ formData, setFormData ] = useState({})

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value })
    }

    const handleChecked = (e) => {
        const newCheckedValue = e.target.checked
        setFormData({ ...formData, checked: newCheckedValue })
    }

    const [ state, setState ] = useState( !user ? 'getUser' : 'donate' )
    const [ error, setError ] = useState()
    useEffect(() => {console.log('first', formData)}, [formData])

    const handleGuestDonations = () => {
        if(!formData?.email){
            setError('Email Address is Required')
            setTimeout(() => {
                setError()
            }, 2000)
            return
        }
        /**
         if(!formData?.checked){
             setError('Please agree with terms and conditions')
             setTimeout(() => {
                 setError()
             }, 2000)
             return
         }
         * 
         */
        setState('donate')
    }

    const [purposeOfDonation, setPurposeOfDonation] = useState([]);

    const donationPurposes = donationCourse
    useEffect(() => {
      if (donationPurposes) {
        setPurposeOfDonation([...donationPurposes, { name: 'Others' }]);
      }
    }, [donationPurposes]);

    const handleDonation = () => {
        if(!formData?.email){
            setError('Email Address is Required')
            setTimeout(() => {
                setError()
            }, 2000)
            return
        }
        /**
         * 
        if(!formData?.checked){
            setError('Please agree with terms and conditions')
            setTimeout(() => {
                setError()
            }, 2000)
            return
        }
         * 
         */
        if(!formData.donationPurpose){
            setError('Please select a purpose for donation')
            setTimeout(() => {
                setError()
            }, 2000)
            return
        }
        if(!formData.amount){
            setError('Enter amount')
            setTimeout(() => {
                setError()
            }, 2000)
            return
        }
    }

  return (
    <div className=''>
        {
            state === 'getUser' && (
                <div>
                    <p className='text-[21px] phone:text-[18px]'>Please Login here to proceed with Donations. <span onClick={() => setSelectedCard('authenticate')} className='focusText'>Login</span> </p>
                    
                    <div className='flex flex-col mt-6'>
                        <p className='focusText border-b-[0px]'>or</p>
                        <div className="inputGroup">
                            <label className="label">Email:</label>
                            <input type="email" id='email' className="input p-3" placeholder='Enter Email Address' onChange={handleChange} />
                        </div>

                        <div className='flex items-center gap-[2px] mt-3'>
                            <p className='text-[15px]'><span className='text-main-color font-semibold'>Note:</span> Your donation to the ministry would be used to propagate HGFPMI causes</p>
                        </div>
                        
                        <p className='errorText text-center mt-6'>{error}</p>
                    
                        <Button onClick={handleGuestDonations} text={'Continue as Guest'} style={'p-1 mt-8'} />
                    </div>
                </div>
            )
        }

        {
            state === 'donate' && (
                <div>
                    <div>
                        <p className='focusText border-b-0'>Donation Purpose</p>
                        <select name="" id="donationPurpose" onChange={handleChange} className='input p-2'>
                            <option value="">Select a purpose for donation</option>
                            {
                                purposeOfDonation.map((item, idx) => (
                                    <option key={idx} value={item.name}>{item.name}</option>
                                ))
                            }
                        </select>
                        {
                            formData.donationPurpose === 'Others' && (
                                <input id='donationPurpose' type="text" onChange={handleChange} className='input mt-3 p-2' placeholder='Enter Donation Purpose' />
                            )
                        }
                    </div>


                    <div className="inputGroup mt-6">
                        <label className="label focusText border-b-0">Donation Amount:</label>
                        <input type="number" id='amount' className="input p-3" placeholder='Enter donation amount' onChange={handleChange} />
                    </div>
                    
                    <p className='errorText text-center mt-6'>{error}</p>

                    <Button onClick={handleDonation} text={'Proceed to Giving'} style={'p-1 mt-8'} />
                </div>
            )
        }
    </div>
  )
}

export default Donations