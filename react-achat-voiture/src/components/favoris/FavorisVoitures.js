import logo from "../../images/Heading.png";
import {Link} from "react-router-dom";
import React, {useState} from "react";
import "./FavorisVoitures.css"

const FavorisVoitures = () => {
    const [voituresTemp, setVoituresTemp] = useState([
        {
            id: 1,
            marque: "Toyota",
            model: "Corolla",
            prix: 25000,
        },
        {
            id: 2,
            marque: "Honda",
            model: "Civic",
            prix: 22000,
        },
        {
            id: 3,
            marque: "Ford",
            model: "Mustang",
            prix: 35000,
        }
    ])

    const removeVoiture = (id) => {
        setVoituresTemp((prevVoitures) => prevVoitures.filter((v) => v.id !== id));
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

            <section className="featured-section">
                <h1>Liste des voitures favoris</h1>
                <div className="voitures-list">
                    {voituresTemp.map((voiture) => (
                        <div key={voiture.id} className="voiture-item">
                            <img
                                src="https://i.etsystatic.com/36262552/r/il/5e72a0/4177036590/il_fullxfull.4177036590_acsv.jpg"
                                alt="L'image de la voiture n'est pas disponible"/>
                            <div>
                                <h2>{voiture.marque} - {voiture.model}</h2>
                                <p>Prix: ${voiture.prix}</p>
                            </div>
                            <button onClick={() => removeVoiture(voiture.id)}>Supprimer</button>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default FavorisVoitures