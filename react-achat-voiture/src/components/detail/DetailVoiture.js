import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import logo from "../../images/Heading.png";
import "./DetailVoiture.css"
import PanierFormCar from "../Panier/PanierFormCar";
import Modal from "react-modal";
import {FaTimes} from "react-icons/fa";

const DetailVoiture = () => {
    const {id} = useParams();
    const [voiture, setVoiture] = useState({})

    useEffect(() => {
        fetchVoiture()
    }, []);

    async function fetchVoiture() {
        try {
            fetch(
                `http://localhost:8081/api/voitures/${id}`,
                {
                    method: 'GET',
                    headers: {
                        'Content-type': 'application/json'
                    }
                }
            ).catch(error => {
                console.log(error)
            }).then(
                async (res) => {
                    const data = await res.json()
                    try {
                        console.log(res.status)
                        if (res.status === 400) {
                            console.log(res.status)
                        }
                    } catch (e) {
                        console.log(e)
                    }
                    setVoiture(data);
                    console.log(data);
                }
            )
        } catch (error) {
            console.log("Une erreur est survenue : ", error)
            if (voiture !== undefined) {
                setVoiture(voiture);
            }
        }
    }

    async function addPanierVoiture(pannierDto) {
        try {
            fetch(
                "http://localhost:8081/api/pannier/add",
                {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify(pannierDto)
                }
            ).catch((error) => {
                console.log(error)
            }).then(
                async (res) => {
                    const data = await res.json()
                    try {
                        console.log(res.status)
                        if (res.status === 400) {
                            console.log(res.status)
                        }
                    } catch (e) {
                        console.log(e)
                    }

                    console.log(data);
                }
            )
        } catch (error) {
            console.log("Une erreur est survenue : ", error)
        }
    }

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (
        <div className="home-page">
            <header className="header">
                <img src={logo} alt="logo"/>
                <nav className="navbar">
                    <ul>
                        <li><Link to="/">Accueil</Link></li>
                        <li><Link to="/favoris">Favoris</Link></li>
                    </ul>
                </nav>
            </header>

            <section className="featured-section-detail">
                <div className="car-detail">
                    <div className="car-image-detail">
                        <img src={voiture.imageVoiture} alt="L'image de la voiture n'est pas disponible"/>
                    </div>
                    <div className="car-info-detail">
                        <h2>{voiture.marque}, {voiture.model}</h2>
                        <p><strong>Année:</strong> {voiture.annee}</p>
                        <p><strong>Prix:</strong> {voiture.prix}</p>
                        <p><strong>Detail:</strong> {voiture.detail}</p>
                        <p><strong>Kilométrage:</strong> {voiture.kilometrage}</p>
                        <p><strong>Roues motrices:</strong> {voiture.rouesMotrice}</p>
                        <p><strong>Nombre de cylindres:</strong> {voiture.nbrCylindre}</p>
                        <p><strong>Catégorie/taille:</strong> {voiture.categorieTailleVoiture}</p>
                        <p><strong>Carburant:</strong> {voiture.carburant}</p>
                        <p><strong>Transmission:</strong> {voiture.transmission}</p>
                        <p><strong>Nombre de vitesses:</strong> {voiture.nbrVitesseTransmission}</p>
                    </div>
                </div>
            </section>

            <section>
                <button className="buttonPanier" onClick={openModal}>Acheter la voiture</button>

                <Modal isOpen={modalIsOpen} onRequestClose={closeModal} ariaHideApp={false}>
                    <div className="close-button-container">
                        <button className="close-button" onClick={closeModal}>
                            <FaTimes style={{color: 'black', fontSize: '24px'}}/>
                        </button>
                    </div>
                    {<PanierFormCar onAdd={addPanierVoiture} voiture={voiture} closeModal={closeModal}/>}
                </Modal>
            </section>
        </div>
    )
}

export default DetailVoiture