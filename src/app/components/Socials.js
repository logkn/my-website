import React from 'react'
import { BsGithub, BsLinkedin } from 'react-icons/bs'

const Socials = () => {
  return (
    <div className="socials justify-end mr-10 flex flex-row gap-16">
        <a target="_blank" href="https://github.com/logkn/" rel="noopener noreferrer">
            <BsGithub size={40} />
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/logan-knapp/" rel="noopener noreferrer">
            <BsLinkedin size={40} />
        </a>
    </div>
  )
}

export default Socials