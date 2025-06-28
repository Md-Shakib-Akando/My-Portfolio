import React from 'react';
import Animation from '../assets/Animation - 1751063058275.json';
import Lottie from 'lottie-react';

const About = () => {
  return (
    <div id='about' className=' bg-[#2d3340] py-16'>
      <div className='max-w-11/12 mx-auto'>
        <div className='flex flex-col-reverse lg:flex-row md:justify-between items-center gap-8'>
          
         
          <div className='w-full md:w-1/3 flex justify-center'>
            <Lottie
              animationData={Animation}
              loop={true}
              className='w-full h-auto max-h-[400px]'
            />
          </div>

          
          <div className='text-white text-center lg:text-left lg:w-2/3'>
            <h2 className='text-3xl md:text-4xl font-bold mb-4 border-b-2 border-b-[#00c58e] pb-3 w-fit mx-auto lg:mx-0'>About Me</h2>
            <p className='text-base md:text-lg leading-relaxed'>
              I started my programming journey in 2023, gradually building my skills and passion for the field. Over time, I have developed strong expertise in frontend development, mastering tools and technologies like HTML, CSS, JavaScript, React, and Tailwind CSS. In addition, I’ve gained solid knowledge in programming languages such as C and C++.I’ve also begun exploring backend technologies. As a university student, I actively take part in hackathons and programming contests, where I enjoy solving challenges and learning through teamwork. I particularly value collaborative environments that offer opportunities to grow and share ideas. Outside of coding, I have a deep interest in sports—especially cricket and football—which keep me active and help me stay focused and disciplined in both life and work.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;
