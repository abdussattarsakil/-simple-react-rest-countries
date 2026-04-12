import React, { use } from 'react';
import Country from '../Country/Country';
import './Countries.css'
const Countries = ({ countriesPromise }) => {
    const countries = use(countriesPromise).countries;
    return (
        <>
            Total Countries:- {countries.length}
            <div className='card1'>
                {
                    countries.map(country => <Country country={country}></Country>)
                }
            </div>
        </>
    );
};

export default Countries;