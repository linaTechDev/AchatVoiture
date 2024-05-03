import React, { useState } from 'react';
import Modal from 'react-modal';
import "./PanierFormCar.css"
import {FaCar, FaShoppingCart, FaTimes} from 'react-icons/fa';

const PanierFormCar = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (
        <div>
            <button className="buttonPanier" onClick={openModal}>Réserver la voiture</button>

            <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
                <div className="close-button-container">
                    <button className="close-button" onClick={closeModal}>
                        <FaTimes style={{color: 'black', fontSize: '24px'}}/>
                    </button>
                </div>
                <div>
                    <h2>Réserver une voiture</h2>
                    <div>
                        <FaShoppingCart/> Buy a Car
                    </div>

                    <div>
                        <FaCar/> Purchase
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default PanierFormCar;