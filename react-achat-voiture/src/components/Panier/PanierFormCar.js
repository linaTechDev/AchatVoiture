import React, { useState } from 'react';
import Modal from 'react-modal';
import "./PanierFormCar.css"
import { FaTimes } from 'react-icons/fa';

const PanierFormCar = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        selectedCar: '',
    });
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form submitted with data:', formData);
        setFormData({
            fullName: '',
            email: '',
            phone: '',
            selectedCar: '',
        });
        closeModal();
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (
        <div>
            <button className="buttonPanier" onClick={openModal}>Open Rental Form</button>

            <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
                <div className="close-button-container">
                    <button className="close-button" onClick={closeModal}>
                        <FaTimes style={{color: 'black', fontSize: '24px'}}/>
                    </button>
                </div>
                <h2>Rent a Car</h2>
                <form onSubmit={handleSubmit}>
                    <label>
                        Full Name:
                        <input
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            required
                        />
                    </label>

                    <label>
                        Email:
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </label>

                    <label>
                        Phone:
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                    </label>

                    <button className="buttonPanier" type="submit">Rent Car</button>
                </form>
            </Modal>
        </div>
    );
};

export default PanierFormCar;