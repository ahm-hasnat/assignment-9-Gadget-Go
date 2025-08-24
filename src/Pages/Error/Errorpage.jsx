import React from 'react';
import { useNavigate } from 'react-router';
import { FaArrowLeft } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';

const Errorpage = () => {
  const navigate = useNavigate();

  const handleHomeRedirect = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <Helmet>
          <title>GadgetGo-error</title>
        </Helmet>
      <div className=" text-center p-6">
      

        <h1 className="text-[100px] font-extrabold text-primary mt-1">404</h1>
         <img 
          src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif" 
          alt="404 Illustration" 
          className="mx-auto w-48 h-48 object-contain"
        />
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mt-2">Oops! Page not found</h2>
        <p className="text-gray-500 mt-4">
          The page you’re looking for doesn’t exist or has been moved.
        </p>
        <button
          onClick={handleHomeRedirect}
          className="mt-6 px-5 py-3 bg-[#585379] text-white font-semibold rounded-md hover:bg-[#393651b0] flex items-center gap-2 mx-auto"
        >
          <FaArrowLeft /> Return Home
        </button>
      </div>
    </div>
  );
};

export default Errorpage;
