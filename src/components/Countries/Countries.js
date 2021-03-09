import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap'

const Countries = (props) => {
    console.log(props)
    const { name, flag, capital } = props.country;
    const history = useHistory();

    const handleClick = (name) => {
        const url = `/Country/${name}`;
        history.push(url);
    }

    const styleCountry = {
        borderRadius: '5px',
        margin: '20px',
        padding: '30px',
      
    }
    const button = {
        backgroundColor: 'red',
        border: '1px solid red',
        padding: '5px',
        borderRadius: '5px',
        color: 'white',
        marginLeft: '0',
        marginTop: '30px'

    }
    return (
         
               <div style={styleCountry} className="col-md-3">
            
                <div>
                    <img className="img-fluid" src={flag} alt=""/>
                </div>

                <div>
                    <h4>Name: {name}</h4>
                    <h5>Capital: {capital}</h5>
                    {/* <p><Link to={`country/${name}`}>show detail</Link></p> */}
                    <button style={button} onClick={() => handleClick(name)}>Show Detail</button>
                </div>
            
           </div>
    );
};

export default Countries;