import {useRef, useState} from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import "./PanierFormCar.css"
import dayjs from "dayjs";
import {citiesStates} from "./data/citiesStates";
import CodeInput from 'react-code-input';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import {
    formatCreditCardNumber,
    formatCVC,
    formatExpirationDate
} from "./utils";

const PanierFormCar = ({onAdd, voiture, closeModal}) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [dateBirth, setDateBirth] = useState(dayjs('2006-05-05'));

    const [state, setState] = useState('Quebec');
    const [city, setCity] = useState('');
    const [address, setAddress] = useState('');
    const [postalCode, setPostalCode] = useState('');
    
    const [nameCard, setNameCard] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvcCVV, setCvcCVV] = useState('');

    const [focused, setFocused] = useState("");

    const firstNameRef = useRef(null);
    const lastNameRef = useRef(null);
    const emailRef = useRef(null);
    const dateBirthRef = useRef(null);
    const addressRef = useRef(null);
    const cityRef = useRef(null);
    const stateRef = useRef(null);
    const postalCodeRef = useRef(null);
    
    const nameCardRef = useRef(null);
    const cardNumberRef = useRef(null);
    const expiryDateRef = useRef(null);
    const cvcCVVRef = useRef(null);

    const validName = firstName.match(/^[a-z ,.'-]+$/i);
    const validLastName = lastName.match(/^[a-z ,.'-]+$/i);
    const validEmail = email.match(/^([\w.%+-]+)@([\w-]+\.)+(\w{2,})$/i);
    const today = new Date();
    const validMinAgeDate = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate());
    const validPostalCode = postalCode.match(/^[A-Za-z]\d[A-Za-z]\d[A-Za-z]\d$/);
    const validAddress = address.match(/^\d+\s[A-Za-z]+\s[A-Za-z]+$/);

    const states = Object.keys(citiesStates.Provinces);
    const cities = citiesStates.Provinces[state]?.cities || [];

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

        if (!dateBirth) {
            annuler = true;
            dateBirthRef.current.innerHTML = '* Veuillez entrer votre date de naissance *';
        } else if (dateBirth > validMinAgeDate) {
            annuler = true;
            dateBirthRef.current.innerHTML = '* L\'âge de la personne doit être majeur *';
        } else {
            dateBirthRef.current.innerHTML = ''
        }

        if (address.trim() === '') {
            annuler = true;
            addressRef.current.innerHTML = '* Veuillez entrer votre adresse *';
        } else if (!validAddress) {
            annuler = true;
            addressRef.current.innerHTML = '* Adresse invalide. Format attendu: 1111 Rue Lapierre *';
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
            stateRef.current.innerHTML = '* Veuillez entrer votre province *';
        } else {
            stateRef.current.innerHTML = ''
        }

        if (postalCode.trim() === '') {
            annuler = true;
            postalCodeRef.current.innerHTML = '* Veuillez entrer votre code postal *';
        } else if (!validPostalCode) {
            annuler = true;
            postalCodeRef.current.innerHTML = '* Code postal invalide *';
        } else {
            postalCodeRef.current.innerHTML = ''
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
                nameCard,
                cardNumber,
                expiryDate,
                cvcCVV,
                voiture
            })
            closeModal()
        }
    }

    return (
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
                                    }}>* Prénom</label>

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
                                    }}>* Nom de famille</label>

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
                                    }}>* Email</label>

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
                                        fontWeight: '500', wordWrap: 'break-word', marginBottom: "0px"
                                    }}>* Date de naissance</label>

                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DemoContainer components={['DatePicker']}>
                                            <DatePicker
                                                label="Sélectionner une date"
                                                value={dateBirth}
                                                maxDate={dayjs(validMinAgeDate)}
                                                onChange={(newValue) => setDateBirth(newValue)}
                                            />
                                        </DemoContainer>
                                    </LocalizationProvider>
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
                                    }}>* Ville</label>

                                    <select id='city' value={city}
                                            className='form-control m-0 inputStyle'
                                            style={{width: 220}}
                                            onChange={(e) => setCity(e.target.value)}>
                                        {city === '' && <option value='' disabled>Sélectionner une ville</option>}
                                        {cities.map((cityName, index) => (
                                            <option key={index} value={cityName}>{cityName}</option>
                                        ))}
                                    </select>
                                    <p ref={cityRef}
                                       className="font px-1 textAvertissement text-danger"></p>
                                </div>

                                <div className='form-group' style={{
                                    flexDirection: 'column', justifyContent: 'flex-start',
                                    alignItems: 'flex-start', gap: 8, display: 'flex'
                                }}>

                                    <label style={{
                                        color: '#4A4543', fontSize: 14, fontFamily: 'Roboto',
                                        fontWeight: '500', wordWrap: 'break-word'
                                    }}>* Province</label>

                                    <select id='state' value={state}
                                            className='form-control m-0 inputStyle'
                                            style={{width: 220}}
                                            onChange={(e) => setState(e.target.value)}>
                                        {states.map((provinceName, index) => (
                                            <option key={index} value={provinceName}>{provinceName}</option>
                                        ))}
                                    </select>
                                    <p ref={stateRef}
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
                                    }}>* Adresse</label>

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
                                    }}>* Code postal</label>

                                    <CodeInput
                                        type="text"
                                        value={postalCode}
                                        onChange={(newValue) => setPostalCode(newValue)}
                                        fields={6}
                                        inputMode="text" name="postalCode"/>
                                    <p ref={postalCodeRef}
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
                                    <Cards
                                        name={nameCard}
                                        number={cardNumber}
                                        expiry={expiryDate}
                                        cvc={cvcCVV}
                                        focused={focused}
                                    />
                                </div>
                                <div className='form-group' style={{
                                    flexDirection: 'column', justifyContent: 'flex-start',
                                    alignItems: 'flex-start', gap: 8, display: 'flex'
                                }}>
                                    <input className='form-control m-0 inputStyle'
                                           style={{width: 220}}
                                           type='tel' placeholder='Entrer le numéro'
                                           pattern="[0-9 ]{16,22}"
                                           required
                                           name="number"
                                           value={cardNumber}
                                           onFocus={(e) => setFocused(e.target.name)}
                                           onChange={(e) => {
                                               e.target.value = formatCreditCardNumber(e.target.value)
                                               setCardNumber(e.target.value)
                                           }}/>
                                    <small>Ex.: 49..., 51..., 36..., 37...</small>
                                    <p ref={cardNumberRef}
                                       className="font px-1 textAvertissement text-danger"></p>

                                    <input className='form-control m-0 inputStyle'
                                           style={{width: 220}}
                                           type='text' placeholder="Entrer le nom"
                                           value={nameCard}
                                           required
                                           name="name"
                                           onFocus={(e) => setFocused(e.target.name)}
                                           onChange={(e) => setNameCard(e.target.value)}/>
                                    <p ref={nameCardRef}
                                       className="font px-1 textAvertissement text-danger"></p>

                                    <input className='form-control m-0 inputStyle'
                                           style={{width: 220}}
                                           type='tel' placeholder="Entrer la date d'expiration"
                                           value={expiryDate}
                                           pattern="\d\d/\d\d"
                                           required
                                           name="expiry"
                                           onFocus={(e) => setFocused(e.target.name)}
                                           onChange={(e) => {
                                               e.target.value = formatExpirationDate(e.target.value);
                                               setExpiryDate(e.target.value)
                                           }}/>
                                    <p ref={expiryDateRef}
                                       className="font px-1 textAvertissement text-danger"></p>

                                    <input className='form-control m-0 inputStyle'
                                           style={{width: 220}}
                                           type='tel' placeholder='Entrer le CVC / CVV'
                                           value={cvcCVV}
                                           pattern="\d{3,4}"
                                           required
                                           name="cvc"
                                           onFocus={(e) => setFocused(e.target.name)}
                                           onChange={(e) => {
                                               e.target.value = formatCVC(e.target.value);
                                               setCvcCVV(e.target.value)
                                           }}/>
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
    );
};

export default PanierFormCar;