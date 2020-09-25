import React from 'react'
import Button from './Button'
import Input from './Input'
import Select from './Select'

const Choice = ({ setRegion, setFilter, infoAll, countries, setInfo }) => {


    return (
        <div id='show-flag' className='div-choice'>
            <Select setRegion={setRegion} />
            <Button infoAll={infoAll} setInfo={setInfo} />
            <Input setFilter={setFilter} />
        </div>
    )
}

export default Choice