import React from 'react';
import heroImage from './assets/bg.webp';

const Hero = () => {
  return (
    <section
      className="relative bg-cover bg-center h-screen"
      style={{ backgroundImage: `url(${heroImage})` , backgroundSize:'cover' }} // Replace with a high-resolution image URL
    >
      <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
        <div className="text-center text-white px-6 md:px-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Revolutionize Your Investments
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Join the future of finance with our decentralized investment platform. Propose and invest in exciting opportunities with full transparency and security.
          </p>
          <a
            href="#get-started"
            className="hover:bg-blue-600 text-white py-2 px-6 rounded-lg text-lg font-semibold transition duration-300"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
