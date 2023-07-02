import React from 'react'
import Header from '../components/Header'
import ProjectThumbnail from './components/ProjectThumbnail'
import projects_json from 'public/projects/projects.json'

const Projects = () => {

  return (
    <div>
        <Header current_page={"Projects"}/>
        <div className="flex flex-col justify-center">
            <div>
                <h1 className='p-4 mt-4 shadow-md backdrop-blur-sm backdrop-brightness-200 shadow-neutral text-6xl text-white bg-white/20 font-mono'>
                    /projects
                </h1>
            </div>
            <div className='flex grid-flow-row gap-16 m-8'>
                {projects_json.map((project) => (
                    <ProjectThumbnail 
                        key={project.title} 
                        name={project.title} 
                        giturl={project.git} 
                        header={project.header}
                        pageurl={project.md}
                    />
                ))}
            </div>
        </div>
    </div>
  )
}

export default Projects