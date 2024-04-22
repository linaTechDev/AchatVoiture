import logo from "../../images/Heading.png";
import {Link} from "react-router-dom";
import React, {useEffect, useState} from "react";
import "./FavorisVoitures.css"

const FavorisVoitures = () => {
    const [favoris, setFavoris] = useState([])

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
                        <div key={favoriVoiture.id} className="voiture-item">
                            <img
                                src={favoriVoiture.voitureDto.imageVoiture}
                                alt="L'image de la voiture n'est pas disponible"/>
                            <div>
                                <h2>{favoriVoiture.voitureDto.marque} - {favoriVoiture.voitureDto.model}</h2>
                                <p>Prix: ${favoriVoiture.voitureDto.prix}</p>
                            </div>
                            <button onClick={() => removeVoiture(favoriVoiture.id)}>Supprimer</button>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default FavorisVoitures