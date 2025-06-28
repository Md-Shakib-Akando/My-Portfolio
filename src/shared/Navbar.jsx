import React, { useEffect, useState } from 'react';
import { Link, Links, NavLink } from 'react-router';
import logo from '/logo.png'
const Navbar = () => {
    const [open, setOpen] = useState(false);


    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className=' bg-[#1b1f2a]'>
            <div className='fixed top-0 z-50 bg-[#1b1f2a]/50 backdrop-blur-md w-full'>
                <div className="navbar    max-w-11/12 mx-auto text-white py-3 shadow-sm">
                    <div className="navbar-start">
                        <Link><img className='h-[50px] md:h-[70px] ' src={logo} alt="" /></Link>
                    </div>

                    <div className='navbar-center'>
                        <div className='hidden lg:flex'>
                            <ul className="menu menu-horizontal px-1 md:gap-3 xl:gap-6 text-lg">
                                <li className='hover:text-[#00c58e]'><a href="#">Home</a></li>
                                <li className='hover:text-[#00c58e]'><a href="#about">About</a></li>
                                <li className='hover:text-[#00c58e]'><a href="#skill">Skills</a></li>
                                <li className='hover:text-[#00c58e]'><a href="#project">Project</a></li>
                                <li className='hover:text-[#00c58e]'><a href="#contact">Contact</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="navbar-end">


                        <div className='hidden lg:flex'>
                            <a href="#contact">
                                <button className='btn mr-2 text-white shadow-none bg-[#00c58e] border-[#00c58e] hover:text-[#00c58e] hover:bg-[#1b1f2a]'>Hire Me</button>
                            </a>
                        </div>

                        <button onClick={() => setOpen(true)} className="btn bg-[#1b1f2a]/10 outline-none border-none shadow-none backdrop-blur-md text-white lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>


            {open && (
                <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex justify-end lg:hidden">
                    <div className="w-3/4 sm:w-1/2 md:w-1/3 bg-[#1b1f2a] text-white p-6 shadow-lg">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-semibold">Menu</h2>
                            <button onClick={() => setOpen(false)} className="text-white text-2xl">&times;</button>
                        </div>
                        <ul className="space-y-10 text-center">
                            <li className='hover:text-[#00c58e]'><a href="#">Home</a></li>
                                <li className='hover:text-[#00c58e]'><a href="#about">About</a></li>
                                <li className='hover:text-[#00c58e]'><a href="#skill">Skills</a></li>
                                <li className='hover:text-[#00c58e]'><a href="#project">Project</a></li>
                                <li className='hover:text-[#00c58e]'><a href="#contact">Contact</a></li>
                        </ul>
                        <div className='lg:hidden  flex justify-center mt-10'>
                            <a href="#contact">
                                <button className='btn mr-2 text-white shadow-none bg-[#00c58e] border-[#00c58e] hover:text-[#00c58e] hover:bg-[#1b1f2a]'>Hire Me</button>
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;
