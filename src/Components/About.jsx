import React from 'react';
import Animation from '../assets/Animation - 1751063058275.json';
import Lottie from 'lottie-react';

const About = () => {
  return (
    <div className='bg-[#2d3340]  pt-20 pb-40'>
      <div className='max-w-6xl mx-auto px-4 md:px-8'>
        <div className='flex flex-col md:flex-row items-center gap-8'>
          
          
          <div className='md:w-1/2 text-white text-center md:text-start'>
            <h2 className='text-3xl md:text-4xl font-bold mb-4'>About Me</h2>
            <p className='text-base md:text-lg leading-relaxed'>
              Hello! I'm a passionate web developer with a love for clean code, elegant UI, and smooth user experiences. 
              I specialize in building full-stack applications using modern tools like React, Tailwind CSS, and Firebase. 
              When I’m not coding, I enjoy learning new technologies and exploring creative design.
            </p>
          </div>

          
          <div className='md:w-1/2 w-full'>
            <Lottie animationData={Animation} loop={true} className='w-full h-auto max-h-[400px]' />
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default About;
