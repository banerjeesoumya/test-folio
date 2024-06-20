/* eslint-disable no-unused-vars */
import React from 'react';

const NotFound = () => {
  return (
    <section id="not-found" className="h-screen flex items-center justify-center text-white">
      <div className="text-center">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 leading-tight tracking-tight">404 - Not Found</h1>
        <p className="text-3xl sm:text-4xl lg:text-5xl mb-8 leading-relaxed">The page you are looking for does not exist.</p>
      </div>
    </section>
  );
};

export default NotFound;
