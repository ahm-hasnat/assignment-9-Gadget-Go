import React from 'react';
import Navbar from '../../components/Header/Navbar';
import { Outlet } from 'react-router';
import Footer from '../../components/Footer/Footer';
import { ToastContainer } from 'react-toastify';

const Root = () => {




    return (
        <div className='bg-[#e4e4e4b3]'>
              <ToastContainer/>
            <Navbar></Navbar>
            <Outlet>

            </Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;