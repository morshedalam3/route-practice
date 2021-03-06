import React, { useEffect, useState } from 'react';
import Countries from './Countries/Countries';

const Home = () => {
  const [country, setCountry] = useState([]);
  useEffect(() => {
      const url = 'https://restcountries.eu/rest/v2/all';
      fetch(url)
      .then(res => res.json())
      .then(data => setCountry(data))
  }, [])
    return (
        <div>
            <h1>This is home</h1>
            {
                country.map(country => <Countries country ={country}></Countries>)
            }
        </div>
    );
};

export default Home;