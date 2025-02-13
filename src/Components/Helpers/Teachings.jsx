import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

function Teachings() {
    const campaigns = [
        {
          title: "ADORERS, PAUSE &amp; LISTEN TO THIS 🔥🔥",
          description: "Join us for a transformative experience of worship and fellowship",
          date: "June 15-18, 2024",
          src: "https://www.youtube.com/embed/UN6JMzTN2oQ",
          tag: "Featured Event"
        },
        {
          title: "FR.EBUBE MUONSO ADDRESS YOUTHS ALL OVER THE FEDERATION!!!",
          description: "Unite in prayer with believers worldwide",
          date: "Daily Sessions",
          src: "https://www.youtube.com/embed/JliBD5IofoM",
          tag: "Online Prayer"
        },
        {
          title: "FR.EBUBE MUONSO INVOKES THE POWER OF THE DIVINE OVER THE LAND OF LAGOS!!!!",
          description: "Strengthen your spiritual journey through daily communion",
          date: "Every Day",
          src: "https://www.youtube.com/embed/oDmQmYZ1gnk",
          tag: "Spiritual Growth"
        }
      ];

      const Campaign = ({ campaign, index }) => {
        return (
          <motion.iframe 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            src={campaign.src}
    
            frameBorder='0'
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" 
            allowfullscreen
            className="w-full h-[300px] group relative overflow-hidden rounded-2xl bg-white shadow-xl"
          >
            {/* Creative Image Container */}
            <div className="relative aspect-w-4 aspect-h-5 overflow-hidden">
              {/* Background Pattern */}
              <motion.div
                initial={{ opacity: 0.3 }}
                animate={{ opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute inset-0 bg-gradient-to-br from-[#9B111E]/20 to-transparent z-10"
              />
              
              {/* Main Image */}
              <motion.div
                whileHover={{ scale: 1.15 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative w-full h-full"
              >
              </motion.div>
    
              {/* Overlay Elements */}
              <motion.div 
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-gradient-to-t from-[#9B111E] via-[#9B111E]/80 to-transparent z-20"
              >
                {/* Event Tag */}
                <motion.div
                  initial={{ x: -100 }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.4 }}
                  className="absolute top-4 left-0 bg-white py-1 px-4 rounded-r-full shadow-lg"
                >
                  <span className="text-[#9B111E] text-sm font-semibold">{campaign.tag}</span>
                </motion.div>
    
                {/* Content Container */}
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="space-y-3"
                  >
                    <p className="text-[#FFFDF9]/80 text-sm font-medium">{campaign.date}</p>
                    <h3 className="text-[#FFFDF9] text-2xl font-bold">{campaign.title}</h3>
                    <p className="text-[#FFFDF9]/90 text-sm leading-relaxed">
                      {campaign.description}
                    </p>
                    <motion.button
                      whileHover={{ x: 5 }}
                      className="flex items-center space-x-2 text-[#FFFDF9] text-sm font-medium mt-4"
                    >
                      <span>Learn More</span>
                      <FaArrowRight className="w-4 h-4" />
                    </motion.button>
                  </motion.div>
                </div>
              </motion.div>
    
              {/* Decorative Elements */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileHover={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/10 to-transparent rounded-bl-full z-10 pointer-events-none"
              />
            </div>
          </motion.iframe>
        );
      };

  return (
      <section className="py-16 pad1 bg-gradient-to-b from-[#2B4593] to-white">
          <h2 className="text-2xl mb-6 text-center uppercase md:text-5xl font-semibold text-color-1 ">
            Teachings
          </h2>
        <div className="container mx-auto px-6">

          <motion.div 
            initial="initial"
            animate="animate"
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {campaigns.map((campaign, index) => (
              <Campaign key={index} campaign={campaign} index={index} />
            ))}
          </motion.div>
        </div>
      </section>
  )
}

export default Teachings
