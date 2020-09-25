import React from 'react'
import '../global.css'

const AllInformation = ({ global }) => {

    return (
        <>
        <h1>COVID - 19</h1>
        <div className='div-global'>
            <p className='p-global'>New Confirmed: {global.NewConfirmed}</p>
            <p className='p-global'>Total Confirmed: {global.TotalConfirmed}</p>
            <p className='p-global'>New Deaths: {global.NewDeaths}</p>
            <p className='p-global'>Total Deaths: {global.TotalDeaths}</p>
            <p className='p-global'>New Recovered: {global.NewRecovered}</p>
            <p className='p-global'>Total Recovered: {global.TotalRecovered}</p>
        </div>
        </>
    )
}

export default AllInformation