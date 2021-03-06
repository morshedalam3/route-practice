import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const CountryDetail = () => {
  const {name} = useParams();
  const [country, setCountry] = useState([]);
//   const {name, flag, capital, population, region, area} = country;
  useEffect(() => {
      const url = `https://restcountries.eu/rest/v2/name/${name}`;
      fetch(url)
      .then(res => res.json())
      .then(data => setCountry(data[0])) 
  }, [])
    return (
        <div>
            <div>
                <p><img src={country.flag} alt=""/></p>
            </div>
            <div>
            <h1>name: {name}</h1>
            </div>
           <div>
    
                <p>Capital: {country.capital}</p>
                <p>Region: {country.region}</p>
                <p>Area: {country.area}</p>
                <p>Population: {country.population}</p>
            
           </div>
        
        </div>
    );
};

export default CountryDetail;