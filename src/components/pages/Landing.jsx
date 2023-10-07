import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Login from '../molecules/Login'
import SignUp from '../molecules/SignUp'
import PanelMolecule from '../molecules/PanelMolecule'

const Landing = (props) => {
  const [isActive, setIsActive] = useState(false)
  const isRegisterCheck = () => {
    setIsActive(!isActive)
  }
  return (
    <div className={`container ${isActive ? 'sign-in-mode' : `sign-up-mode`}`} >
      <PanelMolecule isRegisterCheck={isRegisterCheck} />
      <div className="forms-container">
        <div className="signin-signup">
          <SignUp />
          <Login />
        </div>
      </div>
    </div>
  )
}

Landing.propTypes = {}

export default Landing