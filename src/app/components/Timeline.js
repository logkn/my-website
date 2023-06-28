import React from 'react'
import TimelineCard from './TimelineCard'

const contents = [
    {
      "title": "Software Engineering Intern",
      "company": "Private Client Resources",
      "startdate": "Jun 2022",
      "enddate": "Aug. 2022",
      "location": "Wilton, CT",
      "description": [
        "Researched, designed, and launched platform-wide xUnit testing framework for data pipeline.",
        "Created 100+ black-box unit test suite for API metalabeling system.",
        "Gave consultation to team on integrating test-driven development, which provided the foundation for a more scalable software design methodology."
      ],
      "image": "pcr.png"
    },
    {
      "title": "Data Science and Full Stack Development Intern",
      "company": "Vettd",
      "startdate": "May 2020",
      "enddate": "Mar 2022",
      "location": "Seattle, WA",
      "description": [
        "Created five web applications with Python, JavaScript, React, and Java to analyze language data.",
        "Led planning stage of music analysis project for Disney, leading to Disney becoming a client.",
        "Researched implementation of OpenAI’s GPT-2 in comparison to our framework, resulting in the start of a deep learning research team."
      ],
        "image": "vettd.png"
    },
  ]
  

const Timeline = () => {


  return (
    <div>
        {contents.map((exp, index) => (
            <TimelineCard key={index} exp={exp} />
        ))}
    </div>
  )
}

export default Timeline