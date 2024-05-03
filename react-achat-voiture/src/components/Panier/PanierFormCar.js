import React, { useState } from 'react';
import Modal from 'react-modal';
import "./PanierFormCar.css"
import {FaCar, FaShoppingCart, FaTimes} from 'react-icons/fa';

const PanierFormCar = ({onAdd}) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [dateBirth, setDateBirth] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [postalCode, setPostalCode] = useState('');

    const [paymentMethod, setPaymentMethod] = useState('');
    const [nameCard, setNameCard] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvcCVV, setCvcCVV] = useState('');

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (
        <div>
            <button className="buttonPanier" onClick={openModal}>Acheter la voiture</button>

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