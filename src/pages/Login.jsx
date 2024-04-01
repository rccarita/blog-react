import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {

    const [userData, setUserData] = useState({
        email: '',
        password: '',
    })

    const changeInputHandler = (e) => {
        setUserData(prevState => {
            return {
                ...prevState,
                [e.target.name]: e.target.value
            }
        })
    }

    return (
        <section className="login">
            <div className="container">
                <h2>Sign In</h2>
                <form action="" className="form login__form">
                    <p className="form__error-message">This is an error message</p>
                    <input type="text" placeholder='Email' name='email' value={userData.email}
                        onChange={changeInputHandler} />
                    <input type="text" placeholder='Password' name='password' value={userData.password}
                        onChange={changeInputHandler} />
                    <button className='btn primary' type='submit'>Login</button>
                    <small>Dont have an account?<Link to='/register'>sign un</Link></small>
                </form>
            </div>
        </section>
    )
}

export default Login