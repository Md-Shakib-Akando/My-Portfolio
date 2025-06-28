import React from 'react';
import { Outlet } from 'react-router';
import Navbar from './shared/Navbar';
import Footer from './shared/Footer';

const RootLayOut = () => {
    return (
        <>
            <div className='bg-[#262c3a] '>
                <Navbar></Navbar>
                <Outlet></Outlet>
                <Footer></Footer>
            </div>
        </>
    );
};

export default RootLayOut;