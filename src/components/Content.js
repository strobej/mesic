import React, { useState } from 'react';
import Modal from 'react-modal'
import '../App.css';
import data from '../data/app-data.json';


Modal.setAppElement('#root') 

function Content(props) {
const [modalIsOpen, setModalIsOpen] = useState(false)

    return(<div className="content-container">

        <button id="myBtn" onClick={() => setModalIsOpen(true)}>Građansko pravo</button>
       
        <Modal isOpen={modalIsOpen}>
            <h2>Modal {data.[props.language].title}</h2>
            <p>Modal Body</p>

            <div>
              <button onClick={() => setModalIsOpen(false)}>Zatvori</button>
            </div>
        </Modal>



           <button id="myBtn">Građansko pravo</button> 
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