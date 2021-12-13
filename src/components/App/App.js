import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import SearchForm from '../SearchForm/SearchForm';
import { setIp, setCity, fetchStreets, cleanStreets, setError, cleanError } from '../../redux/actionCreator'

function App() {

  const dispatch = useDispatch();

  const token = '7c599671219d13bf2093b0c66300f6649405d007';

  const fetchUrl = 'https://suggestions.dadata.ru/suggestions/api/4_1/rs/';

  const location = useSelector(state => state.city.city);

  async function getUserData() {
    try {
      const resIp = await fetch('https://api.ipify.org?format=json');
      const userIp = await resIp.json();
      const resCity = await fetch(`${fetchUrl}iplocate/address?ip=${userIp.ip}&token=${token}`);
      const userCity = await resCity.json();
      dispatch(setIp(userIp));
      dispatch(setCity(userCity));
    } catch (e) {
        console.error(e)
    }
  }
  
  getUserData()

  async function getStreet(data) {
    try {
      const requestData = location + ' ' + data
      const res = await fetch(`${fetchUrl}suggest/address?token=${token}&query=${requestData}`);
      const streets = await res.json();
      if (streets.suggestions.length !== 0) {
        dispatch(cleanError())
        dispatch(fetchStreets(streets))
      } else {
        dispatch(cleanStreets())
        dispatch(setError())
      }
    } catch (e) {
      console.error(e)
    }
  }

  function resetState() {
    dispatch(cleanStreets())
    dispatch(cleanError())
  }



  return (
    <div className="App">
      <SearchForm getStreet={getStreet} resetState={resetState} />
    </div>
  );
}

export default App;
