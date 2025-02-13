import { useEffect } from 'react'
import Menu from '../Components/Helpers/Menu'
import QuickNav from '../Components/Helpers/QuickNav'
import Banner from '../Components/Helpers/Banner'
import { blogs } from '../data/blogs'
import BlogSection from '../Components/Helpers/BlogHero'
import Footer from '../Components/Helpers/Footer'
import { useFetchBlogs } from '../Helpers/fetch.hooks'
import Spinner from '../Components/Helpers/Spinner'
import HeroBg from '../assests/hero-bg.jpg'

function Blogs({setSelectedCard}) {
  const { data, isFetching } = useFetchBlogs()

  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });

}, []);

    const blogData = data || []
  return (
    <div>
        <Menu setSelectedCard={setSelectedCard} />
        <div className="mt-[70px]">
            <QuickNav setSelectedCard={setSelectedCard} />
        </div>

        <div className="mt-[30px]">
            <Banner
              img={HeroBg} 
              text={'Blogs'}
            />
        </div>

        {
          isFetching ? (
            <Spinner />
          ) : (
            <BlogSection data={blogData} pagination={true} noPerPage={3} />
          )
        }

        <Footer />
    </div>
  )
}

export default Blogs
