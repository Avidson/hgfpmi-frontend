import { Link } from "react-router-dom";
import BlogSection from "../Components/Helpers/BlogHero";
import ChurchValues from "../Components/Helpers/ChurchValues";
import Footer from "../Components/Helpers/Footer";
import Hero from "../Components/Helpers/Hero";
import Menue from "../Components/Helpers/Menu";
import Navbar from "../Components/Helpers/Navbar";
import OurCampaign from "../Components/Helpers/OurCampaign";
import QuickNav from "../Components/Helpers/QuickNav";
import QuickResource from "../Components/Helpers/QuickResource";
import SignupBanner from "../Components/Helpers/SignupBanner";
import SociailMedia from "../Components/Helpers/SociailMedia";
import StatementOfFaith from "../Components/Helpers/StatmentofFaith";
import StreamLiveBanner from "../Components/Helpers/StreamLiveBanner";
import Teachings from "../Components/Helpers/Teachings";
import TestimonialsSection from "../Components/Helpers/TestimonalSection";
import UpcomingEvents from "../Components/UpcomingEvents";
import { blogs } from "../data/blogs";
import { testimonialData } from "../data/testimonies";
import { useEffect } from "react";
import QuickBanner from "../Components/Helpers/QuickBanner";
import CommunityBanner from "../Components/Helpers/CommunityBanner";
import { useFetchTestimonies } from "../Helpers/fetch.hooks";
import Spinner from "../Components/Helpers/Spinner";

function LandingPage({ setSelectedCard }) {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  const upcomingEventData = "";

  const blogData = blogs.slice(0, 3);

  const testimonies = testimonialData.splice(0, 3);

  return (
    <div className="page">
      {/**
        <Navbar setSelectedCard={setSelectedCard} /> 
        * 
        */}
      <Menue setSelectedCard={setSelectedCard} />

      <div className="mt-[70px]">
        <QuickNav setSelectedCard={setSelectedCard} />
      </div>

      <div className="mt-[30px]">
        <Hero setSelectedCard={setSelectedCard} />
      </div>
      <SignupBanner />

      <div className="mb-[30px]">
        <UpcomingEvents data={upcomingEventData} />
      </div>
      <StatementOfFaith setSelectedCard={setSelectedCard} />

      <div className="py-8">
        <QuickResource />
      </div>

      <div className="mb-[30px]">
        <UpcomingEvents data={upcomingEventData} />
      </div>
      
      <div className="py-8 text-center">
        <Link to='/Holy-Ghost-prayer-movement' className="text-main-color text-center font-semibold">
          Join Holy Ghost Fraternity prayer movement international 2025 Convention Here!
        </Link>
      </div>

      {/**
       *
       */}
      <StreamLiveBanner />

      <Teachings />
      {/**
         * 
        <OurCampaign />
         */}

 {/*      <div className="mb-8 bg-gray-100">
        <TestimonialsSection data={testimonies} showMore={false} />

        <div className="text-center mt-6 mb-12">
          <Link
            to="/resources"
            className="bg-main-color-dark text-white px-8 py-3 rounded-full font-semibold hover:bg-main-color transition-colors"
          >
            View More
          </Link>
        </div>
      </div> */}

        {/**
         * 
      <div className="mb-8 bg-gray-50 py-5">
          <BlogSection data={blogData} />
        <div className="text-center mt-4">
          <Link
            to="/blogs"
            className="bg-main-color-dark text-white px-8 py-3 rounded-full font-semibold hover:bg-main-color transition-colors"
          >
            View All Blogs
          </Link>
        </div>

      </div>
         */}

      {/**COMMUNITY */}
      <CommunityBanner setSelectedCard={setSelectedCard} />

      <div className="pad1">
        <hr className="mt-36 border-[2px] border-main-color" />
      </div>

      {/**SECTION FOR SOCILA MEDIA POSTS OR ACCOUNTS */}
      <SociailMedia />

      <div className="pad1">
        <hr className="mt-4 border-[2px] border-main-color" />
      </div>


      {/**Quick Banner */}
      <div className="mb-8">
      </div>
        <QuickBanner />  

      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
}

export default LandingPage;
