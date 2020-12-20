import React, { useState } from 'react';
import Modal from 'react-modal'
import '../App.css';
import data from '../data/app-data.json';


Modal.setAppElement('#root') 

function Content(props) {
const [modalIsOpen, setModalIsOpen] = useState(false)
const [getTitle, setTitle] = useState("");
const [getContent, setContent] = useState("");

    return(<div className="content-container">

        <button id="myBtn" onClick={() => {setTitle("civil"); setContent("civiltext"); setModalIsOpen(true)}}>{data[props.language].civil}</button>
       
        <button id="myBtn">Trgovačko pravo</button> 
        <button id="myBtn">Izvršno pravo</button> 
        <button id="myBtn">Radno pravo</button> 
        <button id="myBtn">Statusno pravo</button> 
        <button id="myBtn">Porodično pravo</button> 
        <button id="myBtn">Međunarodno javno i privatno pravo</button> 
        
        <Modal isOpen={modalIsOpen}>
            <h2>Modal {data[props.language][getTitle]}</h2>
            <p>{data[props.language][getContent]}</p>

            <div>
              <button onClick={() => setModalIsOpen(false)}>Zatvori</button>
            </div>
        </Modal>
    </div>

    );
}


export default Content;