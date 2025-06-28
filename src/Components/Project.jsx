import React from 'react';
import ProjectImg1 from '../assets/ProjectImg/Screenshot 2025-06-28 185817.png'
import ProjectImg2 from '../assets/ProjectImg/Screenshot 2025-06-28 185946.png'
import ProjectImg3 from '../assets/ProjectImg/Screenshot 2025-06-28 185855.png'
import { Link } from 'react-router';
import { SiDaisyui, SiExpress, SiFirebase, SiMongodb, SiReact, SiTailwindcss, SiVite } from 'react-icons/si';
const Project = () => {
    return (
        <section className="p-4 lg:p-8  ">
            <h2 className="text-3xl my-10 text-white font-bold   border-b-2 border-b-[#00c58e] pb-3 w-fit mx-auto ">
                My Project
            </h2>
            <div className="container text-white mx-auto space-y-12">
                <div className="flex flex-col lg:gap-5 xl:gap-9 overflow-hidden rounded-md border-1 p-3 border-[#00c58e] shadow-md shadow-[#00c58e] lg:flex-row">
                    <div className='flex flex-1 justify-center  lg:justify-start overflow-hidden rounded-md'>
                        <img src={ProjectImg1} alt="" className="w-full h-70 md:h-90 rounded-md transition-transform duration-300 ease-in-out hover:scale-110 aspect-video hover:cursor-pointer" />
                    </div>
                    <div className="flex  flex-col justify-center lg:justify-start flex-1 p-6 pl-0 ">

                        <h3 className="text-3xl font-bold">RentifyCars</h3>
                        <p className="my-6 ">RentifyCars is a modern, user-friendly car rental platform designed to make the car booking process smooth and secure for both customers and rental service providers.</p>
                        <p className='font-bold'>Technology :</p>
                        <div className='flex gap-4 my-3'>
                            <SiVite size={28} className='text-[#646CFF]'></SiVite>
                            <SiReact size={28} className='text-[#61DBFB]'></SiReact>
                            <SiTailwindcss size={28} className='text-[#38BDF8]'></SiTailwindcss>
                            <SiDaisyui size={28} className='text-[#FF69B4]'></SiDaisyui>
                            <SiFirebase size={28} className='text-[#FFCA28]'></SiFirebase>
                            <SiExpress size={28} className=''> </SiExpress>
                            <SiMongodb size={28} className='text-[#47A248]'></SiMongodb>
                        </div>
                        

                        <div className='flex  flex-wrap gap-3 mt-6 lg:gap-4'>
                            <Link to='/details'><button className='btn  text-white shadow-none bg-[#00c58e] border-[#00c58e] hover:text-[#00c58e] hover:bg-[#1b1f2a]'>Details</button></Link>
                            <Link to={'https://rentifycars-8a487.web.app/'}><button className='btn  text-white shadow-none bg-[#00c58e] border-[#00c58e] hover:text-[#00c58e] hover:bg-[#1b1f2a]'>Live Demo</button></Link>
                            <Link to={'https://github.com/Md-Shakib-Akando/RentifyCar-Client-side'}><button className='btn  text-white shadow-none bg-[#00c58e] border-[#00c58e] hover:text-[#00c58e] hover:bg-[#1b1f2a]'>Client side</button></Link>
                            <Link to={'https://github.com/Md-Shakib-Akando/Rentify-Cars-server-side'}><button className='btn  text-white shadow-none bg-[#00c58e] border-[#00c58e] hover:text-[#00c58e] hover:bg-[#1b1f2a]'>Server Side</button></Link>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col lg:gap-5 xl:gap-9 overflow-hidden rounded-md  border-1 p-3 border-[#00c58e] shadow-md shadow-[#00c58e] lg:flex-row-reverse ">
                    <div className='flex justify-center lg:justify-start overflow-hidden rounded-md flex-1'>
                        <img src={ProjectImg2} alt="" className="w-full h-70 md:h-90 rounded-md transition-transform duration-300 ease-in-out hover:scale-110 aspect-video hover:cursor-pointer" />
                    </div>
                    <div className="flex  flex-col justify-center lg:justify-start flex-1 p-6 pl-3 ">

                        <h3 className="text-3xl font-bold">Plant Care</h3>
                        <p className="my-6 ">A full-stack web application designed to help users manage their indoor and outdoor plants. And detailed plant care info, it's your smart assistant for keeping your greenery healthy. </p>
                        <p className='font-bold'>Technology :</p>
                        <div className='flex gap-4 my-3'>
                            <SiVite size={28} className='text-[#646CFF]'></SiVite>
                            <SiReact size={28} className='text-[#61DBFB]'></SiReact>
                            <SiTailwindcss size={28} className='text-[#38BDF8]'></SiTailwindcss>
                            <SiDaisyui size={28} className='text-[#FF69B4]'></SiDaisyui>
                            <SiFirebase size={28} className='text-[#FFCA28]'></SiFirebase>
                            <SiExpress size={28} className=''> </SiExpress>
                            <SiMongodb size={28} className='text-[#47A248]'></SiMongodb>
                        </div>
                        

                        <div className='flex flex-wrap gap-3 mt-6 lg:gap-4'>
                            <Link to='/details'><button className='btn  text-white shadow-none bg-[#00c58e] border-[#00c58e] hover:text-[#00c58e] hover:bg-[#1b1f2a]'>Details</button></Link>
                            <Link to={'https://plants-care-cb29c.web.app/'}><button className='btn  text-white shadow-none bg-[#00c58e] border-[#00c58e] hover:text-[#00c58e] hover:bg-[#1b1f2a]'>Live Demo</button></Link>
                            <Link to={'https://github.com/Md-Shakib-Akando/Plant-care-client-side'}><button className='btn  text-white shadow-none bg-[#00c58e] border-[#00c58e] hover:text-[#00c58e] hover:bg-[#1b1f2a]'>Client side</button></Link>
                            <Link to={'https://github.com/Md-Shakib-Akando/Plant-care-server-side'}><button className='btn  text-white shadow-none bg-[#00c58e] border-[#00c58e] hover:text-[#00c58e] hover:bg-[#1b1f2a]'>Server Side</button></Link>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col lg:gap-5 xl:gap-9 overflow-hidden rounded-md border-1 p-3 border-[#00c58e] shadow-md shadow-[#00c58e] lg:flex-row">
                    <div className='flex lg:flex-1 justify-center lg:justify-start overflow-hidden rounded-md'>
                        <img src={ProjectImg3} alt="" className="w-full h-70 md:h-90 rounded-md transition-transform duration-300 ease-in-out hover:scale-110 aspect-video hover:cursor-pointer" />
                    </div>
                    <div className="flex  flex-col justify-center lg:justify-start flex-1 p-6 pl-0 ">

                        <h3 className="text-3xl font-bold">Job Track</h3>
                        <p className="my-6 ">JobTrack is designed to connect job seekers with employers in a simple, user-friendly interface. It aims to streamline the job search and hiring process by offering tools for posting, searching, and managing job applications.</p>
                        <p className='font-bold'>Technology :</p>
                        <div className='flex gap-4 my-3'>
                            <SiVite size={28} className='text-[#646CFF]'></SiVite>
                            <SiReact size={28} className='text-[#61DBFB]'></SiReact>
                            <SiTailwindcss size={28} className='text-[#38BDF8]'></SiTailwindcss>
                            <SiDaisyui size={28} className='text-[#FF69B4]'></SiDaisyui>
                            <SiFirebase size={28} className='text-[#FFCA28]'></SiFirebase>
                            
                            
                        </div>
                        

                        <div className='flex flex-wrap gap-3 mt-6 lg:gap-4'>
                            <Link to='/details'><button className='btn  text-white shadow-none bg-[#00c58e] border-[#00c58e] hover:text-[#00c58e] hover:bg-[#1b1f2a]'>Details</button></Link>
                            <Link to={'https://job-track-dbb6a.web.app/'}><button className='btn  text-white shadow-none bg-[#00c58e] border-[#00c58e] hover:text-[#00c58e] hover:bg-[#1b1f2a]'>Live Demo</button></Link>
                            <Link to={'https://github.com/Md-Shakib-Akando/Job-Track-WebApp'}><button className='btn  text-white shadow-none bg-[#00c58e] border-[#00c58e] hover:text-[#00c58e] hover:bg-[#1b1f2a]'>Github Repo</button></Link>
                            
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Project;