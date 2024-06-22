/* eslint-disable no-unused-vars */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-scroll'; // Import Link from react-scroll

const Nav = () => {
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 left-0 right-0 bg-transparent text-white font-mono p-4 z-50">
      <div className="flex sm:justify-between items-center w-full">
        <div className="pl-20  flex-grow flex justify-center">
          <ul className="flex space-x-6">
            <li className='text-sm sm:text-xl lg:text-xl leading-relaxed font-mono font-light cursor-pointer transition duration-300 ease-in-out transform hover:scale-125 hover:text-violet-400 colors'>
              <a href="#" className=''>Home</a>
            </li>
            <li className='text-sm sm:text-xl lg:text-xl leading-relaxed font-mono font-light cursor-pointer transition duration-300 ease-in-out transform hover:scale-125 hover:text-violet-400 colors'>
              <Link
                to="about" // Specify the target element's id here
                spy={true}
                smooth={true}
                duration={500}
                className=''
              >
                About
              </Link>
            </li>
            <li className='text-sm sm:text-xl lg:text-xl leading-relaxed font-mono font-light cursor-pointer transition duration-300 ease-in-out transform hover:scale-125 hover:text-violet-400 colors'>
              <Link
                to="projects" // Specify the target element's id here
                spy={true}
                smooth={true}
                duration={500}
                className=''
              >
                Projects
              </Link>
            </li>
            <li className='text-sm lg:text-xl leading-relaxed font-mono font-light cursor-pointer transition duration-300 ease-in-out transform hover:scale-125 hover:text-violet-400 colors'>
              <a href="https://drive.google.com/file/d/1jPnr_6mMvCRrH0w4uPzoE8vYV8JmWVVT/view?usp=sharing" target='__blank' className='pr-2'>Download Resume</a>
            </li>
            
          </ul>
          {/* <div>
          <ul className="flex justify-end">
          
          </ul>
        </div> */}
        </div>
        
      </div>
    </nav>
  );
};

export default Nav;
