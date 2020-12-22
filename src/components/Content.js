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

        <button id="service-btn" onClick={() => {setTitle("civil"); setContent("civiltext"); setModalIsOpen(true)}}>{data[props.language].civil}</button>
        <button id="service-btn" onClick={() => {setTitle("commercial"); setContent("commercialtext"); setModalIsOpen(true)}}>{data[props.language].commercial}</button>
        <button id="service-btn" onClick={() => {setTitle("enforcement"); setContent("enforcementtext"); setModalIsOpen(true)}}>{data[props.language].enforcement}</button>
        <button id="service-btn" onClick={() => {setTitle("labor"); setContent("labortext"); setModalIsOpen(true)}}>{data[props.language].labor}</button>
        <button id="service-btn" onClick={() => {setTitle("status"); setContent("statustext"); setModalIsOpen(true)}}>{data[props.language].status}</button>
        <button id="service-btn" onClick={() => {setTitle("family"); setContent("familytext"); setModalIsOpen(true)}}>{data[props.language].family}</button>
        <button id="service-btn" onClick={() => {setTitle("international"); setContent("internationaltext"); setModalIsOpen(true)}}>{data[props.language].international}</button>
    
        <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} className="mymodal">
            <h2>{data[props.language][getTitle]}</h2>
            <p>{data[props.language][getContent]}</p>

            <div>
              <button className="close-btn" onClick={() => {setTitle("close"); setModalIsOpen(false)}}>{data[props.language].close}</button>
            </div>
        </Modal>
    </div>

    );
}


export default Content;