import React, { useState } from 'react';
import './App.css';
import Header from '../src/components/Header';
import Content from '../src/components/Content';
import Footer from '../src/components/Footer';


function App() {

  const [getLang, setLang] = useState("en");
  let flag = `/${getLang}.png`;
  
  function switchLanguage(){
    if (getLang === "ba"){
      setLang("en");
    } else {
      setLang("ba");
    }
  }

  return (<div className="">
        <div className="info-container">
          <div className="info-contact"><img src="./phone.png" alt="phone"/>+387 60 320 4141<img src="./email.png" alt="email"/>amer.advokat@gmail.com</div>
          <div className="language-change" onClick={switchLanguage}><img src={flag} alt="language"/></div>
        </div>

          <Header language={getLang}/>
          <Content language={getLang}/>
          <Footer language={getLang}/>
    </div>
  );
}

export default App;
