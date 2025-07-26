import React, { use, useState } from 'react';
import Country from './Country/Country';


const Countries = ({ countriesPromise, }) => {
    const countries = use(countriesPromise);

    const [visitedCountry, setVisitedCountry] = useState([]);
    const [visitedFlags, steVisitedFlags] = useState([])
    const handleVisitedCountries = (country,) => {
        const newVisitedCountries = [...visitedCountry, country]
        setVisitedCountry(newVisitedCountries)
    }
    const handleVisitedFlags = (flag) => {
        const newVisitedFlags = [...visitedFlags, flag]
        steVisitedFlags(newVisitedFlags)
    }

    return (
        <div >
            <div className='visited-country-flag'>
                {
                    visitedFlags.map((flag,index) => <img key={index} src={flag}></img>)
                }
            </div>
            <h3>Country Number:{countries.length} </h3>
            <h4>Visited Country: {visitedCountry.length}</h4>

            <div className='Countries'>
                {
                    countries.map(country => <Country key={country.name.official} country={country} handleVisitedCountries={handleVisitedCountries} handleVisitedFlags={handleVisitedFlags}></Country>)
                }
            </div>
        </div>

    );
};

export default Countries;