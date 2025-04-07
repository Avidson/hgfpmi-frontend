import { useNavigate } from 'react-router-dom'
import BooksImg from '../../assests/roc.jpg'
import Button from './Button'
import Image from '../../assests/church2.jpg'

function QuickResource() {
  const navigate = useNavigate()
  const data = resourceData[0]
  const handleRequestResource = async (id) => {
    try {
      navigate('/consultations')
    } catch (error) {
      
    }
  }
  return (
    <div className='pad1 flex items-center justify-center gap-3 tablet:flex-col'>
      <div className=' flex-1 w-full'>
        <div className='relative w-[85%] tablet:w-full h-[400px] tablet:h-auto rounded-[20px] overflow-hidden'>
          <img 
            src={data?.image}
            alt='' 
            className=' w-full h-full tablet:h-auto object-cover object-center' 
          />
          <div className="absolute z-20  w-full h-full left-0 top-0 "></div>
        </div>
      </div>  

      <div className='flex-1 text-text-black flex flex-col gap-7'>
        <h2 className='text-[32px] tablet:text-[28px] font-extralight'>{data.title}</h2>
        <p className='text-[18px] tablet:text-[16px] phone:text-[15px] font-extralight'>
          {data.description}
        </p>
        <div className='w-[50%] phone:w-full small-pc:w-full'>
          <Button text={'Request Now'} onClick={handleRequestResource} style={'uppercase w-fit p-2 rounded-[0px] bg-main-color text-white font-semibold px-8 py-4 rounded-full flex items-center gap-3 hover:bg-main-color-dark transition-all shadow-lg hover:shadow-xl group'}/>
        </div>
      </div>
    </div>
  )
}

export default QuickResource

export const resourceData = [
  {
    id: '1',
    image: Image,
    title: 'Empty Out the Negative',
    description: 'God wants to bless you!, It is time to let go of the old. empty out the negative, and make room for all that He is going to do in your life. Our ministry will inspire you to create space so God can fill your with good things!'
  }
]
