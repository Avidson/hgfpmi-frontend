import { useState } from "react"
import Login from "../Helpers/Login"
import Register from "../Helpers/Register"

function Authenticate({setSelectedCard}) {
    const [ cardState, setCardState ] = useState('login')


  return (
    <div className="">
        <div className="flex items-center bg-gray-200 rounded-[15px] overflow-hidden">
            <div onClick={() => setCardState('login')} className={`flex items-center flex-col flex-1 p-3 duration-500 border-b-[3px] border-b-transparent text-[21px] cursor-pointer rounded-[15px] ${cardState === 'login' ? 'bg-main-color text-color-1' : 'text-text-color-2'}`}>
                <p>Login</p>
            </div>

            <div onClick={() => setCardState('register')} className={`flex items-center flex-col flex-1 p-3 duration-500 border-b-[3px] border-b-transparent text-[21px] cursor-pointer rounded-[15px] ${cardState === 'register' ? 'bg-main-color text-color-1' : 'text-text-color-2'}`}>
                <p>Create Account</p>
            </div>
        </div>

        <div className="mt-10">
            {
                cardState === 'login' && (
                    <Login setSelectedCard={setSelectedCard} />
                )
            }

            {
                cardState === 'register' && (
                    <Register setCardState={setCardState} />
                )
            }
        </div>
    </div>
  )
}

export default Authenticate