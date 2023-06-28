import React from 'react'
import Header from '../components/Header'
import ProjectThumbnail from './components/ProjectThumbnail'

const projects = [
    {
        name: "Project 1",
        url: "https://www.google.com",
        description: "This is a project"
    },
    {
        name: "Project 2",
        url: "https://www.google.com",
        description: "This is a project"
    },
]

const Projects = () => {
  return (
    <div>
        <Header current_page={"Projects"}/>
        <div className='flex flex-col items-center p-24'>
            <h1>Projects</h1>
            <div className='flex gap-24'>
                {projects.map((project) => (
                    <ProjectThumbnail key={project.name} name={project.name} url={project.url} description={project.description}/>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Projects