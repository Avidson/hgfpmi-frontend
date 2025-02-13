import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaTwitter, FaGithub, FaInstagram, FaFacebook } from 'react-icons/fa';
import Menu from '../Helpers/Menu';
import QuickNav from '../Helpers/QuickNav';
import Footer from '../Helpers/Footer';
import { ministryOfficials } from '../../data/ministryOfficials';
import { useFetchLeaders } from '../../Helpers/fetch.hooks';
import Spinner from '../Helpers/Spinner';

const TeamMember = ({ name_in_full: name, photo }) => {
    return (
        <motion.div
            className="relative overflow-hidden rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
        >
            <img
                src={photo}
                alt={name}
                className="w-full h-72 object-cover object-top"
            />

            <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileHover={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent flex flex-col justify-end p-4"
            >
                <h3 className="text-white font-bold text-lg mb-1">{name}</h3>


                <motion.div

                    className="flex gap-4"
                >
                    <motion.a
                        whileHover={{ scale: 1.2, y: -2 }}
                        className="text-white hover:text-blue-400 cursor-pointer transition-colors"
                    >
                        <FaLinkedin size={22} />
                    </motion.a>
                    <motion.a
                        whileHover={{ scale: 1.2, y: -2 }}
                        className="text-white hover:text-blue-400 cursor-pointer transition-colors"
                    >
                        <FaTwitter size={22} />
                    </motion.a>
                    <motion.a
                        whileHover={{ scale: 1.2, y: -2 }}
                        className="text-white hover:text-pink-400 cursor-pointer transition-colors"
                    >
                        <FaInstagram size={22} />
                    </motion.a>
                    <motion.a
                        whileHover={{ scale: 1.2, y: -2 }}
                        className="text-white hover:text-blue-600 cursor-pointer transition-colors"
                    >
                        <FaFacebook size={22} />
                    </motion.a>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

const Minstry = () => {
    const teamMembers = ministryOfficials
    const { data, isFetching } = useFetchLeaders()

return (

    <>
        <Menu />
        <QuickNav />

        <div className="container pad1 py-16 bg-gray-50 flex flex-col">
            <h2 className="text-4xl font-bold text-center mb-4">Ministry Officials</h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
                Meet our talented team of professionals who make the magic happen
            </p>
            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                {
                    isFetching ? (
                        <div className="w-full flex items-center justify-center">
                            <Spinner />
                        </div>
                    ) : (
                        data?.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <TeamMember {...member} />
                        </motion.div>
                        ))
                    )
                }
            </motion.div>
        </div>

        <Footer />

    </>
);
};

export default Minstry;