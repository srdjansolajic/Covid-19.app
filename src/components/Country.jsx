import React from 'react'


const Country = ({ country, info, setPrikaz }) => {

    const showInfo = () => {
    let covidInfo = info.filter(el => el.Country === country.name ? setPrikaz(
        <>
        <section className='section-show'>
            <div key={Math.random()} id='info' className='div-covid'>
                <p className='p-information'>Latest information about covid-19 in: {el.Country}</p>
                <hr />
                <div className='div-span-number'>
                    <span className='span-number'>{el.NewConfirmed}</span>
                    <span className='span-number'>{el.NewDeaths}</span>
                    <span className='span-number'>{el.NewRecovered}</span>
                </div>
                <div className='div-span-text'>
                    <span className='span-text'>New Confirmed</span>
                    <span className='span-text'>New Deaths</span>
                    <span className='span-text'>New Recovered</span>
                </div>
                <div className='div-span-number'>
                    <span className='span-number'>{el.TotalConfirmed}</span>
                    <span className='span-number'>{el.TotalDeaths}</span>
                    <span className='span-number'>{el.TotalRecovered}</span>
                </div>
                <div className='div-span-text'>
                    <span className='span-text'>Total Confirmed</span>
                    <span className='span-text'>Total Deaths</span>
                    <span className='span-text'>Total Recovered</span>
                </div>
                <p className='p-date'>Updated on: {el.Date}</p>
            </div>
        </section>
        </>) : null)

      return covidInfo
     
    }

    return (
        <>
            <div className='div-flag'>
                <img src={country.flag} alt={`Flag of ${country.name}`} width='200px' height='150px' />
            {<>
            <p>Name: {country.name}</p>
            <p>Population: {country.population}</p>
            <a href='#info'><button className='button-more-info' onClick={showInfo}>More info...</button></a>
            </>}
            </div>
        </>    
    )
}

export default Country