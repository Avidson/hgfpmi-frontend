import Button from "./Button"

function ForgotPassword({setSelectedCard}) {

    const handleForgetPassword = () => {

    }

  return (
    <div className="w-[550px] phone:w-[94%] flex flex-col gap-8" >
         <div className="inputGroup">
            <label className="label font-semibold" >Email:</label>
            <input type="email" placeholder="Enter Email Address" className="input" />
        </div>

        <div onClick={() => setSelectedCard('authenticate')} className="text-main-color cursor-pointer text-[19px] phone:text-[16px]">
            Login
        </div>

        <Button onClick={handleForgetPassword} text={'Submit'} />
    </div>
  )
}

export default ForgotPassword