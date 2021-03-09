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
            <h1 style={{textAlign: 'center', backgroundColor: 'black', color: 'white'}}>All countries: {country.length}</h1>
            <div className="container">
            <div className="row my-5">
            {
                country.map(country => <Countries country ={country}></Countries>)
            }
            </div>
            </div>
           
        </div>
    );
};

export default Home;