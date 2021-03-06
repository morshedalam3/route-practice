import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Countries = (props) => {
    console.log(props)
    const {name, flag, alpha3Code} = props.country;
    const history = useHistory();

    const handleClick = (name) => {
        const url = `/Country/${name}`;
        history.push(url);
    }
    const styleCountry = {
        border: '1px solid purple',
        borderRadius: '5px',
        marginTop: '10px',
        marginLeft: '10px',
        padding: '20px',
        display: 'flex',
        width: '70%'
    }
    const button ={
        backgroundColor:'red',
        border: '1px solid red',
        padding: '5px',
        borderRadius: '5px',
        color: 'white',
        marginLeft: '0'
    }
    return (
        <div style={styleCountry}>
            <div>
                <img  style={{height:'150px', width:'150px'}} src={flag} alt=""/>
            </div>
            <ul style={{marginLeft:'60px',marginTop:'40px'}}>
                <h1>{name}</h1>
                {/* <p><Link to={`country/${name}`}>show detail</Link></p> */}
                <button style={button} onClick={() => handleClick(name)}>Show Detail</button>
            </ul>
        </div>
    );
};

export default Countries;