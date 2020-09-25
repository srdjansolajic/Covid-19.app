import React from 'react'
import { Link, useHistory } from 'react-router-dom';
import '../global.css'

const Global = ({ isLoggedIn }) => {

    const history = useHistory();

    return (
        <section className='section-global'>
            <div>
                {isLoggedIn === false ? <nav className='nav-global'>
                    {/* <a href='#show-login' className='a-global'> */}
                        <button className='button-global' onClick={() => history.push('/login')}>
                            <Link className='link-global' to='/show'>Show information</Link>
                        </button>
                    {/* </a> */}
                    
                    {/* <a href='#show-login' className='a-global'> */}
                        <button className='button-global'> 
                            <Link className='link-global' to='/login'>log In</Link>
                        </button>
                    {/* </a> */}
                    
                </nav> : null}
            </div>
        </section>
    )
}

export default Global