import React, { useState } from 'react'
import Testimonials from './ResourcesUi/Testimonials'
import Gallery from './ResourcesUi/Gallery'

function ResourcesComponents() {

    const subMenu = [
        {
            link: 'Gallery',
            slug: 'gallery'
        },
        {
            link: 'Testimonies',
            slug: 'testimonies'
        }
    ]
    const [ catState, setCatState ] = useState(subMenu[0].slug)

    const changeCategory = (item) => {
        setCatState(item)
    }

  return (
    <div className='w-full'>
        <div className="w-full pad1 bg-main-color flex items-center justify-center gap-[2px] flex-wrap tablet:text-[14px]">
            {
                subMenu.map((item, idx) => (
                    <div key={idx} onClick={() => changeCategory(item.slug)} className={`cursor-pointer flex flex-1 items-center justify-center border-b-[4px] ${item?.slug === catState ? 'border-b-color-1' : 'border-b-white'} hover:border-b-color-1 ${item.slug === catState ? 'text-color-1' : 'text-white'} hover:text-color-1`}>
                        <p className={`text-center font-semibold text-[24px] phone:text-[17px] `}>{item.link}</p>
                    </div>
                ))
            }
        </div>

        <div className='w-full pad1 mt-12 mb-5'>
            {
                catState === 'gallery' && (
                    <Gallery />
                )
            }
            {
                catState === 'testimonies' && (
                    <Testimonials />
                )
            }
        </div>
      
    </div>
  )
}

export default ResourcesComponents
