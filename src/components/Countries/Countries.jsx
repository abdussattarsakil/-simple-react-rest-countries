import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = ({ countriesPromise }) => {
    const countries = use(countriesPromise).countries;

    const [visitCountry,setVisitCountry]=useState([])

    return (
        <>
            <h3>Total Countries:- {countries.length}</h3>
            <h3>Total Visited Country Number: {visitCountry.length}</h3>
            <div className='card1'>
                {
                    countries.map(country => <Country
                        country={country}
                        visitCountry={visitCountry}
                        setVisitCountry={setVisitCountry}
                    ></Country>)
                }
            </div>
        </>
    );
};

export default Countries;