import { FaFacebookF, FaLinkedinIn, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#1b1f2a] text-white py-15 mt-16">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        
       
        <p className="text-lg text-center md:text-left">
          © {new Date().getFullYear()} Md Shakib Akando. All rights reserved.
        </p>

        
        <div className="flex gap-4 justify-center">
          
            <FaFacebookF size={24} className='hover:text-[#00c58e] '/>
          
          
            <FaLinkedinIn size={24} className='hover:text-[#00c58e]'/>
         
          
            <FaGithub size={24} className='hover:text-[#00c58e]'/>
          
        </div>

      </div>
    </footer>
  );
};

export default Footer;
