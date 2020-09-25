import React from 'react'

const Select = ({ setRegion }) => {

    // const hadnleClick = (e) => {
    //     e.preventDefault()
    //     setRegion(e.target.value)
    // }

    return (
        <select className='select-choice' onChange={(e) => e.target.value !== 'all' ? setRegion(e.target.value) : setRegion(undefined)}>
            <option value={'all'}>Choice region</option>
            <option value={'africa'}>Africa</option>
            <option value={'europe'}>Europe</option>
            <option value={'americas'}>Americas</option>
            <option value={'asia'}>Asia</option>
            <option value={'oceania'}>Oceania</option>
        </select>
    )
}

export default Select