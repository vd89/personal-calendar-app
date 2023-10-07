import React from 'react'
import PropTypes from 'prop-types'
import LeftImg from '../../assets/Vm_img.png'
import RightImg from '../../assets/Authentication_Outline.png'


const PanelMolecule = props => {


    return (
        <>
            <div className="panels-container">
                <div className="panel left-panel">
                    <div className="content">
                        <h3>New here?</h3>

                        <button className="btn transparent" id="sign-up-btn">Sign up</button>
                    </div>
                    <img src={LeftImg} className="image" alt="" />
                </div>
                <div className="panel right-panel">
                    <div className="content">
                        <h3>One of us?</h3>
                        <p>
                            Login Using Your Credentials
                        </p>
                        <button className="btn transparent" id="sign-in-btn">Sign in</button>
                    </div>
                    <img src={RightImg} className="image" alt="" />
                </div>
            </div>
        </>
    )
}

PanelMolecule.propTypes = {

}

export default PanelMolecule