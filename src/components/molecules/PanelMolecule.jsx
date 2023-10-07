import React from 'react'
import PropTypes from 'prop-types'
import LeftImg from '../../assets/Vm_img.png'
import RightImg from '../../assets/Authentication_Outline.png'


const PanelMolecule = props => {

    const { isRegisterCheck } = props

    return (
        <>
            <div className="panels-container">
                <div className="panel left-panel">
                    <div className="content">
                        <h3>New here?</h3>
                        <button className="btn transparent" onClick={() => isRegisterCheck()} id="sign-up-btn">Register User </button>
                    </div>
                    <img src={LeftImg} className="image" alt="" />
                </div>
                <div className="panel right-panel">
                    <div className="content">
                        <h3>One of us?</h3>
                        <p>
                            Login Using Your Credentials
                        </p>
                        <button className="btn transparent" onClick={() => isRegisterCheck()} id="sign-in-btn">Login User</button>
                    </div>
                    <img src={RightImg} className="image" alt="" />
                </div>
            </div>
        </>
    )
}

PanelMolecule.propTypes = {
    isRegisterCheck: PropTypes.func
}

export default PanelMolecule