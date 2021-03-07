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
        backgroundColor: 'purple',
        borderRadius: '5px',
        margin: '20px',
        padding: '20px',
        height: '400px',
        width: '300px'
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

        // <div style={{marginLeft: '60px'}}>
        //     <div style={styleCountry}>
        //     <Card style={{ width: '25rem' }}>
        //     <Card.Img style={{height:'200px',}} variant="top" src={flag} />
        //     <Card.Body>
        //         <Card.Title>Name: {name}</Card.Title>
        //         <Card.Text>
                    
        //         </Card.Text>
        //         <Button variant="primary" onClick={() => handleClick(name)}>Show Detail</Button>
        //     </Card.Body>
        // </Card>
        // </div>
        // </div>


         <section style={{marginLeft: '100px'}}>
               <div className="col-md-3">
                <div style={styleCountry}>
                <div>
                    <img  style={{height:'150px',width:'200px'}} src={flag} alt=""/>
                </div>
                <div style={{marginLeft:'20px',marginTop:'40px'}}>
                    <h4>Name: {name}</h4>
                    <h5>Capital: {capital}</h5>
                    {/* <p><Link to={`country/${name}`}>show detail</Link></p> */}
                    <button style={button} onClick={() => handleClick(name)}>Show Detail</button>
                </div>
            </div>
           </div>
         </section>
    );
};

export default Countries;