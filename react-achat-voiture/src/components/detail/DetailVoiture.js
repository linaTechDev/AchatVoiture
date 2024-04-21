import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import logo from "../../images/Heading.png";
import "./DetailVoiture.css"

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
                <div className="car-details">
                    <div className="car-image">
                        <img src={voiture.imageVoiture} alt="Car"/>
                    </div>
                    <div className="car-info">
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
        </div>
    )
}

export default DetailVoiture