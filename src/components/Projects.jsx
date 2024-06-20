/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React from 'react';

const Projects = () => {
  return (
    <section id='projects' className="py-12 md:py-16 lg:py-20">
    <div className="container text-white mb-4">
      <div className="mb-8 md:mb-12 lg:mb-16">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-center">Projects</h2>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 px-4">
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
          <div className="flex flex-col space-y-1.5 py-4">
            <h3 className="whitespace-nowrap text-2xl font-semibold text-center leading-none tracking-tight">PayZap</h3>
            <p className="text-sm text-muted-foreground px-4 py-2">
              A full-stack payment application where users can make secure and reliable payments.
            </p>
          </div>
          <div className="flex px-2 py-2 items-center space-x-2">
            <div
              className="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-gray-100 dark:bg-gray-800"
              data-v0-t="badge"
            >
              Express
            </div>
            <div
              className="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-gray-100 dark:bg-gray-800"
              data-v0-t="badge"
            >
              Node.js
            </div>
            <div
              className="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-gray-100 dark:bg-gray-800"
              data-v0-t="badge"
            >
              MongoDB
            </div>
            <div
              className="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-gray-100 dark:bg-gray-800"
              data-v0-t="badge"
            >
              React
            </div>
            <div
              className="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-gray-100 dark:bg-gray-800"
              data-v0-t="badge"
            >
              Tailwind CSS
            </div>
          </div>
          <div className='px-4 flex justify-between py-4 font-serif'>
          <a href="https://payzap-one.vercel.app/" target='__blank' className='flex items-center cursor-pointer transition duration-300 ease-in-out transform hover:scale-95 hover:text-violet-400 colors'>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-link-45deg  mr-2" viewBox="0 0 16 16">
              <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1 1 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4 4 0 0 1-.128-1.287z"/>
              <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z"/>
            </svg> Link
          </a>
          <a href="https://github.com/banerjeesoumya/payzap" target='__blank' className=' mr-2 flex items-center cursor-pointer transition duration-300 ease-in-out transform hover:scale-95 hover:text-violet-400 colors'>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="mr-2 h-4 w-4">
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
            <path d="M9 18c-4.51 2-5-2-7-2"></path>
          </svg> Code 
          </a>
          </div>
        </div>
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
          <div className="flex flex-col space-y-1.5 py-4">
            <h3 className="whitespace-nowrap text-2xl font-semibold text-center leading-none tracking-tight">ThoughtStream</h3>
            <p className="text-sm text-muted-foreground px-4 py-2">
              A full-stack blogging website where users can share their ideas and thoughts.
            </p>
          </div>
          <div className="flex py-2 px-2 items-center space-x-2">
            <div
              className="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-gray-100 dark:bg-gray-800"
              data-v0-t="badge"
            >
              Hono
            </div>
            <div
              className="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-gray-100 dark:bg-gray-800"
              data-v0-t="badge"
            >
              Prisma
            </div>
            <div
              className="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-gray-100 dark:bg-gray-800"
              data-v0-t="badge"
            >
              Clouflare
            </div>
            <div
              className="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-gray-100 dark:bg-gray-800"
              data-v0-t="badge"
            >
              React
            </div>
            <div
              className="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-gray-100 dark:bg-gray-800"
              data-v0-t="badge"
            >
              Tailwind CSS
            </div>
          </div>
          <div className='px-4 flex justify-between py-4 font-serif'>
          <a href="https://thought-stream-flax.vercel.app/" target='__blank' className='flex items-center cursor-pointer transition duration-300 ease-in-out transform hover:scale-95 hover:text-violet-400 colors'>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-link-45deg  mr-2" viewBox="0 0 16 16">
              <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1 1 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4 4 0 0 1-.128-1.287z"/>
              <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z"/>
            </svg> Link
          </a>
          <a href="https://github.com/banerjeesoumya/Thought-Stream" target='__blank' className=' mr-2 flex items-center cursor-pointer transition duration-300 ease-in-out transform hover:scale-95 hover:text-violet-400 colors'>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="mr-2 h-4 w-4">
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
            <path d="M9 18c-4.51 2-5-2-7-2"></path>
          </svg> Code 
          </a>
          </div>
        </div>
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
          <div className="flex flex-col space-y-1.5 py-4">
            <h3 className="whitespace-nowrap text-2xl font-semibold text-center leading-none tracking-tight">Genetic Algorithm</h3>
            <p className="text-sm text-muted-foreground px-4 py-2">
            The Genetic Algorithm is used to handle difficult Knapsack issues, with accuracy determined by the number of
            iterations.
            </p>
          </div>
          <div className="flex px-2 py-2 justify-center items-center space-x-2">
            <div
              className="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-gray-100 dark:bg-gray-800"
              data-v0-t="badge"
            >
              JAVA
            </div>
          </div>
          <div className='px-4 flex justify-center py-4 font-serif'>
          <a href="https://github.com/banerjeesoumya/Genetic-Algorithm" target='__blank' className=' mr-2 flex justify-center items-center cursor-pointer transition duration-300 ease-in-out transform hover:scale-95 hover:text-violet-400 colors'>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="mr-2 h-4 w-4">
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
            <path d="M9 18c-4.51 2-5-2-7-2"></path>
          </svg> Code 
          </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default Projects;
