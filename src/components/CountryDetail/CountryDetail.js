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
               <div className="container my-5">
              <div className="row">
            <div className="col-md-6">
                <p><img className="img-fluid" src={country.flag} alt=""/></p>
            </div>
            <div className="col-md-6">
            <h1>name: {name}</h1>
            <ul>
             <li>Capital: {country.capital}</li>
                <li>Region: {country.region}</li>
                <li>Area: {country.area}</li>
                <li>Population: {country.population}</li>
            </ul>
                
            </div>
        </div>
             </div>
             </div>
    );
};

export default CountryDetail;