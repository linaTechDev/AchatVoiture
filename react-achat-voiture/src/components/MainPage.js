import React, {useEffect, useState} from "react";
import "./MainPage.css"
import {Link, useNavigate} from "react-router-dom";
import logo from "../images/Heading.png";
import Dropdown from 'react-bootstrap/Dropdown';
import { FiPlus } from 'react-icons/fi';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

const MainPage = () => {
    const [favoris, setFavoris] = useState({});
    const [voitures, setVoitures] = useState([]);
    const [marques, setMarques] = useState([]);
    const [checkedState, setCheckedState] = useState({});
    const [selectAll, setSelectAll] = useState(false);
    const navigate = useNavigate()

    useEffect(() => {
        fetchVoitureList()
        fetchMarqueList()
    }, []);

    async function fetchVoitureList() {
        try {
            fetch(
                "http://localhost:8081/api/voitures/",
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
                    setVoitures(data);
                    console.log(data);
                }
            )
        } catch (error) {
            console.log("Une erreur est survenue : ", error)
            if (voitures !== undefined) {
                setVoitures(voitures);
            }
        }
    }

    async function addFavorisVoiture(voitureDto) {
        try {
            const favoris = ({
                voitureDto
            })
            fetch(
                "http://localhost:8081/api/favoris/add",
                {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify(favoris)
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
                    setFavoris(data);

                    NotificationManager.success('Favoris', 'La voiture a bien été ajoutée aux favoris', 3000);

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

    async function fetchMarqueList() {
        try {
            fetch(
                "http://localhost:8081/api/marques/",
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
                    setMarques(data);
                    console.log(data);
                }
            )
        } catch (error) {
            console.log("Une erreur est survenue : ", error)
            if (voitures !== undefined) {
                setMarques(marques);
            }
        }
    }

    const toggleCheckbox = (marque) => {
        const newState = { ...checkedState, [marque]: !checkedState[marque] };
        setCheckedState(newState);
        setSelectAll(Object.values(newState).every(value => value));
    };

    const handleSelectAll = () => {
        const newState = {};
        if (!selectAll) {
            marques.forEach(option => {
                newState[option.marque] = true;
            });
        }
        setCheckedState(newState);
        setSelectAll(!selectAll);
    };

    const filterVoituresByMarque = () => {
        const selectedMarques = Object.keys(checkedState).filter(marque => checkedState[marque]);
        if (selectedMarques.length === 0 || selectAll) return voitures;
        return voitures.filter(item => selectedMarques.includes(item.marque));
    };

    const scrollToDropdown = () => {
        const dropdownElement = document.getElementById('featured-section');
        if (dropdownElement) {
            dropdownElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
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

            <section className="hero-section">
                <div className="hero-content">
                    <h2>Découvrez le monde sur roues avec notre service de location de voitures</h2>
                    <p>Découvrez l'excellence automobile</p>
                    <button className="cta-button" onClick={scrollToDropdown}>
                        Trouver votre voiture
                    </button>
                </div>
            </section>

            <section className="featured-section" id="featured-section">
                <Dropdown>
                <Dropdown.Toggle variant="dark" id="dropdown-basic">
                        Filtre par marque
                    </Dropdown.Toggle>

                    <Dropdown.Menu className="dropdown-content" id="filter-dropdown">
                        <div>
                            <input
                                type="checkbox"
                                checked={selectAll}
                                onChange={handleSelectAll}
                            />
                            <label>Tout sélectionner</label>
                        </div>
                        {marques.map(option => (
                            <div key={option.marque}>
                                <input
                                    type="checkbox"
                                    checked={checkedState[option.marque] || false}
                                    onChange={() => toggleCheckbox(option.marque)}
                                />
                                <label>{option.marque}</label>
                            </div>
                        ))}
                    </Dropdown.Menu>
                </Dropdown>
                <h2>Liste des voitures</h2>
                <div className="featured-cars">
                    {filterVoituresByMarque().map((car) => (
                        <div key={car.id} className="featured-car">
                            <div className="plus-icon-container">
                                <button className="plus-button" onClick={(e) => {
                                    e.stopPropagation();
                                    addFavorisVoiture(car);
                                }}>
                                    <FiPlus/>
                                </button>
                            </div>
                            <div onClick={() => {
                                navigate(`/voiture/${car.id}`);
                            }}>
                                <img src={car.imageVoiture} alt="L'image de la voiture n'est pas disponible"/>
                                <h2>{car.marque}</h2>
                                <p>{car.model}</p>
                                <p>{car.annee}</p>
                            </div>
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

            <NotificationContainer />
        </div>
    )
}

export default MainPage