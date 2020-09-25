import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Country from './Country'

const Flag = ({ flag, region, filter, info, setPrikaz }) => {

    const [count,setCount] = useState(0)

    useEffect(() => {
        setCount(0)
    },[flag])

    return (
        <>
        <section className='section-flag'>
            <div className='div-flag-list'>
                {flag.filter(el => el.name.toLowerCase().includes(filter.toLowerCase())).slice(count,count+10).map(country => <Country key={country.alpha2Code} country={country} region={region} info={info} setPrikaz={setPrikaz} />)}
            </div>
            <div className='div-button'>
            <button className='button-back-next' disabled={count === 0} onClick={() => setCount(count - 10)}>BACK</button>
            <button className='button-back-next' disabled={count > flag.length - 10} onClick={() => setCount(count + 10)}>NEXT</button>
            </div>
            </section>
        </>
    )
}

export default Flag