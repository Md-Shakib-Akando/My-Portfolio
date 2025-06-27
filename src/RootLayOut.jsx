import React from 'react';
import { Outlet } from 'react-router';
import Navbar from './shared/Navbar';

const RootLayOut = () => {
    return (
        <>
            <div className='bg-[#262c3a] '>
                <Navbar></Navbar>
                <Outlet></Outlet>
            </div>
        </>
    );
};

export default RootLayOut;