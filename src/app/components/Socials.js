import React from 'react'
import { BsGithub, BsLinkedin } from 'react-icons/bs'

const Socials = () => {
  return (
    <div className="socials text-white/70 backdrop-blur-md justify-end mr-6 flex flex-row gap-10">
        <a className="hover:text-white" target="_blank" href="https://github.com/logkn/" rel="noopener noreferrer">
            <BsGithub size={50} />
        </a>
        <a className="hover:text-white" target="_blank" href="https://www.linkedin.com/in/logan-knapp/" rel="noopener noreferrer">
            <BsLinkedin size={50} />
        </a>
    </div>
  )
}

export default Socials