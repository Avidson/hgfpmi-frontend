import { useState } from 'react'
import PrayerRequest from './PrayerRequest'
import Consultation from './Consultation'
import MassRequest from './MassRequest'

function ConsultationCategory({ setSelectedCard }) {
    const stateCategory = [
        {
            name: 'Prayer Request',
            slug: 'prayerrequest'
        },
        {
            name: 'Consultation',
            slug: 'consultation'
        },
        {
            name: 'Mass Request',
            slug: 'massrequest'
        }
    ]

    const [ catState, setCatState ] = useState(stateCategory[0]?.slug)

    const changeCategory = (item) => {
        setCatState(item)
    }
      

  return (
    <div className="w-full">
        <div className="w-full pad1 bg-main-color flex items-center justify-center gap-[2px] flex-wrap tablet:text-[14px]">
            {
                stateCategory.map((item, idx) => (
                    <div key={idx} onClick={() => changeCategory(item.slug)} className={`cursor-pointer flex flex-1 items-center justify-center border-b-[4px] ${item?.slug === catState ? 'border-b-color-1' : 'border-b-white'} hover:border-b-color-1 ${item.slug === catState ? 'text-color-1' : 'text-white'} hover:text-color-1`}>
                        <p className={`text-center font-semibold text-[24px] phone:text-[16px] uppercase `}>{item.name}</p>
                    </div>
                ))
            }
        </div>

        <div className="w-full mt-12 mb-8">
            {
                catState === 'prayerrequest' && (
                    <PrayerRequest />
                )
            }
            {
                catState === 'consultation' && (
                    <Consultation />
                )
            }
            {
                catState === 'massrequest' && (
                    <MassRequest setSelectedCard={setSelectedCard} />
                )
            }
        </div>

    </div>
  )
}

export default ConsultationCategory
