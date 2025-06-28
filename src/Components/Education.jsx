import React from 'react';

const Education = () => {
    return (
         <section className="py-20 bg-[#2d3340]">
        <div className="container text-white mx-auto px-6" >
          <div className="  text-center mb-16" >
            <h2 className="text-3xl font-bold  mb-4 border-b-2 border-b-[#00c58e] pb-3 w-fit mx-auto ">
               Education Qualification
            </h2>
           
          </div>

          <div className="relative">
            
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#00c58e]"></div>

            
            <div className="relative mb-8 md:mb-0" >
              <div  className="flex flex-col md:flex-row items-center">
                <div  className="md:w-1/2 md:pr-5 lg:pr-16 mb-8 md:mb-0 md:text-right order-2 md:order-1">
                  <h3 className=" text-lg lg:text-xl text-center md:text-end font-bold   mb-3">
                   
                    Pundra University of Science & Technology,Bogura
                  </h3>
                  <p className="text-center md:text-end">
                     B.Sc in Computer Science and Engineering
                  </p>
                  <p className="text-center md:text-end">
                     2024-2027(expected)
                  </p>
                </div>
                <div className="md:w-1/2 flex justify-center md:justify-start order-1 md:order-2">
                  <div className="relative">
                    
                  </div>
                </div>
              </div>
            </div>

           
            <div className="relative mb-8 md:mb-0 md:mt-24" >
              <div  className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 flex justify-center md:justify-end order-1">
                  <div className="relative">
                    
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-5 lg:pl-16 mb-8 md:mb-0 md:text-left order-2">
                  <h3 className="text-lg lg:text-xl text-center md:text-start font-bold   mb-3">
                   
                    Shibganj Govt MH College,Bogura
                  </h3>
                  <p className="text-center md:text-start">
                     Higher Secondary Certificate in  Science Background
                  </p>
                  <p className="text-center md:text-start">
                     2022
                  </p>
                </div>
              </div>
            </div>

           
            
          </div>
        </div>
      </section>
    );
};

export default Education;