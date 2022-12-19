import React from 'react'
import './Profil.css'
import PersonalInfo from '../personalInfo/PersonalInfo'
import Name from '../name/Name'
import Email from '../email/Email'
import Address from '../address/Address'

function Profil() {
  return (
    <div className='user'>
      <PersonalInfo/>
      <Name/>
      <Email/>
      <Address/>
    </div>
  )
}

export default Profil