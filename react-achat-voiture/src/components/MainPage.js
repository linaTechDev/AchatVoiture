import React from "react";
import "./MainPage.css"
import {Link} from "react-router-dom";
import {cars} from "../data/cars";

const MainPage = () => {
    const carsVedettes = cars.slice(0, 10);

    return (
        <div className="home-page">
            <header className="header">
                <h1>Site web d'achat de voitures</h1>
                <nav>
                    <ul>
                        <li><Link to="/">Accueil</Link></li>
                        <li><Link to="/marques">Marques</Link></li>
                        <li><Link to="/recherche">Recherche</Link></li>
                    </ul>
                </nav>
            </header>

            <section className="hero-section">
                <div className="hero-content">
                    <h2>Bienvenue chez Automobile</h2>
                    <p>Découvrez l'excellence automobile</p>
                    <Link to="/recherche" className="cta-button">Trouvez votre voiture</Link>
                </div>
            </section>

            <section className="featured-section">
                <h2>Voitures en Vedette</h2>
                <div className="featured-cars">
                    {carsVedettes.map((car, index) => (
                        <div key={index} className="featured-car">
                            <img src={car.imageVoiture} alt={`${car.marque} ${car.model}`}/>
                        </div>
                    ))}
                </div>
            </section>

            <section className="about-section">
                <h2>À Propos</h2>
                <p>Explorez une collection exceptionnelle de voitures de qualité, alliant performance, style et
                    innovation. Chez Automobile, nous nous engageons à offrir une expérience d'achat de voiture
                    exceptionnelle.</p>
            </section>

            <footer className="footer">
                <p>&copy; {new Date().getFullYear()} Automobile. Tous droits réservés.</p>
            </footer>
        </div>
    )
}

export default MainPage