import React from 'react';
import Banner from '../Components/Banner';
import About from '../Components/About';
import Skill from '../Components/Skill';
import Education from '../Components/Education';
import Project from '../Components/Project';

const Home = () => {
    return (
        <>
        <Banner></Banner>
        
        <About></About>
        <Skill></Skill>
        <Education></Education>
        <Project></Project>
        
        </>
    );
};

export default Home;