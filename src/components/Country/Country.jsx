import React, { useState } from 'react';
import './Country.css'

const Country = ({ country, setVisitCountry }) => {
    const { name, area, population, flags, continents, region } = country

    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        setVisitCountry((prev) => {
            const isExist = prev.includes(name.common);

            if (isExist) return prev;

            return [...prev, name.common];
        });

        setVisited(true);
    };


    const handleNotVisited = () => {
        setVisitCountry((prev) => {
            return prev.filter(country => country !== name.common);
        });

        setVisited(false);
        
    }

    return (
        <>
            <div >
                <div className={`card ${visited && 'country-visited'}`}>
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

                    <div className='btn'>
                        <button onClick={handleVisited}>
                            Visited ??
                        </button>
                        <button onClick={handleNotVisited}>
                            Not Visited ??
                        </button>

                    </div>
                    <button className='visited-info'>
                        {
                            visited ? <p className='visited'>Visited</p> : <p className='notVisited'> Not Visited</p>
                        }
                    </button>
                </div>

            </div>
        </>
    );
};

export default Country;