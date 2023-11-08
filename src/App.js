import React from 'react';

import { Article, Brand, Cta, Navbar } from './components';
import { Header, Footer, Blog, Features, WhatGPT3, Possibility } from './containers';
import './App.css';
const App = () => (
  <div className="App">
    <div className='gradient__bg'>
      <Navbar />
      <Header />
    </div>
    <Brand />
    <WhatGPT3 />
    <Features />
    <Possibility />
    <Cta /> 
    <Blog />
    <Footer />
  </div>
);

export default App;