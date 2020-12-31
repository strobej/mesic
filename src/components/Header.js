import React from 'react';
import '../App.css';
import data from '../data/app-data.json';


function Header(props) {

    return (<div className="nav-bar">
        <div className="header-container">
            <div className="header-first">
                <p className="info-name">Amer Mešić</p>
                <p className="info-title">{data[props.language].office}</p>
            </div>
        </div>        
    </div>);
}


export default Header;