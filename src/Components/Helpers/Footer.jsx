import React from 'react';
import { FaWhatsapp, FaTwitter, FaYoutube, FaInstagram, FaFacebook, FaTiktok } from 'react-icons/fa';
import { PiPaperPlaneTiltFill } from "react-icons/pi";
import Logo from './Logo';
import { Link } from 'react-router-dom';

const Footer = () => {
  // Array of social media links and corresponding icons
  const socialLinks = [
    { name: 'WhatsApp', icon: <FaWhatsapp />, url: 'https://whatsapp.com' },
    { name: 'Twitter', icon: <FaTwitter />, url: 'https://twitter.com' },
    { name: 'YouTube', icon: <FaYoutube />, url: 'https://www.youtube.com/@fr.ebubemuonsoholyghostado9611' },
    { name: 'Instagram', icon: <FaInstagram />, url: 'https://instagram.com' },
    { name: 'Facebook', icon: <FaFacebook />, url: 'https://www.facebook.com/fadaebube' },
    { name: 'TikTok', icon: <FaTiktok />, url: 'https://vm.tiktok.com/ZMkRMheak' },
  ];

  return (
    <footer className="bg-[#242424] py-12 pad1 text-white  ">
      {/* Subscription Section */}
      {/**
       * 
      <div className="flex flex-col items-center mb-12">
        <h2 className="text-3xl font-bold mb-4">SUBSCRIBE NOW!</h2>
        <p className="text-center max-w-xl text-gray-300 mb-6">
          Join our community to receive spiritual updates directly in your inbox. Get exclusive information about upcoming prayer meetings, social events, and chances to help others.
        </p>
        <div className="relative w-full max-w-md">
          <input
            type="email"
            placeholder="Your Email"
            className="w-full py-3 px-4 rounded-full bg-gray-700 text-white focus:outline-none"
          />
          <button className="absolute right-0 top-0 mt-1 mr-1 p-3 bg-yellow-500 rounded-full text-white hover:bg-yellow-400">
          <PiPaperPlaneTiltFill  />
          </button>
        </div>
      </div>

      { Divider }
      <div className="border-t border-yellow-500 mb-12"></div>
       */}

      {/* Footer Content */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 ">
        {/* Logo and Welcome Message */}
        <div className="flex flex-col items-center sm:items-start">
          <span className="block h-[50px]">

       <Logo/>
          </span>
          <p className="text-gray-400 lg:text-center sm:text-left text-[14px] mt-6">
            Welcome to the Holy Ghost Fraternity Prayer Group website, where we gather as a community of believers to deepen our relationship with the Holy Spirit and grow in our faith.
          </p>
        </div>

        {/* Quick Links */}
        <div className="lg:text-center sm:text-left">
          <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="text-gray-400 hover:text-yellow-500">Home</Link></li>
            <li><Link to="/about-us" className="text-gray-400 hover:text-yellow-500">About Us</Link></li>
            <li><Link to="/sermon" className="text-gray-400 hover:text-yellow-500">Live</Link></li>
            <li><Link to="/programs-and-events" className="text-gray-400 hover:text-yellow-500">Programs & Events</Link></li>
            <li><Link to="/resources" className="text-gray-400 hover:text-yellow-500">Resources</Link></li>
            <li><Link to="/blogs" className="text-gray-400 hover:text-yellow-500">Blogs</Link></li>
            <li><Link to="/shop" className="text-gray-400 hover:text-yellow-500">Shop</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="lg:text-center sm:text-left">
          <h3 className="font-semibold text-lg mb-4">Social</h3>
          <ul className="space-y-2">
            {socialLinks.map((link, index) => (
              <li key={index}>
                <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-500 flex items-center space-x-2">
                  <span>{link.icon}</span>
                  <span>{link.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Information */}
        <div className="lg:text-center sm:text-left">
          <h3 className="font-semibold text-lg mb-4">Head Office</h3>
          <p className="text-gray-400">
            Mailing Address: 3515 Atlantic Avenue 1210 <br />
            Long Beach, CA 90807 <br />
            Telephone: 726.229.0448 <br />
            Email: <a href="mailto:info@hgfdove.org" className="text-yellow-500 hover:text-yellow-400">info@hgfdove.org</a>
          </p>
        </div>
      </div>

      {/* Social Icons at the Bottom */}
      <div className="flex justify-center mt-8 space-x-4">
        {socialLinks.map((link, index) => (
          <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className="text-yellow-500 hover:text-yellow-400 text-2xl">
            {link.icon}
          </a>
        ))}
      </div>

      {/* Footer Credits */}
      <div className="text-center text-gray-400 mt-12">
        © 2024 Holy Ghost Fraternity Prayer Group. ALL RIGHTS RESERVED.
      </div>
    </footer>
  );
};

export default Footer;
