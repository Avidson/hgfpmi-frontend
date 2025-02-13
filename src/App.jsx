import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import LandingPage from './Pages/LandingPage'
import { useEffect, useState } from 'react';
import Authenticate from './Components/Modals/Authenticate';
import { CgCloseO } from "react-icons/cg";
import ShoppingCart from './Components/Modals/ShoppingCart';
import ForgotPassword from './Components/Helpers/ForgotPassword';
import Donations from './Components/Modals/Donations';
import Store from './Pages/Store';
import AboutUs from './Pages/AboutUs';
import { Toaster } from 'react-hot-toast';
import Blogs from './Pages/Blogs';
import Blog from './Pages/Blog';
import Resources from './Pages/Resources';
import Sermon from './Pages/Sermon';
import ProgramsAndEvents from './Pages/ProgramsAndEvents';
import SermonTeachings from './Pages/SermonTeachings';
import Community from './Pages/Community';
import Consultations from './Pages/Consultations';
import ChildrenConer from './Pages/ChildrenConer';
import Dashboard from './Admin/Pages/Dashboard';
import Events from './Admin/Pages/Events';
import Testimonies from './Admin/Pages/Testimonies';
import Consulations from './Admin/Pages/Consulations';
import AdminStore from './Admin/Pages/AdminStore';
import Notifications from './Admin/Pages/Notifications';
import AdminChildrenConer from './Admin/Pages/AdminChildrenConer';
import AdminDonations from './Admin/Pages/AdminDonations';
import Ministry from './Admin/Pages/Ministry';
import Bookmarks from './Admin/Pages/Bookmarks';
import Accounting from './Admin/Pages/Accounting';
import Profile from './Admin/Pages/Profile';
import PrayerRequest from './Admin/Pages/PrayerRequest';
import NewEvents from './Admin/Modal/NewEvents';
import NewCategory from './Admin/Modal/NewCategory';
import NewProductItem from './Admin/Modal/NewProductItem';
import MassReqestPayout from './Components/Modals/MassReqestPayout';
import FaceBookLive from './Components/SermonUi/FaceBookLive';
import TiktokLive from './Components/SermonUi/TiktokLive';
import NewTestimony from './Admin/Modal/NewTestimony';
import OnlineGiving from './Components/Modals/OnlineGiving';
import HolyGhostPrayerMovement from './Pages/HolyGhostPrayerMovement';
import HolyGhostPrayerMovementAppreciation from './Pages/HolyGhostPrayerMovementAppreciation';




function App() {
  const [ selectedCard, setSelectedCard ] = useState(null)
  const [ editEventId, setEditEventID ] = useState()
  const [ productItemId, setProductItemId ] = useState()
  const [ testimonyId, setTestimonyId ] = useState()

  const [ countDownTime, setCountDownTime ] = useState(1)


  const renderPopup = () => {
    switch(selectedCard){
      case 'authenticate' :
        return (
          <div>
              <Authenticate setSelectedCard={setSelectedCard} selectedCard={selectedCard} />
          </div>
        )
      case 'shoppingCart':
        return (
          <div>
            <ShoppingCart setSelectedCard={setSelectedCard} />
          </div>
        )
      case 'forgotPassword':
        return (
          <ForgotPassword setSelectedCard={setSelectedCard} />
        )
      case 'donations':
        return (
          <div>
            <Donations setSelectedCard={setSelectedCard} />
          </div>
        )
      case 'onlineGiving':
        return (
          <div>
            <OnlineGiving />
          </div>
        )
      case 'newEvents':
        return (
          <div>
            <NewEvents editEventId={editEventId} />
          </div>
        )
      case 'categoryCard':
        return (
          <div>
            <NewCategory />
          </div>
        )
      case 'productCard':
        return (
          <div>
            <NewProductItem productItemId={productItemId} />
          </div>
        )
      case 'massRequestPayout':
        return (
          <div>
            <MassReqestPayout />
          </div>
        )
      case 'newTestimony':
        return (
          <div>
            <NewTestimony setTestimonyId={setTestimonyId} testimonyId={testimonyId} />
          </div>
        )
    }
  }

  /**
   useEffect(() => {
     const handleClickOutside = (event) => {
       if (event.target.classList.contains('popup-overlay')) {
         setSelectedCard(null);
       }
     };
 
     document.addEventListener('click', handleClickOutside);
 
     return () => {
       document.removeEventListener('click', handleClickOutside);
     };
   }, []);
   * 
   */

  const closePopup = () => {
    setSelectedCard(null);
    setEditEventID()
    setProductItemId()
    setTestimonyId()
  };

  return (
    <div className='app overflow-hidden'>
      <Toaster position='top-center'></Toaster>
      {
        selectedCard && (
          <>
            <div className={`popup-overlay z-[9999] fixed flex items-center justify-center top-0 left-0 w-[100vw] h-[100vh] bg-transparent-bg-2 transition-transform duration-500 ease-in-out transform translate-y-0`}
            >
              <div className={`z-50 w-[550px] phone:max-w-[94%] h-auto m-auto rounded-[12px] border-[1px] px-[24px] py-4 flex flex-col gap-6 bg-white shadow-xl`}>
                <div className='w-full flex flex-col'>
                  <div onClick={closePopup} className='ml-auto p-1 cursor-pointer'>
                    <CgCloseO className='text-[32px] phone:text-[28px]' />
                  </div>
                  <div className='mt-2'>
                    {renderPopup()}
                  </div>
                </div>
              </div>
            </div>
          </>
        )
      }
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage setSelectedCard={setSelectedCard} />} />
          <Route path='/shop' element={<Store setSelectedCard={setSelectedCard} />} />
          <Route path='/about-us' element={<AboutUs setSelectedCard={setSelectedCard} />} />
          <Route path='/blogs' element={<Blogs setSelectedCard={setSelectedCard} />} />
          <Route path='/blog/:id' element={<Blog setSelectedCard={setSelectedCard} />} />
          <Route path='/resources' element={<Resources setSelectedCard={setSelectedCard} />} />
          <Route path='/sermon' element={<Sermon countDownTime={countDownTime} setSelectedCard={setSelectedCard} />} />
          <Route path='/programs-and-events' element={<ProgramsAndEvents setSelectedCard={setSelectedCard} />} />
          <Route path='/sermon/teaching/:id' element={<SermonTeachings setSelectedCard={setSelectedCard} />} />
          <Route path='/sermon/teaching/:id' element={<SermonTeachings setSelectedCard={setSelectedCard} />} />
          <Route path='/community' element={<Community setSelectedCard={setSelectedCard} />} />
          <Route path='/consultations' element={<Consultations setSelectedCard={setSelectedCard} />} />
          <Route path='/children-coner' element={<ChildrenConer setSelectedCard={setSelectedCard} />} />
          <Route path='/Holy-Ghost-prayer-movement' element={<HolyGhostPrayerMovement setSelectedCard={setSelectedCard} />} />
          <Route path='/Holy-Ghost-prayer-movement-success' element={<HolyGhostPrayerMovementAppreciation setSelectedCard={setSelectedCard} />} />



          <Route path='/faceBookLive' element={<FaceBookLive countDownTime={countDownTime} setSelectedCard={setSelectedCard} />} />
          <Route path='/tiktokLive' element={<TiktokLive countDownTime={countDownTime} setSelectedCard={setSelectedCard} />} />


          <Route path='/admin/dashboard' element={<Dashboard />} />
          <Route path='/admin/events' element={<Events setSelectedCard={setSelectedCard} setEditEventID={setEditEventID} />} />
          <Route path='/admin/testimonies' element={<Testimonies setSelectedCard={setSelectedCard} setTestimonyId={setTestimonyId} />} />
          <Route path='/admin/consultation' element={<Consulations />} />
          <Route path='/admin/prayer-request' element={<PrayerRequest />} />
          <Route path='/admin/store' element={<AdminStore setProductItemId={setProductItemId} setSelectedCard={setSelectedCard} />} />
          <Route path='/admin/notifications' element={<Notifications />} />
          <Route path='/admin/children-coner' element={<AdminChildrenConer />} />
          <Route path='/admin/donations' element={<AdminDonations />} />
          <Route path='/admin/ministry' element={<Ministry />} />
          <Route path='/admin/bookmark' element={<Bookmarks />} />
          <Route path='/admin/account' element={<Accounting />} />
          <Route path='/admin/profile' element={<Profile />} />

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
