import logo from "../../images/Heading.png";
import {Link, useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";
import "./FavorisVoitures.css"
import {FaTimes} from "react-icons/fa";
import Modal from "react-modal";

const FavorisVoitures = () => {
    const [favoris, setFavoris] = useState([])
    const [favoriVoiture, setFavoriVoiture] = useState({})
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        fetchFavorisList()
    }, []);

    async function fetchFavorisList() {
        try {
            fetch(
                "http://localhost:8081/api/favoris/",
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
                    setFavoris(data);
                    console.log(data);
                }
            )
        } catch (error) {
            console.log("Une erreur est survenue : ", error)
            if (favoris !== undefined) {
                setFavoris(favoris);
            }
        }
    }

    async function fetchFavorisVoiture(id) {
        try {
            fetch(
                `http://localhost:8081/api/favoris/${id}`,
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
                    setFavoriVoiture(data);
                    setShowModal(true);
                    console.log(data);
                }
            )
        } catch (error) {
            console.log("Une erreur est survenue : ", error)
            if (favoriVoiture !== undefined) {
                setFavoriVoiture(favoriVoiture);
            }
        }
    }

    const closeModal = () => {
        setShowModal(false);
        setFavoriVoiture({})
    }

    const removeVoiture = async (id) => {
        await fetch(`http://localhost:8081/api/favoris/${id}`, {
            method: 'DELETE'
        })
        setFavoris(favoris.filter((favoriVoiture) => favoriVoiture.id !== id))
    }

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

            <section className="featured-section">
                <h1>Liste des voitures favoris</h1>
                <div className="voitures-list">
                    {favoris.map((favoriVoiture) => (
                        <div key={favoriVoiture.id} className="voiture-item" onClick={() => fetchFavorisVoiture(favoriVoiture.id)}>
                            <img
                                src={favoriVoiture.voitureDto.imageVoiture}
                                alt="L'image de la voiture n'est pas disponible"/>
                            <div>
                                <h2>{favoriVoiture.voitureDto.marque} - {favoriVoiture.voitureDto.model}</h2>
                                <p>Prix: ${favoriVoiture.voitureDto.prix}</p>
                            </div>
                            <button onClick={() =>
                                removeVoiture(favoriVoiture.id)}>Supprimer</button>
                        </div>
                    ))}
                </div>
            </section>

            {showModal && (
                <Modal isOpen={showModal} onRequestClose={closeModal}
                       style={{ content: { width: '70%', maxWidth: '500px', height: '80%', margin: 'auto', paddingBottom:0 } }}>
                    <div className="close-button-container">
                        <button className="close-button" onClick={closeModal}>
                            <FaTimes style={{color: 'black', fontSize: '24px'}}/>
                        </button>
                    </div>
                    <div>
                        <div className="car-image-detail-favoris">
                            <img src={favoriVoiture.voitureDto.imageVoiture}
                                 alt="L'image de la voiture n'est pas disponible"/>
                        </div>
                        <div className="car-info-detail-favoris">
                            <h2>{favoriVoiture.voitureDto.marque}, {favoriVoiture.voitureDto.model}</h2>
                            <p><strong>Année:</strong> {favoriVoiture.voitureDto.annee}</p>
                            <p><strong>Prix:</strong> {favoriVoiture.voitureDto.prix}</p>
                            <p><strong>Detail:</strong> {favoriVoiture.voitureDto.detail}</p>
                            <p><strong>Kilométrage:</strong> {favoriVoiture.voitureDto.kilometrage}</p>
                            <p><strong>Roues motrices:</strong> {favoriVoiture.voitureDto.rouesMotrice}</p>
                            <p><strong>Nombre de cylindres:</strong> {favoriVoiture.voitureDto.nbrCylindre}</p>
                            <p><strong>Catégorie/taille:</strong> {favoriVoiture.voitureDto.categorieTailleVoiture}</p>
                            <p><strong>Carburant:</strong> {favoriVoiture.voitureDto.carburant}</p>
                            <p><strong>Transmission:</strong> {favoriVoiture.voitureDto.transmission}</p>
                            <p><strong>Nombre de vitesses:</strong> {favoriVoiture.voitureDto.nbrVitesseTransmission}</p>
                        </div>
                    </div>
                </Modal>
            )}
        </div>
    )
}

export default FavorisVoitures