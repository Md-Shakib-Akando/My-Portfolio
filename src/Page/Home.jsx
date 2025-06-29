import React from 'react';
import Banner from '../Components/Banner';
import About from '../Components/About';
import Skill from '../Components/Skill';
import Education from '../Components/Education';
import Project from '../Components/Project';
import Achievement from '../Components/Achievement';
import Contact from '../Components/Contact';
import {  Fade,  Zoom } from "react-awesome-reveal";

const Home = () => {
    return (
        <>
            <Fade duration={2000} triggerOnce >
                <Banner />
            </Fade>
            <Fade duration={2000} triggerOnce >
                 <About />
            </Fade>

            
           

            <Zoom duration={2000} triggerOnce >
                <Skill />
            </Zoom>
            <Fade duration={2000} triggerOnce fraction={0.1}>
                <Education />
            </Fade>

            <Fade duration={2000} triggerOnce fraction={0.1}>
                <Project />
            </Fade>

            
             <Achievement />

            <Zoom duration={1000} triggerOnce>
                <Contact />
            </Zoom>









        </>
    );
};

export default Home;