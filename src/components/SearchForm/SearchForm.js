import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './SearchForm.css';

function SearchForm ({ getStreet, resetState }) {
    
    const ip = useSelector(state => state.ip.ip)
    const location = useSelector(state => state.city.city)
    const streets = useSelector(state => state.streetsData.streetsData)
    const notFound = useSelector(state => state.error)

    const [street, setStreet] = useState('');
    const [error, setError] = useState('');
    const [isValid, setIsValid] = useState(false);

    function handleChangeStreet(e) {
        setStreet(e.target.value);
        setIsValid(e.target.closest("form").checkValidity());
        setError(e.target.validationMessage);
        if(!e.target.value) {
            resetState()
        }
    }

    const handleClick = (data) => {
        setStreet(data);
        resetState()
    }

    function handleSubmit(e) {
        e.preventDefault();
        getStreet(street);
    }


    return (
        <section className="form">
            <form onSubmit={handleSubmit} className="form__container" noValidate>
                <label className="form__field">
                    <span className='form__field-text'>IP</span>
                    <input  value={ip}
                            className='form__input'
                            type="text" 
                            name="IP"
                            readOnly />
                </label>
                <label className="form__field">
                    <span className='form__field-text'>Город</span>
                    <input  value={location}
                            className='form__input'
                            type="text"
                            name="location"
                            readOnly />
                </label>
                <label className="form__field">
                    <span className='form__field-text'>Улица</span>
                    <input  value={street || ''} onChange={handleChangeStreet}
                            pattern='^[а-яА-ЯёЁa-zA-Z ]+$'
                            className='form__input'
                            type="text" 
                            name="street"
                            required />
                    <span className="form__error">{error}</span>
                    <span className="form__error">{notFound}</span>
                    <ul className="form__list">
                        {streets.map((street) => (
                            <li className="form__list-item" onClick={() => handleClick(street.data.street || street.data.settlement)} 
                                key={street.value} >
                                {street.value} 
                            </li>
                        ))}
                    </ul>
                </label>
                <button type="submit" className={`${isValid ? "form__button_active" : "form__button_inactive"} form__button`} disabled={`${isValid ? "" : "disabled"}`}>Найти улицу</button>
            </form>
        </section>
    );
}

export default SearchForm;