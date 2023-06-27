import React from 'react'

// A card that shows a quick overview of a project
const ProjectThumbnail = ({name, url, description}) => {
    return (
        <div className='flex flex-col items-center p-24 bg-transparent'>
            <h1>{name}</h1>
            <h2>{url}</h2>
            <h3>{description}</h3>
        </div>
    )
}

export default ProjectThumbnail