import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { GoogleLogin, } from '@react-oauth/google';
import { logOut } from '../../helper/google.helper';
import axios from 'axios';
import jwt_decode from "jwt-decode";
import { OAuth2Client } from 'google-auth-library';

const Login = props => {
    const [user, setUser] = useState({})

    const getDecodedOAuthJwtGoogle = async token => {


        const onSuccessHandler = async (_credential) => {

        }

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
                        onSuccess={credentialResponse => onSuccessHandler(credentialResponse)}
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