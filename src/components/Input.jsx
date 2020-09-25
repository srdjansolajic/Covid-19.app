import React from 'react'

const Input = ({ setFilter }) => {



    return (
        <>
            <input className='input-choice' type='text' placeholder=' Search Country...' onChange={(e) => setFilter(e.target.value)}  />
        </>
    )
}

export default Input