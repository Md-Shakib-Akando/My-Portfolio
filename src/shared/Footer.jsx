import { Link } from 'react-router';
import { FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa';
import { GoUpload } from 'react-icons/go';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            <footer className="bg-[#1b1f2a] text-white py-10 mt-16">
                <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className=" text-sm md:text-lg text-center md:text-left">
                        © {new Date().getFullYear()} Md Shakib Akando. All rights reserved.
                    </p>

                    <div className="flex gap-4 justify-center">
                        <Link to="https://www.linkedin.com/in/md-shakib-akando-b1a84533b/">
                            <FaLinkedin size={32} className="hover:text-[#00c58e]" />
                        </Link>
                        <Link to="https://github.com/Md-Shakib-Akando">
                            <FaGithub size={32} className="hover:text-[#00c58e]" />
                        </Link>
                        <Link to="https://www.facebook.com/sha.kib.493731">
                            <FaFacebook size={32} className="hover:text-[#00c58e]" />
                        </Link>
                    </div>
                </div>
            </footer>

            
            <button
                onClick={scrollToTop}
                className="fixed bottom-6 right-6 bg-[#1b1f2a] text-[#056d51] p-2 rounded-full shadow-lg  transition"
                aria-label="Go to top"
            >
                <GoUpload size={28} />
            </button>
        </>
    );
};

export default Footer;
