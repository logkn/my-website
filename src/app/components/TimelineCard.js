import Image from 'next/image'
import React from 'react'

const TimelineCard = ({exp}) => {
  return (
    <div>
        <Image src={exp.image} width={100} height={100} />
        <h1>{exp.title}</h1>
        <h2>{exp.company}</h2>
        <h3>{exp.startdate} - {exp.enddate}</h3>
        <h3>{exp.location}</h3>
        <ul>
            {exp.description.map((desc) => (
                <li>{desc}</li>
            ))}
        </ul>
    </div>
  )
}

export default TimelineCard