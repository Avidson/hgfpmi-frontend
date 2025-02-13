import { FaWhatsapp, FaTwitter, FaYoutube, FaInstagram, FaFacebook, FaTiktok } from 'react-icons/fa';

function SociailMedia() {
  const socialLinks = [
    { name: 'WhatsApp', icon: <FaWhatsapp />, url: 'https://whatsapp.com' },
    { name: 'Twitter', icon: <FaTwitter />, url: 'https://twitter.com' },
    { name: 'YouTube', icon: <FaYoutube />, url: 'https://www.youtube.com/@fr.ebubemuonsoholyghostado9611' },
    { name: 'Instagram', icon: <FaInstagram />, url: 'https://instagram.com' },
    { name: 'Facebook', icon: <FaFacebook />, url: 'https://www.facebook.com/fadaebube' },
    { name: 'TikTok', icon: <FaTiktok />, url: 'https://vm.tiktok.com/ZMkRMheak' },
  ];

  return (
    <div className='pad1 flex items-center justify-center my-12 gap-12'>
      {socialLinks.map((item, idx) => (
        <div key={idx} className=''>
          <a href={item.url} target='_blank' rel='noopener noreferrer' aria-label={item.name} className='text-main-color hover:text-main-color-dark duration-300 text-[64px] tablet:text-[50px] phone:text-[48px]'>
            {item.icon}
          </a>
        </div>
      ))}
    </div>
  )
}

export default SociailMedia
