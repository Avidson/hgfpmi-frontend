import { motion } from 'framer-motion';
import { FaCross, FaHandHoldingHeart, FaUsers, FaChurch, FaArrowRight } from 'react-icons/fa';
import ChurchValues from './ChurchValues';
import { useNavigate } from 'react-router-dom';
import MainImg from '../../assests/church1.jpg'

const StatementOfFaith = ({ setSelectedCard }) => {
  const navigate = useNavigate()
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const features = [
    {
      icon: <FaCross />,
      text: "Grounded in Biblical Truth"
    },
    {
      icon: <FaHandHoldingHeart />,
      text: "Committed to Service"
    },
    {
      icon: <FaUsers />,
      text: "United in Fellowship"
    },
    {
      icon: <FaChurch />,
      text: "Growing in Faith"
    }
  ];

  const handlePopup = (item) => {
    setSelectedCard(item)
  }

  const handleJoinCommunity = () => {
    navigate('/community')
  }

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-white to-slate-50 py-16 px-4 lg:px-8">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5" />
        
        <div className="max-w-7xl mx-auto">
          {/* Main Content */}
          <div className="relative flex flex-col items-center lg:flex-row lg:items-start gap-16">
            {/* Left Column */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2 z-10"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <div className="flex items-center gap-2 text-main-color mb-4">
                  <FaCross className="w-5 h-5" />
                  <span className="text-sm font-medium uppercase tracking-wider">Our Beliefs</span>
                </div>
                
                <h2 className="text-4xl font-bold text-slate-800 mb-6">
                  STATEMENT OF{' '}
                  <span className="bg-gradient-to-r from-main-color to-main-color-dark bg-clip-text text-transparent">
                    FAITH
                  </span>
                </h2>
                
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  The Holy Ghost fraternity movement is guided by a set of core values that shape our actions, decisions, and interactions within our community. These values serve as a compass, guiding us towards personal growth, meaningful relationships, and service to others.
                </p>

                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleJoinCommunity}
                  className="bg-main-color text-white font-semibold px-8 py-4 rounded-full flex items-center gap-3 hover:bg-main-color-dark transition-all shadow-lg hover:shadow-xl group"
                >
                  Join our Community
                  <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </motion.div>

              {/* Feature Grid */}
              {/**
               * 
              <div className="grid grid-cols-2 gap-4 mt-12">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                    className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="text-[#9B111E] w-8 h-8 flex items-center justify-center bg-red-50 rounded-full">
                      {feature.icon}
                    </div>
                    <span className="text-slate-700 font-medium">{feature.text}</span>
                  </motion.div>
                ))}
              </div>
               */}
            </motion.div>

            {/* Right Column - Image */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2 relative"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative"
              >
                {/* Decorative Elements */}
                <div className="absolute -inset-4 bg-gradient-to-r from-[#9B111E]/20 to-orange-600/20 rounded-lg transform rotate-6 blur-lg" />
                <div className="absolute -inset-4 bg-gradient-to-r from-[#9B111E]/20 to-orange-600/20 rounded-lg transform -rotate-6 blur-lg" />
                
                {/* Main Image */}
                <img
                  src={MainImg}
                  alt="Community gathering with a cross"
                  className="rounded-lg shadow-xl object-cover h-96 tablet:h-auto w-full lg:w-full relative z-10"
                />

                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                  className="absolute cursor-pointer -top-6 -right-6 bg-white p-4 rounded-lg shadow-lg z-20"
                  onClick={() => handlePopup('donations')}
                >
                  <FaCross className="w-6 h-6 text-[#9B111E]" />
                </motion.div>
                
                <motion.div
                  animate={{ y: [5, -5, 5] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                  className="absolute cursor-pointer -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg z-20"
                  onClick={() => handlePopup('donations')}
                >
                  <FaHandHoldingHeart className="w-6 h-6 text-[#9B111E]" />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
      {/**
       * 
      <ChurchValues />
       */}
    </>
  );
};

export default StatementOfFaith;