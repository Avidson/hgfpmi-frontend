import React from 'react'
import Menu from '../Components/Helpers/Menu'
import QuickNav from '../Components/Helpers/QuickNav'
import Banner from '../Components/Helpers/Banner'
import CommunityCategory from '../Components/CommunityUi/CommunityCategory'
import Footer from '../Components/Helpers/Footer'

function Community({ setSelectedCard }) {
  return (
    <div>
      <Menu setSelectedCard={setSelectedCard} />
      <div className="mt-[70px]">
          <QuickNav setSelectedCard={setSelectedCard} />
      </div>
      <div className="mt-[30px]">
          <Banner
            video={'https://videos.pexels.com/video-files/3772777/3772777-sd_640_360_24fps.mp4'} 
            text={'Community'}
          />
      </div>

      <CommunityCategory />


      <Footer />

    </div>
  )
}

export default Community
