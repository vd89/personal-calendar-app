import React from 'react'
import PropTypes from 'prop-types'
import Login from '../molecules/Login'
import SignUp from '../molecules/SignUp'
import PanelMolecule from '../molecules/PanelMolecule'

const Landing = (props) => {
  return (
    <div className='container'>
      <PanelMolecule/>
      <div className="forms-container">
        <div className="signin-signup">

      <SignUp/>
      <Login/>
        </div>
      </div>
    </div>
  )
}

Landing.propTypes = {}

export default Landing