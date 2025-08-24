import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const SocialIcons = () => {
  return (
    <div className="flex items-center space-x-4">
      {/* Behance Icon */}
      <a href="https://github.com/PatriceDAGBE" target="_blank" rel="noopener noreferrer">
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#32235B] text-white">
          <FaGithub size={24} />
        </div>
      </a>

      {/* LinkedIn Icon */}
      <a href="https://www.linkedin.com/in/patrice-dagbe/" target="_blank" rel="noopener noreferrer">
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#32235B] text-white">
          <FaLinkedin size={24} />
        </div>
      </a>

      {/* Instagram Icon */}
      <a href="https://www.instagram.com/p4trice.data_scientist.dev/" target="_blank" rel="noopener noreferrer">
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#32235B] text-white">
          <FaInstagram size={24} />
        </div>
      </a>
    </div>
  );
};

export default SocialIcons;