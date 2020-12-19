import React, { useState } from 'react';
import './App.css';
import Header from '../src/components/Header';
import Content from '../src/components/Content';
import Footer from '../src/components/Footer';


function App() {

  return (<div className="">
        <div className="info-container">
          <div className="info-contact">+387 33 234 556  Skenderija br.5</div>
          <a href="">Jezik</a>
        </div>
          <Header />

          <Content />

          <Footer />
    </div>
  );
}

export default App;
