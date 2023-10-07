import React from 'react'
import PropTypes from 'prop-types'

const SignUp = props => {
  return (
    <div>
       <form className="sign-in-form">
                <h2 className="title">Sign In</h2>
                <div className="input-field">
                    <i className='bx bxs-user'></i>
                    <input type="text" placeholder="Username"/>
                </div>
                <div className="input-field">
                    <i className='bx bxs-lock-alt'></i>
                    <input type="password" placeholder="Password"/>
                </div>
                <input type="submit" value="Login" className="btn solid"/>
                <p className="social-text">Or sign in with social platforms</p>

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

SignUp.propTypes = {}

export default SignUp