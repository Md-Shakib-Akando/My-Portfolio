import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router';

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
        <div className='bg-[#1b1f2a]'>
            <div className="navbar max-w-11/12 mx-auto text-white py-3 shadow-sm">
                <div className="navbar-start">
                    <a className="btn btn-ghost text-xl">Akando</a>
                </div>

                <div className="navbar-end">
                   
                    <div className='hidden lg:flex'>
                        <ul className="menu menu-horizontal px-1 gap-8 text-lg">
                            <li className='hover:text-[#00c58e]'><NavLink>Home</NavLink></li>
                            <li className='hover:text-[#00c58e]'><NavLink>About</NavLink></li>
                            <li className='hover:text-[#00c58e]'><NavLink>My Skill</NavLink></li>
                            <li className='hover:text-[#00c58e]'><NavLink>Project</NavLink></li>
                            <li className='hover:text-[#00c58e]'><NavLink>Contact</NavLink></li>
                        </ul>
                    </div>

                
                    <button onClick={() => setOpen(true)} className="btn bg-[#1b1f2a] outline-none text-white lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>

            
            {open && (
                <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex justify-end lg:hidden">
                    <div className="w-3/4 sm:w-1/2 md:w-1/3 bg-[#1b1f2a] text-white p-6 shadow-lg">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-semibold">Menu</h2>
                            <button onClick={() => setOpen(false)} className="text-white text-2xl">&times;</button>
                        </div>
                        <ul className="space-y-10 text-center">
                            <li className='hover:text-[#00c58e]'><NavLink>Home</NavLink></li>
                            <li className='hover:text-[#00c58e]'><NavLink>About</NavLink></li>
                            <li className='hover:text-[#00c58e]'><NavLink>My Skill</NavLink></li>
                            <li className='hover:text-[#00c58e]'><NavLink>Project</NavLink></li>
                            <li className='hover:text-[#00c58e]'><NavLink>Contact</NavLink></li>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;
