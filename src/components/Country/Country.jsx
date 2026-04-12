import React from 'react';

const Country = ({ country }) => {
    const { name, area, population, flags ,continents ,region} = country
    return (
        <div className='card'>
            <div>
                <h2 className='normal text-h1'>Name: {name.common}</h2>
                <h3>{name.official}</h3>
                <p>Continents :- {continents.continents}</p>
                <p>Region:- {region.region}</p>
                <p>Area:-{area.area} , Population:-{population.population}</p>
            </div>

            <div>
                <img src={flags.flags.png} alt={flags.flags.alt} />
            </div>
        </div>
    );
};

export default Country;