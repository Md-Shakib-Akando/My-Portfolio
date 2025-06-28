import React from 'react';
import { Link } from 'react-router';
import Hackathon from '../assets/Achivement/Screenshot 2025-06-28 205108.png';
import Programming from '../assets/Achivement/Screenshot 2025-06-28 204748.png';
import Spoken from '../assets/Achivement/Screenshot 2025-06-28 204901.png';
import Hc from '../assets/Achivement/Screenshot 2025-06-28 204823.png';
import Hp from '../assets/Achivement/Screenshot 2025-06-28 204847.png';

const Achievement = () => {
    return (
        <div className='py-10 bg-[#2d3340]'>
            <div className='max-w-11/12 mx-auto '>
            <h2 className="text-3xl my-10 text-white font-bold   border-b-2 border-b-[#00c58e] pb-3 w-fit mx-auto ">
                My Achievement
            </h2>
            <div className='flex flex-col justify-center items-center  lg:flex-row flex-wrap gap-6'>
                <div className="max-w-xs relative group rounded-md shadow-md overflow-hidden">
                    <img
                        src={Programming}
                        alt="Programming"
                        className="object-cover object-center w-full h-72 rounded-md transition-transform duration-300 group-hover:scale-105"
                    />

                    
                    <div className="absolute inset-0 bg-black/60  flex flex-col justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="transform translate-y-10 group-hover:translate-y-0 transition-all duration-500 ease-in-out text-center">
                            <p className="text-lg font-semibold mb-2">PUB CSE Programming Contest 2024</p>
                            <Link className="underline text-sm cursor-pointer">View</Link>
                        </div>
                    </div>
                </div>
                <div className="max-w-xs relative group rounded-md shadow-md overflow-hidden">
                    <img
                        src={Hackathon}
                        alt="Hackathon"
                        className="object-cover object-center w-full h-72 rounded-md transition-transform duration-300 group-hover:scale-105"
                    />

                    
                    <div className="absolute inset-0 bg-black/60  flex flex-col justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="transform translate-y-10 group-hover:translate-y-0 transition-all duration-500 ease-in-out text-center">
                            <p className="text-lg font-semibold mb-2">PUB CSE Hackathon Contest 2024</p>
                            <Link className="underline text-sm cursor-pointer">View</Link>
                        </div>
                    </div>
                </div>
                <div className="max-w-xs relative group rounded-md shadow-md overflow-hidden">
                    <img
                        src={Spoken}
                        alt="Spoken"
                        className="object-cover object-center w-full h-72 rounded-md transition-transform duration-300 group-hover:scale-105"
                    />

                    
                    <div className="absolute inset-0 bg-black/60  flex flex-col justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="transform translate-y-10 group-hover:translate-y-0 transition-all duration-500 ease-in-out text-center">
                            <p className="text-lg font-semibold mb-2">Spoken English certificate </p>
                            <Link className="underline text-sm cursor-pointer">View</Link>
                        </div>
                    </div>
                </div>
                <div className="max-w-xs relative group rounded-md shadow-md overflow-hidden">
                    <img
                        src={Hc}
                        alt="Hacker Rank css"
                        className="object-cover object-center w-full h-72 rounded-md transition-transform duration-300 group-hover:scale-105"
                    />

                    
                    <div className="absolute inset-0 bg-black/60  flex flex-col justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="transform translate-y-10 group-hover:translate-y-0 transition-all duration-500 ease-in-out text-center">
                            <p className="text-lg font-semibold mb-2">HackerRank CSS</p>
                            <Link className="underline text-sm cursor-pointer">View</Link>
                        </div>
                    </div>
                </div>
                <div className="max-w-xs relative group rounded-md shadow-md overflow-hidden">
                    <img
                        src={Hp}
                        alt="HackerRank problem solving"
                        className="object-cover object-center w-full h-72 rounded-md transition-transform duration-300 group-hover:scale-105"
                    />

                    
                    <div className="absolute inset-0 bg-black/60  flex flex-col justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="transform translate-y-10 group-hover:translate-y-0 transition-all duration-500 ease-in-out text-center">
                            <p className="text-lg font-semibold mb-2">HackerRank problem solving</p>
                            <Link className="underline text-sm cursor-pointer">View</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Achievement;