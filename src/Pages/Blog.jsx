import { useEffect } from 'react'
import Footer from '../Components/Helpers/Footer'
import QuickNav from '../Components/Helpers/QuickNav'
import Menu from '../Components/Helpers/Menu'
import Banner from '../Components/Helpers/Banner';
import { Link, useLocation } from 'react-router-dom';
import { useFetchBlogs } from '../Helpers/fetch.hooks';
import { formatDateAndTime } from '../Helpers/formatDateAndTime';
import { FaArrowLeft } from "react-icons/fa6";
import Spinner from '../Components/Helpers/Spinner';
import HeroBg from '../assests/hero-bg.jpg'

function Blog({setSelectedCard}) {
  const loc = useLocation()
  const pathName = loc.pathname.split('/')[2]
  const { data, isFetching } = useFetchBlogs(pathName)
  const blogData = data
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });

}, []);

  const { formattedDate: createdFormattedDate, formattedTime: createdFormattedTime } = formatDateAndTime(blogData?.created)
  const { formattedDate: updatedFormattedDate, formattedTime: updatedFormattedTime } = formatDateAndTime(blogData?.updated)

  return (
    <div>
        <Menu setSelectedCard={setSelectedCard} />
        <div className="mt-[70px]">
            <QuickNav setSelectedCard={setSelectedCard} />
        </div>

        <div className="mt-[30px]">
            <Banner
              img={HeroBg} 
              text={`${ blogData?.title ? blogData?.title : 'Blog'}`}
            />
        </div>

        {
          isFetching ? (
            <Spinner />
          ) : (
            <div className='mt-[10px] pad1'>
              {
                blogData && (
                    <div className="flex flex-col items-center justify-center mt-6 mb-10">
                        <img 
                          src={blogData?.image} 
                          alt={blogData?.title}
                          className='w-[800px] h-auto small-pc:w-[95%] rounded-[20px]' 
                        />

                        <h3 className="mt-10 text-2xl font-bold mb-3  text-main-color transition-colors">
                          {blogData?.title}
                        </h3>

                        <div className="flex items-center gap-4 flex-wrap justify-center">
                          <span className='flex items-center gap-1 font-semibold text-[18px] tablet:text-[16px]'>Author: <p className='font-bold text-main-color'>{blogData?.author}</p></span>
                          <span className='flex items-center gap-1 font-semibold text-[18px] tablet:text-[16px]'>Wrriten on: <p className='font-bold text-main-color'>{createdFormattedDate} {createdFormattedTime}</p></span>
                        </div>
                        <span className='flex items-center gap-1 font-semibold text-[18px] tablet:text-[16px]'>Updated on: <p className='font-bold text-main-color'>{updatedFormattedDate} {updatedFormattedTime}</p></span>


                        <div>
                          {blogData?.body?.split("\r\n").map((paragraph, index) =>
                            paragraph.trim() ? <p key={index}>{paragraph}</p> : null
                          )}
                        </div>

                    </div>
                )
              }

                <div className="w-fit">
                    <Link to={'/blogs'} className="flex items-center gap-2 text-main-color p-1 border-b-[2px] border-b-transparent mb-10 hover:border-b-main-color">
                      <FaArrowLeft />
                      Back
                    </Link>
                </div>

            </div>
          )
        }
        

      <Footer />
    </div>
  )
}

export default Blog
