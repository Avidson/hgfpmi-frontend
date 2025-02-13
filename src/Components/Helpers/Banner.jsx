import React from 'react'

function Banner({img, video, alt, text, style}) {
  return (
    <div className='w-full h-[50vh] relative'>
        {
          img && (
            <img alt={alt} src={img} className='w-full h-full object-cover object-top' />
          )
        }

        {
          video && (            
          <video src={video} autoPlay muted 
            className={`w-full h-full object-cover object-center ${style}`}>

          </video>
          )
        }
        <div className='absolute pad1 w-full h-full z-20 bg-transparent-bg left-0 top-0 flex flex-col justify-center'>
            { text && (
                <h3 className='text-center text-text-color-3 text-[40px] tablet:text-[28px] font-semibold'>{text}</h3>
              )
            }
        </div>

    </div>
  )
}

export default Banner