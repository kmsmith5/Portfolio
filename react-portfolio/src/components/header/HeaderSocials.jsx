import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

function HeaderSocials() {
  return (
    <div className='header_socials'>
        <a href='https://www.linkedin.com/in/kevin-michael-smith-83157b182/' target='_blank'><BsLinkedin/></a>
        <a href='https://github.com/kmsmith5' target='_blank'><FaGithub/></a>
    </div>
  )
}

export default HeaderSocials