import React from 'react'
import { BsGithub, BsLinkedin } from 'react-icons/bs'

const Socials = () => {
  return (
    <div className='flex gap-24'>
        <a target="_blank" href="https://github.com/logkn/" rel="noopener noreferrer">
            <BsGithub size={80} />
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/logan-knapp/" rel="noopener noreferrer">
            <BsLinkedin size={80} />
        </a>
    </div>
  )
}

export default Socials