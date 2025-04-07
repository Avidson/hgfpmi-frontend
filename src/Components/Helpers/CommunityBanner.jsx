import React from 'react'
import Button from './Button'
import { Link, useNavigate } from 'react-router-dom'

function CommunityBanner({ setSelectedCard}) {
    const navigate = useNavigate()

    const handleNavigation = () => {
        navigate('/community')
    }

  return (
    <div>
    <div className="pad1">
      <div className="bg-main-color pad1 py-8 gap-8 text-white flex flex-col items-center justify-center">
            <h1 className='text-[32px] tablet:text-[28px] phone:text-[20px]'>Community</h1>

            <h3 className='text-[26px] tablet:text-[18px]'>Be a blessing to many!</h3>

            <p className='text-center'>
                One of the greatest gifts one can give is sharing our faith with others while expressing gratitude to God. We would love to hear what incredible things God has done for you and the many ways He has changed your life! Your story will be a blessing for many who need inspiration and encouragement.
            </p>

            <div>
                <Link onClick={() => setSelectedCard('authenticate')} className={`w-full p-4 rounded-[0px] font-font-2 text-[21px] phone:text-[17px] bg-color-1 cursor-pointer duration-500 text-main-color font-semibold flex items-center justify-center text-center `}>
                    Join Our Online Community
                </Link>
            </div>
      </div>

    </div>
    </div>
  )
}

export default CommunityBanner
