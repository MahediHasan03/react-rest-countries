import React, { useState } from 'react';
import './Country.css'


const Country = ({country, handleVisitedCountries,handleVisitedFlags}) => {
    const [visited,setVisited]=useState(false)

    const handleVisited = () => {
        setVisited(!visited);
        handleVisitedCountries(country,)
        
    }

    // const handleFlags = () => {

    // }

    
    return (
        <div className={`countryCard ${visited && 'country-visited'}`}>
            <h3>Country Name: {country.name.common}</h3>
            <h3>Capital: {country.capital}</h3>
            <h3>Official Name: {country.name.official}</h3>
            <img src={country.flags.png} alt="" />
            <br />
        <button onClick={handleVisited} style={{margin:"10px"}}>
                {visited? 'Visited' : 'Not Visited'}
            </button>

            <button onClick={()=>handleVisitedFlags(country.flags.png)}>Visited Flag</button>

        </div>
    );
};

export default Country;