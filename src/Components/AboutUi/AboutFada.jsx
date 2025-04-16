import React, { useEffect } from 'react';
import Menu from '../Helpers/Menu';
import Navbar from '../Helpers/Navbar';
import QuickNav from '../Helpers/QuickNav';
import Footer from '../Helpers/Footer';
import { FaChurch, FaHeart, FaStar, FaBookOpen, FaPray, FaHandsHelping, FaArrowRight, FaQuoteLeft } from 'react-icons/fa';
import { motion } from 'framer-motion';

const AboutFada = () => {
  const photoPlaceholder = "https://drive.google.com/file/d/1ytbhqZZO2kewwiFwUZQeXrtDKGtRrJb5/view";

  const sections = [
    {
      title: "Parish Leadership:",
      icon: <FaChurch className="w-6 h-6" />,
      content: "Currently serving as the Parish Priest of Blessed Iwene Tansi, Umudioka, Dunukofia, Rev. Fr. Emmanuel Obimma carries out his pastoral duties with utmost dedication. His leadership in the parish reflects a deep commitment to fostering spiritual growth and community engagement."
    },
    {
      title: "Spiritual Directorship:",
      icon: <FaHeart className="w-6 h-6" />,
      content: "In addition to his parish responsibilities, Rev. Fr. Emmanuel Obimma serves as the Spiritual Director of Holy Ghost Adoration Ministry, Uke, Anambra state. His profound love for the Holy Spirit and unyielding zeal for the house of God have significantly contributed to the widespread growth and impact of the ministry."
    },
    {
      title: "Philosophy and Zeal",
      icon: <FaStar className="w-6 h-6" />,
      content: "Known for his passion for the Holy Spirit, Rev. Fr. Emmanuel Obimma's teachings are grounded in a philosophy of love, faith, and service. His fervor for the ministry extends beyond the pulpit, actively engaging in initiatives that bring about positive change and transformation"
    },
    {
      title: "A Beacon of Light:",
      icon: <FaBookOpen className="w-6 h-6" />,
      content: "Rev. Fr. Emmanuel Obimma's journey as a priest and spiritual leader serves as a guiding light for many seeking a deeper connection with God. His compassion, wisdom, and commitment inspire both the local community and those beyond geographical boundaries"
    }
  ];

  const galleryImages = [
    "https://drive.google.com/file/d/1Nkj1GUB9ohahVXyNC259k4YXejQ3t6aE/view?usp=drive_link",
    "https://drive.google.com/file/d/1DXK8wj6q9EGU3sf91wasMYsoMSylhtjK/view?usp=drive_link",
    "https://drive.google.com/file/d/1E8TkypzqlatcdAgKFhsQcwmOd1qPw5Ec/view?usp=drive_link",
    "https://drive.google.com/file/d/1aUlZuuBA6Zsw8p0CvzDNa6ho-gVuFcqu/view?usp=drive_link",
    "https://drive.google.com/file/d/1IUUnL8YNYQbTXOcDblGpq0DfF-k79SIC/view?usp=drive_link",
    "https://drive.google.com/file/d/1ytbhqZZO2kewwiFwUZQeXrtDKGtRrJb5/view?usp=drive_link"
  ];

  return (
    <div className="bg-gradient-to-b from-white to-blue-50">
      <Menu />
      <QuickNav />

      <div className="min-h-screen pad1">
        {/* Enhanced Hero Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative overflow-hidden bg-gradient-to-r from-blue-50 to-white pt-[4rem]"
        >
          <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5" />
          <div className="container mx-auto px-4 py-16 relative">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <motion.div 
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="w-full md:w-1/2 space-y-6"
              >
                <div className="flex items-center gap-2 text-slate-600">
                  <FaPray className="w-5 h-5" />
                  <span className="text-sm font-medium">Spiritual Leadership</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-main-color bg-clip-text tt">
                  A Guiding Light to Faith
                </h1>
                <h2 className="text-2xl md:text-3xl font-light">
                  REV. FR. EMMANUEL OBIMMA
                </h2>
                <p className="text-xl text-red-800 font-semibold">
                  (FADA EBUBE MUONSO)
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Rev. Fr. Emmanuel Obimma is an ordained Catholic Priest hailing from the esteemed Onitsha Archdiocese. Born into the family of Late Mr. and Mrs. Obimma of Nkwelle-Ezunaka in Anambra state. He spent his formative years in the same town. As the youngest son among seven siblings, he was ordained a priest on August 6, 2011.
                </p>
         
              </motion.div>
              <motion.div 
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="w-full md:w-1/2"
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-lg transform rotate-6" />
                  <img 
                    src={photoPlaceholder}
                    alt="Reverend"
                    className="rounded-lg shadow-2xl w-full max-w-md mx-auto relative z-10"
                  />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Enhanced Content Sections */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sections.map((section, index) => (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center gap-4 mb-4">
                  <motion.div 
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="p-3 bg-blue-100 text-main-color rounded-lg"
                  >
                    {section.icon}
                  </motion.div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {section.title}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {section.content}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Enhanced Photo Gallery */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <div className="flex items-center gap-3 justify-center mb-8">
              <FaQuoteLeft className="text-blue-600 w-6 h-6" />
              <h3 className="text-2xl font-semibold text-gray-800 text-center">
                Moments of Ministry
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {galleryImages.map((image, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <img
                      src={image}
                      alt={`Ministry moment ${index + 1}`}
                      className="w-full h-64 object-cover rounded-lg shadow-md group-hover:shadow-xl transition-all duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-lg flex items-center justify-center">
                      <p className="text-white text-lg font-medium transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                        View Memory
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutFada;