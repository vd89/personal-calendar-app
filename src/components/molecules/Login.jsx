import React from 'react'
import PropTypes from 'prop-types'

const Login = props => {
    return (
        <div>
            <form className="sign-up-form">
                <h1 className="wel">Personal Meeting Space</h1>
                <h2 className="title">Sign Up</h2>
                <div className="input-field">
                    <i className='bx bxs-user'></i>
                    <input type="text" placeholder="Username" />
                </div>
                <div className="input-field">
                    <i className='bx bxs-envelope'></i>
                    <input type="text" placeholder="Email" />
                </div>
                <div className="input-field">
                    <i className='bx bxs-lock-alt'></i>
                    <input type="password" placeholder="Password" />
                </div>
                <input type="submit" value="Sign Up" className="btn solid" />
                <p className="social-text">Or sign up with social platforms</p>

                <div className="social-media">
                    <a href="#" className="social-icon">
                        <i className='bx bxl-google'></i>
                    </a>
                    <a href="#" className="social-icon">
                        <i className='bx bxl-microsoft'></i>
                    </a>
                </div>
            </form>
        </div>
    )
}

Login.propTypes = {}

export default Login