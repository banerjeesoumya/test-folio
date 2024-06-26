/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import WorkGif from '../assets/Work.gif'; // Import your Work.gif
import CodingGif from '../assets/coding.gif';
import Nav from './Nav'; // Import the Nav component
import Projects from './Projects'; // Import the Projects component
import About from './About'; // Import the About component
import Contact from './Contact';

const Home = () => {
  return (
    <div className="relative">
      <Nav />

      <section className="h-full flex items-center justify-between text-white px-4 py-20">
        {/* Greeting Text */}
        <div className="max-w-4xl">
          <div className='flex space-0'>
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold px-6 mb-4">
                Hello, I'm Soumya Banerjee.
              </h2>
            </div>
            <div>
              <img width={40} height={40} src="/Wave Hands.gif" alt="" />
            </div>
          </div>
          <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed font-serif font-light px-6 py-3 mb-4">
           Aspiring Software Developer
          </p>
          <div className='mb-10 px-6'>
            <p className="text-sm sm:text-lg lg:text-md italic leading-relaxed font-serif font-light text-green-100">
              From <span className='transition-duration-300 ease-in-out transform hover:text-violet-400 colors'>pixels</span> to <span className='transition-duration-300 ease-in-out transform hover:text-violet-400 colors'>algorithms</span>, bridging the gap between ideas and innovation
            </p>
          </div>

          {/* Work Profiles Section */}
          <div className="flex items-center justify-between max-w-4xl lg:w-1/2 px-6 mb-4">
            <p className="text-lg sm:text-xl lg:text-2xl font-serif font-bold">
              My Work Profiles
            </p>
          </div>
            <div className="flex items-center space-x-4 px-6 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                className="bi bi-github cursor-pointer transition duration-300 ease-in-out transform hover:scale-125 hover:text-violet-400 colors"
                viewBox="0 0 16 16"
                onClick={() => window.open("https://github.com/banerjeesoumya")}
              >
                <path
                  fillRule="evenodd"
                  d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"
                />
              </svg>
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAACgklEQVR4nGNgIBH4GEtyGWrJvFNTU/lvbyx5goGawMJChlNPQ/azurrafxDWVFP4TTPD1dRU/zubSi2miuEqKgzsepqyH2GGg7CtkdQ2ahr+CdlwL2uZvVQzXFcD1fCWNM3/L9db/3ux2vjw//3yHJQZrokaLI0pmv9fbbCB45drTV/dWmzGR475bLoaciiGp/orvXm5xmj/i9Um919tsEa25MXLVVo8JBou+wHZcDcL6UPICp6v0i97tR7JkjWmz/6v0mIjy3AvK5kj2BQ+X2WY+3K91T+4Jav1Gwiarq8p+xrZcD9bmeP41L9Yo5/2cp3Vv5frLf8+X21sjtdwRxOJJciGBzjInCboIgYGhrurjPn/L9LjJqhQQ1X+F8xwd0vZ2wxUBmyqqirQIkD5/8w0Bi5kyS0bNjhu3rjh/eaNG/4Tgf9s3rBhDorpHBwcsiIiwv9BWE9N5A+67cuWLN60ZNHC/8TjBb/QzWAU5uf4z87O9p+fl/1/ko+QG4oFyxaZL5o/787C+fMeE4MXL144GSOMLDS5P4AsAGFLTe5fnUnCUhQGOypwNeGLEOBjB1sAwra6PD/rQ7kkCOm7OUu28eZs+WqiLHEy5FvIzYViyY/KCG5xXOrvzpY7/HyJ/H8QvjNTNp0oSxz1eZYjW2Kjy/0jN5RHFF3dvblyJ2GGg/CN2bLhRFkA9okBz0pkS+z0eH6c6pbRAcndmCkpcm+ezFVkw2/Pkp3LQCpw1udejWzJ2Ymy/x4vlPvxdLHcP2TDb82WXUSy4TDgasy7UlqU43+wDd//Z4sRhoLwM0oNh4Ebs6Sd7s6Tu/F4gdwfkCWPF8n9vT9P9uH12TJRxBgAABE1rBTkH+ppAAAAAElFTkSuQmCC"
                alt="LeetCode icon"
                className="h-8 w-8 rounded-full cursor-pointer transition duration-300 ease-in-out transform hover:scale-125"
                onClick={() => window.open("https://leetcode.com/u/the_dark_sunshine/")}
              />
            </div>
          </div> 

          {/* Right Content */}
          <div className="hidden lg:flex lg:max-w-lg lg:ml-auto">
            <img
              src={WorkGif}
              alt="Work GIF"
              className="max-w-full rounded-lg shadow-xl"
              style={{ maxWidth: '500px' }}
            />
          </div>
      </section>
      

      <Contact/>

      <About id="about" />

      {/* About Section */}
      

      {/* Projects Section */}
      <Projects id="projects" /> {/* Ensure the ID is set here */}
    </div>
  );
};

export default Home;



