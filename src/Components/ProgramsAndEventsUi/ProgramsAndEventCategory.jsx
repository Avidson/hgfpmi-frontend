import { useState } from "react"
import EventsAndCommunity from "./EventsAndCommunity"
import OutreachAndMission from "./OutreachAndMission"

function ProgramsAndEventCategory() {
    const stateCategory = [
        {
            name: 'Events and Community',
            slug: 'eventsandcommunity'
        },
        {
            name: 'Outreach and Mission',
            slug: 'outreachandmission'
        },
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
                        <p className={`text-center font-semibold text-[24px] phone:text-[16px] `}>{item.name}</p>
                    </div>
                ))
            }
        </div>

        <div className="w-full pad1 mt-12 mb-8">
            {
                catState === 'eventsandcommunity' && (
                    <EventsAndCommunity />
                )
            }
            {
                catState === 'outreachandmission' && (
                    <OutreachAndMission />
                )
            }
        </div>

    </div>
  )
}

export default ProgramsAndEventCategory
