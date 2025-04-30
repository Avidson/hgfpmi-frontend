import { useFetchGallery } from '../../Helpers/fetch.hooks';
import Spinner from '../Helpers/Spinner';
import React from 'react'
import { motion } from 'framer-motion';
import { FaLinkedin, FaTwitter, FaGithub, FaInstagram, FaFacebook } from 'react-icons/fa';
import { ministryOfficials } from '../../data/ministryOfficials';

const GalleryImage = ({ image_description: name, upload_image: photo }) => {
    return (
        <motion.div
            className="relative overflow-hidden rounded-lg shadow-lg w-[400px]"
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

function Gallery() {
    const teamMembers = ministryOfficials
    const { data, isFetching } = useFetchGallery()
  return (
    <div>
        <h1 className='text-center uppercase text-text-color-2 font-semibold text-[32px]'>Gallery</h1>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Gallery images
        </p>

        <div className='flex items-center justify-start gap-4 flex-wrap'>
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
                            <GalleryImage {...member} />
                        </motion.div>
                    ))
                )
            }
        </div>
    </div>
  )
}

export default Gallery
