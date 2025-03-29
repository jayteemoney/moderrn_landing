import React from 'react'
import './App.css';
import {Blog, Features, Footer, Head, Possibility, WhatGPT3} from './containers'
import { Cta, Brand, Navbar} from './components'

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Head />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility/>
      <Cta />
      <Blog />
      <Footer />

    </div>
  );
};

export default App;
