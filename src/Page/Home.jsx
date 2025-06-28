import React from 'react';
import Banner from '../Components/Banner';
import About from '../Components/About';
import Skill from '../Components/Skill';
import Education from '../Components/Education';
import Project from '../Components/Project';
import Achievement from '../Components/Achievement';
import Contact from '../Components/Contact';

const Home = () => {
    return (
        <>
        <Banner></Banner>
        
        <About></About>
        <Skill></Skill>
        <Education></Education>
        <Project></Project>
        <Achievement></Achievement>
        
        <Contact></Contact>
        </>
    );
};

export default Home;