import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { GoogleLogin, useGoogleLogin, useGoogleOneTapLogin } from '@react-oauth/google';
import { logOut } from '../../helper/google.helper';

const Login = props => {
    // const [user, setUser] = useState([])
    // const googleLogin = useGoogleLogin({
    //     onSuccess: async tokenResponse => await console.log(tokenResponse),
    //     // onSuccess: (codeResponse) => console.log(codeResponse),
    //     onError: (error) => console.log('Login Failed:', error)
    // });

    return (
        <div>
            <form className="sign-up-form">
                <h1 className="wel">Personal Meeting Space</h1>
                <h2 className="title">Register USers</h2>
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
                <button type="submit" className="btn solid" >Sign UP</button>
                <p className="social-text">Or sign up with social platforms</p>

                <div className="social-media">
                    {/* <button onClick={() => googleLogin()} className="social-icon">
                        <i className='bx bxl-google'></i>
                    </button> */}
                    <GoogleLogin
                        onSuccess={credentialResponse => {
                            console.log("token", credentialResponse);
                        }}
                        onError={() => {
                            console.log('Login Failed');
                        }}
                    />;
                    {/* <button onClick={() => logOut()} className="social-icon">
                        <i className='bx bxl-microsoft'></i>
                    </button> */}
                </div>
            </form>
        </div>
    )
}

Login.propTypes = {}

export default Login