import React from 'react'

const Button = ({ infoAll, setInfo }) => {

    return (
        <>
            <button className='button-choice' onClick={() => setInfo(infoAll.filter(el => el.NewConfirmed > 0))}>New Confirmed</button>
            <button className='button-choice' onClick={() => setInfo(infoAll.filter(el => el.NewConfirmed === 0))}>No Confirmed</button>
            <button className='button-choice' onClick={() => setInfo(infoAll.filter(el => el.NewDeaths > 0))}>New Deaths</button>
        </>
    )
}

export default Button