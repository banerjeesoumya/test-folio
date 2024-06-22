/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Projects from './components/Projects'; // Replace with your Projects component
import Contact from './components/Contact'; // Replace with your Contact component
import NotFound from './components/NotFound'; // Replace with your NotFound component

import main_bg from './assets/main_bg.png'; // Import your background image

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-cover bg-center bg-no-repeat" >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
