import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';

const Form = ({ setLoggedIn, countries }) => {

    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const history = useHistory();


    const showAllInformation = () => {
        if (countries.some(el => el.name === username ) &&  countries.some(el => el.capital === password)) {
            setLoggedIn(true)
            history.push('/show')
        }
    }

    return (
        <section className='select-form'>
            <div id='show-login' className='div-form'>
           
            <form>
                <div className="form-group">
                    <p className='p-form'>Username</p>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  placeholder='Country name' onChange={(e) => setUsername(e.target.value)}/>
                </div>

                <div className="form-group">
                    <p className='p-form'>Password</p>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder='Capital city' onChange={(e) => setPassword(e.target.value)}/>
                </div>

                <button type="submit" className="btn btn-primary" onClick={showAllInformation}>Submit</button>
            </form>

            </div>
        </section>
    )
}

export default Form