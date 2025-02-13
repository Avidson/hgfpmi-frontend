import { motion } from 'framer-motion';
import { FaHands, FaCross, FaArrowRight } from 'react-icons/fa';
import { RiHeartLine } from 'react-icons/ri';

const ChurchWebsite = () => {


  const pillars = [
    {
      title: "Commitments",
      description: "Dedicated to serving our community through faith and action",
      icon: <FaHands className="w-12 h-12" />,
      overlayText: "Developing a spirit filled Church\nRaising men and women with integrity\nReleasing men with their gifts and callings\nBuilding rewarding relationships"
    },
    {
      title: "Core Values",
      description: "Guided by love, compassion, and spiritual growth",
      icon: <RiHeartLine className="w-12 h-12" />,
      overlayText: "Excellence\nAccountability\nAvailability\nIntegrity\nHonor\nTeam work\nDiscipline"
    },
    {
      title: "Focus",
      description: "Centered on worship, fellowship, and ministry",
      icon: <FaCross className="w-12 h-12" />,
      overlayText: "Being the best at what we do\nOperating the business of God ethically,\nprofessionally and efficiently"
    }
  ];



  const Pillar = ({ pillar, index }) => {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.2 }}
        className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-500"
      >
        <div className="p-8 relative z-10">
          <motion.div 
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="mb-6"
          >
            <div className="mx-auto w-24 h-24 bg-[#9B111E]/10 rounded-full flex items-center justify-center text-main-color-dark">
              {pillar.icon}
            </div>
          </motion.div>
          <motion.h3 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-2xl font-bold mb-4 text-main-color text-center"
          >
            {pillar.title}
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-600 text-center"
          >
            {pillar.description}
          </motion.p>
        </div>
        
        <motion.div 
          initial={{ y: "100%" }}
          whileHover={{ y: 0 }}
          transition={{ type: "tween", duration: 0.4, ease: "easeInOut" }}
          className="absolute inset-0 bg-[#9B111E] text-[#FFFDF9] z-20"
        >
          <motion.div 
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="p-8 h-full flex items-center justify-center"
          >
            <p className="text-sm text-center whitespace-pre-line leading-relaxed">
              {pillar.overlayText}
            </p>
          </motion.div>
        </motion.div>

        {/* Background Pattern */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 0.1 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-gradient-to-br from-[#9B111E] to-transparent z-0"
        />
      </motion.div>
    );
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-[#FFFDF9] bg-gradient-to-b from-#9B111E to-white"
    >


      {/* Pillars Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-24 bg-[#9B111E]/5"
      >
        <div className="container mx-auto px-6 lg:px-[5rem]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className="text-4xl font-bold text-main-color">Our Three Pillars</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The foundational principles that guide our ministry and service
            </p>
          </motion.div>

          <motion.div 
            initial="initial"
            animate="animate"
            className="grid grid-cols-1 md:grid-cols-3 gap-12"
          >
            {pillars.map((pillar, index) => (
              <Pillar key={index} pillar={pillar} index={index} />
            ))}
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default ChurchWebsite;