import React from 'react'
import Header from '../components/Header'

const About = () => {
  return (
    <div>
        <Header current_page={"About"}/>
        <div className='flex flex-col items-center p-24'>
            <h1>About</h1>
        </div>
    </div>
  )
}

export default About