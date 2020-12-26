import React from 'react';
import '../App.css';
import data from '../data/app-data.json';


function Footer(props) {
    return (<div className="footer-bar">
    
                <div>{data[props.language].copyright}<br />{data[props.language].adress}</div>
            
            </div>);
}

export default Footer;


    
  