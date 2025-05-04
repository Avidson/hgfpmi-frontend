import { FaArrowRight, FaLinkedin } from "react-icons/fa";
import { IoIosLink } from "react-icons/io";
import { useFetchAds } from "../Helpers/fetch.hooks"
import Spinner from "./Helpers/Spinner";
import { motion } from 'framer-motion';
import { TfiAlarmClock } from "react-icons/tfi";


function UpcomingEvents() {
    const { data, isFetching } = useFetchAds()
    
    const Event = ({ ads_title, image, organisation_name, ads_url, ads_starts, ads_end }) => {
        return (
            <motion.div
                className="relative overflow-hidden rounded-lg shadow-lg w-[450px] h-auto small-phone:w-[95%]"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
            >
                <img
                    src={image}
                    alt={ads_title}
                    className="w-full h-72 object-cover object-top"
                />
    
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent flex flex-col justify-end p-4"
                >
                    <h3 className="text-white font-bold text-lg mb-1">{ads_title}</h3> -
                    <h2 className="text-white font-bold text-lg mb-1">{organisation_name}</h2>
    
    
                    <motion.div
    
                        className="mt-[8px] flex gap-[4px] flex-col"
                    >
                        <motion.a
                            href={ads_url}
                            target="_blank"
                            whileHover={{ scale: 1.05, y: -2 }}
                            className="text-white hover:text-green-400 cursor-pointer transition-colors flex items-center gap-[4px]"
                        >
                            <IoIosLink size={22} />
                            Vist
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.05, y: -2 }}
                            className="text-white hover:text-blue-400 cursor-pointer transition-colors flex items-center gap-[4px]"
                        >
                            <TfiAlarmClock size={22} />
                            {
                                new Date(ads_starts).toLocaleString("en-US", { 
                                    weekday: 'long', 
                                    year: 'numeric', 
                                    month: 'long', 
                                    day: 'numeric', 
                                    //hour: '2-digit', 
                                    //minute: '2-digit', 
                                    //second: '2-digit',
                                    //timeZoneName: 'short'
                                })
                            }
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.05, y: -2 }}
                            className="text-white hover:text-pink-400 cursor-pointer transition-colors flex items-center gap-[4px]"
                        >
                            <TfiAlarmClock size={22} />
                            {
                                new Date(ads_end).toLocaleString("en-US", { 
                                    weekday: 'long', 
                                    year: 'numeric', 
                                    month: 'long', 
                                    day: 'numeric', 
                                    //hour: '2-digit', 
                                    //minute: '2-digit', 
                                    //second: '2-digit',
                                    //timeZoneName: 'short'
                                })
                            }
                        </motion.a>
                    </motion.div>
                </motion.div>
            </motion.div>
        );
    };

  return (
      <section className="py-8 pad1 bg-gray-100">
          <h2 className="text-2xl mb-12 text-center uppercase md:text-5xl font-semibold text-color-1 ">
            Upcoming Event
          </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {
                isFetching ? (
                    <div className="flex items-center justify-center">
                        <Spinner />
                    </div>
                ) : (
                    data?.filter(ad => ad.ads_approved)?.map((event, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Event {...event} />
                        </motion.div>
                        ))
                )
            }
        </div>
      </section>
  )
}

export default UpcomingEvents