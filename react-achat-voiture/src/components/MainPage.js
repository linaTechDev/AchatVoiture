import React, {useState} from "react";
import "./MainPage.css"
import {Link} from "react-router-dom";
import {cars} from "../data/cars";
import logo from "../images/Heading.png";
import Dropdown from 'react-bootstrap/Dropdown';

const MainPage = () => {
    const carsVedettes = cars.slice(0, 12);

    const [options, setOptions] = useState([
        { id: 1, label: 'Option 1', isChecked: false },
        { id: 2, label: 'Option 2', isChecked: false },
        { id: 3, label: 'Option 3', isChecked: false },
        { id: 4, label: 'Option 4', isChecked: false },
    ]);

    const toggleCheckbox = (id) => {
        setOptions(options.map(option =>
            option.id === id ? { ...option, isChecked: !option.isChecked } : option
        ));
    };

    const handleSelectAll = () => {
        const allChecked = options.every(option => option.isChecked);
        setOptions(options.map(option => ({ ...option, isChecked: !allChecked })));
    };

    return (
        <div className="home-page">
            <header className="header">
                <img src={logo} alt="logo"/>
                <nav className="navbar">
                    <ul>
                        <li><Link to="/">Accueil</Link></li>
                        <li><Link to="/marques">Marques</Link></li>
                        <li><Link to="/recherche">Recherche</Link></li>
                    </ul>
                </nav>
            </header>

            <section className="hero-section">
            <div className="hero-content">
                    <h2>Découvrez le monde sur roues avec notre service de location de voitures</h2>
                    <p>Découvrez l'excellence automobile</p>
                    <Link to="/recherche" className="cta-button">Trouvez votre voiture</Link>
                </div>
            </section>

            <section className="featured-section">
                <Dropdown>
                    <Dropdown.Toggle variant="primary" id="dropdown-basic">
                        Select Options
                    </Dropdown.Toggle>

                    <Dropdown.Menu className="dropdown-content">
                        <div>
                            <input
                                type="checkbox"
                                checked={options.every(option => option.isChecked)}
                                onChange={handleSelectAll}
                            />
                            <label>Select All</label>
                        </div>
                        {options.map(option => (
                            <div key={option.id}>
                                <input
                                    type="checkbox"
                                    checked={option.isChecked}
                                    onChange={() => toggleCheckbox(option.id)}
                                />
                                <label>{option.label}</label>
                            </div>
                        ))}
                    </Dropdown.Menu>
                </Dropdown>
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