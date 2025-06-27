import React from 'react';
import BannerImg from '../assets/Adobe Express - file.png'
import { LuDownload } from 'react-icons/lu';
const Banner = () => {
    return (
        <div className='max-w-11/12 mx-auto'>
            <div className='flex  justify-between min-h-[calc(100vh-100px)]'>
                <div className='flex justify-center flex-1 flex-col gap-7  ml-4 text-white'>
                    <h1 className='text-5xl font-bold'>Hello,<span className='text-[#00c58e]'>I'm</span></h1>
                    <h1  className='text-7xl font-bold text-[#00c58e] '>Shakib Akando</h1>
                    <h3   className='text-5xl font-semibold '>Front-end Developer</h3>
                    <p className='text-[#a3a6ad]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae magni quisquam eveniet, neque est sed. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, dignissimos.</p>

                    <button className='btn text-[15px] w-fit text-white shadow-none bg-[#00c58e] border-[#00c58e] hover:text-[#00c58e] hover:bg-[#1b1f2a]'><LuDownload></LuDownload> Download Resume</button>
                </div>
                <div className=' flex justify-center items-center flex-1 ml-20 '>
                  <img className='h-[600px] border-1 shadow-md shadow-[#00c58e]  border-[#00c58e] rounded-full' src={BannerImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;