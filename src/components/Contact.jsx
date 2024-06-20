/* eslint-disable no-unused-vars */
import React from 'react';

const Contact = () => {
  return (
    <div className='text-white px-8'>
      <p className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold mb-4">
        Contact Me
      </p>

      {/* SVG Icons */}
      <div className="flex items-center space-x-5 py-2 px-1 mt-3">

        <a href="mailto:rick01.lm10@gmail.com">
          <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mr-1 cursor-pointer transition duration-300 ease-in-out transform hover:scale-125 hover:text-violet-400 colors">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
          </svg>
        </a>
        
        {/* LinkedIn */}
        <a href="https://www.linkedin.com/in/banerjee-soumya/" target='__blank'>
          <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-linkedin mr-1 cursor-pointer transition duration-300 ease-in-out transform hover:scale-125 hover:text-violet-400 colors" viewBox="0 0 16 16">
            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
          </svg>
        </a>

        {/* Twitter */}
        <a href="https://twitter.com/drk_sunshne" target='__blank'>
          <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-twitter mr-4 cursor-pointer transition duration-300 ease-in-out transform hover:scale-125 hover:text-violet-400 colors" viewBox="0 0 16 16">
            <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Contact;
