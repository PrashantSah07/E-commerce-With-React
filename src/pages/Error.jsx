import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-800">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="text-xl mt-4">Oops! Page not found.</p>
      <Link to='/' className='mt-6 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600'>Go Home</Link>
    </div >
  );
};

export default Error;
