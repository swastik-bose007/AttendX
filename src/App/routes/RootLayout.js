import React, { useState, useEffect } from 'react';
import Navbar from '../layouts/Navbar';
import Footer from '../layouts/Footer';
import { Outlet } from 'react-router-dom';

const RootLayout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}

export default RootLayout