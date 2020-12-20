import React, { useState } from 'react';
import './App.css';
import Header from '../src/components/Header';
import Content from '../src/components/Content';
import Footer from '../src/components/Footer';


function App() {

  const [getLang, setLang] = useState("ba");

  function switchLanguage(){
    if (getLang === "ba"){
      setLang("en");
    } else {
      setLang("ba");
    }
  }

  return (<div className="">
        <div className="info-container">
          <div className="info-contact">+387 33 234 556  Skenderija br.5</div>
          <div onClick={switchLanguage}>Jezik</div>
        </div>

          <Header language={getLang}/>
          <Content language={getLang}/>
          <Footer language={getLang}/>
    </div>
  );
}

export default App;
