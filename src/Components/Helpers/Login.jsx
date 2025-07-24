import { useState } from "react";
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import Button from "./Button";
import { login } from "../../Helpers/apis";
import toast from "react-hot-toast";

function Login({setSelectedCard}) {
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

    const handleLogin = async () => {
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
            const res = await login(formData)
            console.log('object', res)
            if(res.status === 200 && res.data){
                toast.success('Login Successful')
                localStorage.setItem('HGFPMIACCESS', res.data.access)
                localStorage.setItem('HGFPMIREFRESH', res.data.refresh)
                setSelectedCard(null)
            }else {
                toast.error(res?.detail || 'Unable to login user')
            }
        } catch (error) {
            toast.error('Unable to login user')
            setError('Unable to login user')
            setTimeout(() => { setError() }, 2500)
        } finally {
            setLoading(false)
        }

    }


  return (
    <div className="flex flex-col gap-2" >
         <div className="inputGroup">
            <label className="label font-semibold" >Username:</label>
            <input type="text" id="username" onChange={handleChange} placeholder="Enter username" className="input" />
        </div>

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

        <div onClick={() => setSelectedCard('forgotPassword')} className="text-main-color cursor-pointer text-[19px] phone:text-[16px]">
            Forgot Password?
        </div>

        <p className="text-[16px] font-semibold text-main-color text-center">{error}</p>
        
        <div className="" onClick={handleLogin}>
            <Button disabled={loading} onClick={handleLogin} text={`${loading ? 'Please wait...' : 'Login'}`}  />
        </div>
    </div>
  )
}

export default Login