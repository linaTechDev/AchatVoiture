import React, {useRef, useState} from 'react';
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

    const firstNameRef = useRef(null);
    const lastNameRef = useRef(null);
    const emailRef = useRef(null);
    const dateBirthRef = useRef(null);
    const addressRef = useRef(null);
    const cityRef = useRef(null);
    const stateRef = useRef(null);
    const postalCodeRef = useRef(null);

    const paymentMethodRef = useRef(null);
    const nameCardRef = useRef(null);
    const cardNumberRef = useRef(null);
    const expiryDateRef = useRef(null);
    const cvcCVVRef = useRef(null);

    const validName = firstName.match(/^[a-z ,.'-]+$/i);
    const validLastName = lastName.match(/^[a-z ,.'-]+$/i);
    const validEmail = email.match(/^([\w.%+-]+)@([\w-]+\.)+(\w{2,})$/i);

    const onSubmit = (e) => {
        e.preventDefault()

        let annuler = false;

        if (
            !firstName ||
            !lastName ||
            !email ||
            !dateBirth ||
            !address ||
            !city ||
            !state ||
            !postalCode ||
            !paymentMethod ||
            !nameCard ||
            !cardNumber ||
            !expiryDate ||
            !cvcCVV
        ) {
            annuler = true;
        }

        if (
            firstName.trim() === ''
        ) {
            annuler = true;
            firstNameRef.current.innerHTML  = '* Veuillez entrer votre prénom *';
        } else {
            firstNameRef.current.innerHTML = '';
        }

        if(lastName.trim() === '') {
            annuler = true;
            lastNameRef.current.innerHTML = '* Veuillez entrer votre nom *';
        } else {
            lastNameRef.current.innerHTML = ''
        }

        if (firstName.trim() !== '' && !validName){
            firstNameRef.current.innerHTML  = '* Prénom invalide *';
            annuler = true;
        }
        if (lastName.trim() !== '' && !validLastName){
            lastNameRef.current.innerHTML = '* Nom invalide *';
            annuler = true;
        }


        if (email.trim() === '') {
            annuler = true;
            emailRef.current.innerHTML = '* Veuillez entrer votre email *';
        } else {
            emailRef.current.innerHTML = ''
        }

        if (email.trim()!== '' && !validEmail) {
            annuler = true;
            emailRef.current.innerHTML = '* Email invalide *';
        }

        if (dateBirth.trim() === '') {
            annuler = true;
            dateBirthRef.current.innerHTML = '* Veuillez entrer votre date de naissance *';
        } else {
            dateBirthRef.current.innerHTML = ''
        }

        if (address.trim() === '') {
            annuler = true;
            addressRef.current.innerHTML = '* Veuillez entrer votre adresse *';
        } else {
            addressRef.current.innerHTML = ''
        }

        if (city.trim() === '') {
            annuler = true;
            cityRef.current.innerHTML = '* Veuillez entrer votre ville *';
        } else {
            cityRef.current.innerHTML = ''
        }

        if (state.trim() === '') {
            annuler = true;
            stateRef.current.innerHTML = '* Veuillez entrer votre état *';
        } else {
            stateRef.current.innerHTML = ''
        }

        if (postalCode.trim() === '') {
            annuler = true;
            postalCodeRef.current.innerHTML = '* Veuillez entrer votre code postal *';
        } else {
            postalCodeRef.current.innerHTML = ''
        }

        if (paymentMethod.trim() === '') {
            annuler = true;
            paymentMethodRef.current.innerHTML = '* Veuillez entrer votre méthode de paiement *';
        } else {
            paymentMethodRef.current.innerHTML = ''
        }

        if (nameCard.trim() === '') {
            annuler = true;
            nameCardRef.current.innerHTML = '* Veuillez entrer votre nom de la carte *';
        } else {
            nameCardRef.current.innerHTML = ''
        }

        if (cardNumber.trim() === '') {
            annuler = true;
            cardNumberRef.current.innerHTML = '* Veuillez entrer votre numéro de la carte *';
        } else {
            cardNumberRef.current.innerHTML = ''
        }

        if (expiryDate.trim() === '') {
            annuler = true;
            expiryDateRef.current.innerHTML = '* Veuillez entrer votre date d\'expiration de la carte *';
        } else {
            expiryDateRef.current.innerHTML = ''
        }

        if (cvcCVV.trim() === '') {
            annuler = true;
            cvcCVVRef.current.innerHTML = '* Veuillez entrer votre CVC/CVV *';
        } else {
            cvcCVVRef.current.innerHTML = ''
        }

        if (!annuler) {
            onAdd({
                firstName,
                lastName,
                email,
                dateBirth,
                address,
                city,
                state,
                postalCode,
                paymentMethod,
                nameCard,
                cardNumber,
                expiryDate,
                cvcCVV,
            })
            closeModal()
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
        <div>
            <button className="buttonPanier" onClick={openModal}>Acheter la voiture</button>

            <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
                <div className="close-button-container">
                    <button className="close-button" onClick={closeModal}>
                        <FaTimes style={{color: 'black', fontSize: '24px'}}/>
                    </button>
                </div>
                <div>
                    <div>
                        <form onSubmit={onSubmit}>
                            <div style={{
                                flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start',
                                gap: 16, display: 'flex'
                            }}>
                                <div style={{
                                    flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start',
                                    gap: 16, display: 'flex'
                                }}>

                                    <div style={{
                                        flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start',
                                        display: 'flex'
                                    }}>
                                        <div style={{
                                            color: '#4A4543', fontSize: 42, fontFamily: 'Roboto', fontWeight: '400',
                                            wordWrap: 'break-word'
                                        }}>Formulaire d'achat de la voiture
                                        </div>

                                        <div style={{
                                            color: '#808080', fontSize: 16, fontFamily: 'Roboto', fontWeight: '400',
                                            letterSpacing: 0.16, wordWrap: 'break-word'
                                        }}>Veuillez entrer vos informations.
                                        </div>
                                    </div>

                                    <div style={{
                                        flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start',
                                        gap: 10, display: 'flex'
                                    }}>

                                        <div style={{
                                            justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8,
                                            display: 'inline-flex'
                                        }}>

                                            <div className='form-group' style={{
                                                flexDirection: 'column', justifyContent: 'flex-start',
                                                alignItems: 'flex-start', gap: 8, display: 'flex', width: 220
                                            }}>

                                                <label style={{
                                                    color: '#4A4543', fontSize: 14, fontFamily: 'Roboto',
                                                    fontWeight: '500', wordWrap: 'break-word'
                                                }}>Prénom</label>

                                                <input ref={firstNameRef} className='form-control m-0 inputStyle'
                                                       style={{width: 220}}
                                                       type='text' placeholder='Entrer le prénom'
                                                       value={firstName}
                                                       onChange={(e) => setFirstName(e.target.value)}/>
                                                <p ref={firstNameRef}
                                                   className="font px-1 textAvertissement text-danger"></p>
                                            </div>

                                            <div className='form-group' style={{
                                                flexDirection: 'column', justifyContent: 'flex-start',
                                                alignItems: 'flex-start', gap: 8, display: 'flex'
                                            }}>

                                                <label style={{
                                                    color: '#4A4543', fontSize: 14, fontFamily: 'Roboto',
                                                    fontWeight: '500', wordWrap: 'break-word'
                                                }}>Nom de famille</label>

                                                <input className='form-control m-0 inputStyle'
                                                       style={{width: 220}}
                                                       type='text' placeholder='Entrer le nom de famille'
                                                       value={lastName}
                                                       onChange={(e) => setLastName(e.target.value)}/>
                                                <p ref={lastNameRef}
                                                   className="font px-1 textAvertissement text-danger"></p>
                                            </div>
                                        </div>

                                        <div style={{
                                            justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8,
                                            display: 'inline-flex'
                                        }}>

                                            <div className='form-group' style={{
                                                flexDirection: 'column', justifyContent: 'flex-start',
                                                alignItems: 'flex-start', gap: 8, display: 'flex'
                                            }}>

                                                <label style={{
                                                    color: '#4A4543', fontSize: 14, fontFamily: 'Roboto',
                                                    fontWeight: '500', wordWrap: 'break-word'
                                                }}>Email</label>

                                                <input className='form-control m-0 inputStyle'
                                                       style={{width: 220}}
                                                       type='text' placeholder='Entrer l’email'
                                                       value={email}
                                                       onChange={(e) => setEmail(e.target.value)}/>
                                                <p ref={emailRef}
                                                   className="font px-1 textAvertissement text-danger"></p>
                                            </div>

                                            <div className='form-group' style={{
                                                flexDirection: 'column', justifyContent: 'flex-start',
                                                alignItems: 'flex-start', gap: 8, display: 'flex'
                                            }}>

                                                <label style={{
                                                    color: '#4A4543', fontSize: 14, fontFamily: 'Roboto',
                                                    fontWeight: '500', wordWrap: 'break-word'
                                                }}>Date de naissance</label>

                                                <input className='form-control m-0 inputStyle'
                                                       style={{width: 220}}
                                                       type='text' placeholder='Entrer la date de naissance'
                                                       value={dateBirth}
                                                       onChange={(e) => setDateBirth(e.target.value)}/>
                                                <p ref={dateBirthRef}
                                                   className="font px-1 textAvertissement text-danger"></p>
                                            </div>
                                        </div>

                                        <div style={{
                                            justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8,
                                            display: 'inline-flex'
                                        }}>

                                            <div className='form-group' style={{
                                                flexDirection: 'column', justifyContent: 'flex-start',
                                                alignItems: 'flex-start', gap: 8, display: 'flex'
                                            }}>

                                                <label style={{
                                                    color: '#4A4543', fontSize: 14, fontFamily: 'Roboto',
                                                    fontWeight: '500', wordWrap: 'break-word'
                                                }}>Adresse</label>

                                                <input className='form-control m-0 inputStyle'
                                                       style={{width: 220}}
                                                       type='text' placeholder="Entrer l'adresse"
                                                       value={address}
                                                       onChange={(e) => setAddress(e.target.value)}/>
                                                <p ref={addressRef}
                                                   className="font px-1 textAvertissement text-danger"></p>
                                            </div>

                                            <div className='form-group' style={{
                                                flexDirection: 'column', justifyContent: 'flex-start',
                                                alignItems: 'flex-start', gap: 8, display: 'flex'
                                            }}>

                                                <label style={{
                                                    color: '#4A4543', fontSize: 14, fontFamily: 'Roboto',
                                                    fontWeight: '500', wordWrap: 'break-word'
                                                }}>Ville</label>

                                                <input className='form-control m-0 inputStyle'
                                                       style={{width: 220}}
                                                       type='text' placeholder='Entrer la ville'
                                                       value={city}
                                                       onChange={(e) => setCity(e.target.value)}/>
                                                <p ref={cityRef}
                                                   className="font px-1 textAvertissement text-danger"></p>
                                            </div>
                                        </div>

                                        <div style={{
                                            justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8,
                                            display: 'inline-flex'
                                        }}>

                                            <div className='form-group' style={{
                                                flexDirection: 'column', justifyContent: 'flex-start',
                                                alignItems: 'flex-start', gap: 8, display: 'flex'
                                            }}>

                                                <label style={{
                                                    color: '#4A4543', fontSize: 14, fontFamily: 'Roboto',
                                                    fontWeight: '500', wordWrap: 'break-word'
                                                }}>Code postal</label>

                                                <input className='form-control m-0 inputStyle'
                                                       style={{width: 220}}
                                                       type='text' placeholder="Entrer le code postal"
                                                       value={postalCode}
                                                       onChange={(e) => setPostalCode(e.target.value)}/>
                                                <p ref={postalCodeRef}
                                                   className="font px-1 textAvertissement text-danger"></p>
                                            </div>

                                            <div className='form-group' style={{
                                                flexDirection: 'column', justifyContent: 'flex-start',
                                                alignItems: 'flex-start', gap: 8, display: 'flex'
                                            }}>

                                                <label style={{
                                                    color: '#4A4543', fontSize: 14, fontFamily: 'Roboto',
                                                    fontWeight: '500', wordWrap: 'break-word'
                                                }}>Méthode de paiement</label>

                                                <input className='form-control m-0 inputStyle'
                                                       style={{width: 220}}
                                                       type='text' placeholder='Entrer la méthode de paiement'
                                                       value={paymentMethod}
                                                       onChange={(e) => setPaymentMethod(e.target.value)}/>
                                                <p ref={paymentMethodRef}
                                                   className="font px-1 textAvertissement text-danger"></p>
                                            </div>
                                        </div>


                                        <div style={{
                                            justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8,
                                            display: 'inline-flex'
                                        }}>

                                            <div className='form-group' style={{
                                                flexDirection: 'column', justifyContent: 'flex-start',
                                                alignItems: 'flex-start', gap: 8, display: 'flex'
                                            }}>

                                                <label style={{
                                                    color: '#4A4543', fontSize: 14, fontFamily: 'Roboto',
                                                    fontWeight: '500', wordWrap: 'break-word'
                                                }}>Nom de la carte</label>

                                                <input className='form-control m-0 inputStyle'
                                                       style={{width: 220}}
                                                       type='text' placeholder="Entrer le nom de la carte"
                                                       value={nameCard}
                                                       onChange={(e) => setNameCard(e.target.value)}/>
                                                <p ref={nameCardRef}
                                                   className="font px-1 textAvertissement text-danger"></p>
                                            </div>

                                            <div className='form-group' style={{
                                                flexDirection: 'column', justifyContent: 'flex-start',
                                                alignItems: 'flex-start', gap: 8, display: 'flex'
                                            }}>

                                                <label style={{
                                                    color: '#4A4543', fontSize: 14, fontFamily: 'Roboto',
                                                    fontWeight: '500', wordWrap: 'break-word'
                                                }}>Numéro de la carte</label>

                                                <input className='form-control m-0 inputStyle'
                                                       style={{width: 220}}
                                                       type='text' placeholder='Entrer le numéro de la carte'
                                                       value={cardNumber}
                                                       onChange={(e) => setCardNumber(e.target.value)}/>
                                                <p ref={cardNumberRef}
                                                   className="font px-1 textAvertissement text-danger"></p>
                                            </div>
                                        </div>


                                        <div style={{
                                            justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8,
                                            display: 'inline-flex'
                                        }}>

                                            <div className='form-group' style={{
                                                flexDirection: 'column', justifyContent: 'flex-start',
                                                alignItems: 'flex-start', gap: 8, display: 'flex'
                                            }}>

                                                <label style={{
                                                    color: '#4A4543', fontSize: 14, fontFamily: 'Roboto',
                                                    fontWeight: '500', wordWrap: 'break-word'
                                                }}>Date d'expiration de la carte</label>

                                                <input className='form-control m-0 inputStyle'
                                                       style={{width: 220}}
                                                       type='text' placeholder="Entrer la date d'expiration de la carte"
                                                       value={expiryDate}
                                                       onChange={(e) => setExpiryDate(e.target.value)}/>
                                                <p ref={expiryDateRef}
                                                   className="font px-1 textAvertissement text-danger"></p>
                                            </div>

                                            <div className='form-group' style={{
                                                flexDirection: 'column', justifyContent: 'flex-start',
                                                alignItems: 'flex-start', gap: 8, display: 'flex'
                                            }}>

                                                <label style={{
                                                    color: '#4A4543', fontSize: 14, fontFamily: 'Roboto',
                                                    fontWeight: '500', wordWrap: 'break-word'
                                                }}>CVC / CVV</label>

                                                <input className='form-control m-0 inputStyle'
                                                       style={{width: 220}}
                                                       type='text' placeholder='Entrer le CVC / CVV'
                                                       value={cvcCVV}
                                                       onChange={(e) => setCvcCVV(e.target.value)}/>
                                                <p ref={cvcCVVRef}
                                                   className="font px-1 textAvertissement text-danger"></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div style={{
                                    flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start',
                                    display: 'flex'
                                }}>
                                    <div style={{
                                        width: 180, height: 45, background: '#000000',
                                        borderRadius: 8
                                    }}>
                                        <input type='submit' value="Envoyer le formulaire" className='btn btn-block'
                                               style={{
                                                   color: 'white', fontSize: 16, fontFamily: 'Roboto',
                                                   textAlign: "center",
                                                   fontWeight: '500', wordWrap: 'break-word'
                                               }}/>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default PanierFormCar;