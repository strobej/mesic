import React, { useState } from 'react';
import Modal from 'react-modal'
import '../App.css';
import data from '../data/app-data.json';


Modal.setAppElement('#root') 

function Content(props) {
const [modalIsOpen, setModalIsOpen] = useState(false)

    return(<div className="content-container">

        <button id="myBtn" onClick={() => setModalIsOpen(true)}>{data.[props.language].civil}</button>
       
        <Modal isOpen={modalIsOpen}>
            <h2>Modal {data.[props.language].title}</h2>
            <p>{data.[props.language].civiltext}</p>

            <div>
              <button onClick={() => setModalIsOpen(false)}>Zatvori</button>
            </div>
        </Modal>

           <button id="myBtn">Trgovačko pravo</button> 
           <button id="myBtn">Izvršno pravo</button> 
           <button id="myBtn">Radno pravo</button> 
           <button id="myBtn">Statusno pravo</button> 
           <button id="myBtn">Porodično pravo</button> 
           <button id="myBtn">Međunarodno javno i privatno pravo</button> 
    
    </div>

    );
}


export default Content;