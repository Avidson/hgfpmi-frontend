import { useState } from "react";
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import Button from "./Button";
import toast from "react-hot-toast";
import { register } from "../../Helpers/apis";

function Register({ setCardState }) {
    const [ formData, setFormData ] = useState({})
    const [ loading, setLoading ] = useState(false)
    const [ error, setError ] = useState()

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value })
    }
    const [ showPassword, setShowPassword ] = useState(false)

    const togglePassword = () => {
        setShowPassword((prev) => !prev)
    }

    const handleRegister = async () => {
        if(loading){
            return
        }
        if(!formData?.username){
            setError('Enter Username')
            setTimeout(() => { setError() }, 2500)
            return
        }
        if(!formData?.password){
            setError('Enter password')
            setTimeout(() => { setError() }, 2500)
            return
        }

        try {
            setLoading(true)
            const res = await register(formData)
            console.log('object', res)
            if(res.data.message){
                toast.success(res.data.message)
                setCardState('login')
            }
        } catch (error) {
            toast.error('Unable to register user')
            setError('Unable to register user')
            setTimeout(() => { setError() }, 2500)
        } finally {
            setLoading(false)
        }

    }

  return (
    <div className="flex flex-col gap-2">
        <div className="inputGroup">
            <label className="label font-semibold" >Name:</label>
            <input id="username" onChange={handleChange} type="text" placeholder="Enter Name" className="input" />
        </div>

        {/**
         * 
        <div className="inputGroup">
            <label className="label font-semibold" >Email:</label>
            <input id="email" onChange={handleChange} type="email" placeholder="Enter Email Address" className="input" />
        </div>
         */}

        <div className="inputGroup">
            <label className="label font-semibold" >Password</label>
            <div className="relative flex w-full">
                <input id="password" onChange={handleChange} type={showPassword ? 'text' : 'password'} placeholder="Enter Password" className="input" />
                <div onClick={togglePassword} className="absolute cursor-pointer right-3 top-1/2 transform -translate-y-1/2">
                    {
                        showPassword ? (
                            <IoIosEye className="text-[28px] phone:text-[28px]" />
                        ) : (
                            <IoIosEyeOff className="text-[28px] phone:text-[28px]" />
                        )
                    }
                </div>
            </div>
        </div>

        <p className="text-[16px] font-semibold text-main-color text-center">{error}</p>
        
        <Button disabled={loading} onClick={handleRegister} text={`${loading ? 'Creating' : 'Create Account'}`} style={'mt-2'} />
    </div>
  )
}

export default Register
