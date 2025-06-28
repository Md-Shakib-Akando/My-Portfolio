import React from 'react';
import BannerImg from '../assets/Adobe Express - file.png'
import { LuDownload } from 'react-icons/lu';
const Banner = () => {
    return (
        <div className='max-w-11/12 mx-auto'>
            <div className='flex flex-col-reverse md:flex-row  justify-between min-h-[calc(100vh-100px)]'>
                <div className='flex justify-center md:flex-1 flex-col gap-4  items-center md:items-start text-center md:text-start xl:gap-7  ml-4 py-7 lg:py-0 text-white'>
                    <h1 className='text-3xl xl:text-5xl font-bold'>Hello,<span className='text-[#00c58e]'>I'm</span></h1>
                    <h1  className='text-4xl xl:text-7xl font-bold text-[#00c58e] '>Shakib Akando</h1>
                    <h3   className=' text-3xl xl:text-5xl font-semibold '>Front-end Developer</h3>
                    <p className='text-[#a3a6ad]'>I’m currently studying Computer Science and Engineering, and I’m deeply passionate about frontend web development. I approach every project with dedication and truly enjoy putting my heart into the work I love</p>
                    
                    <a href='/public/Md_Shakib_Akando_CV.pdf' download className='btn text-[15px] w-fit md:mt-4 lg:mt-0 text-white shadow-none bg-[#00c58e] border-[#00c58e] hover:text-[#00c58e] hover:bg-[#1b1f2a]'><LuDownload></LuDownload> Download Resume</a>
                </div>
                <div className='  flex justify-center items-center md:flex-1 lg:ml-20 mt-20 md:mt-0'>
                  <img className='h-[300px] md:h-[400px] xl:h-[500px]  border-1 shadow-md shadow-[#00c58e]  border-[#00c58e] rounded-full' src={BannerImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;