import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen bg-[url('/background.jpg')] bg-cover bg-center flex flex-col justify-center items-center text-white text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to Plantify</h1>
      <p className="max-w-md mb-6">We are dedicated to bringing the best indoor and outdoor plants right to your doorstep. Green your space with ease.</p>
      <button onClick={() => navigate('/products')} className="bg-green-500 px-6 py-2 rounded text-white hover:bg-green-700">Get Started</button>
    </div>
  );
};

export default LandingPage;
