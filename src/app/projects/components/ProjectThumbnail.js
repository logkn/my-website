import React from 'react'
import { FaGithub } from 'react-icons/fa'

// A cool looking react card that shows the project details
const ProjectThumbnail = ({name, giturl, header, image, pageurl}) => {
    pageurl = `/projects/${pageurl.split("/").pop()}`
    console.log(pageurl)
    return (
        <div className="bg-white rounded-lg shadow-lg p-4 max-w-sm">
          {image && <img src={image} alt={name} className="w-full h-auto mb-4 rounded-lg" />}
          {/* {pageurl &&<a href={pageurl.replace("/md/", "/")}> <h2 className="text-xl hover:text-rose-700 text-black font-bold mb-2">
            {name}
          </h2></a>} */}
          {/* {!pageurl && <h2 className="text-xl text-black font-bold mb-2">
            {name}
          </h2>} */}
          <h2 className="text-xl text-black font-bold mb-2">
            {name}
          </h2>
          
          <p className="text-gray-700 mb-4">{header}</p>
          {giturl && (
            <a href={giturl} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-600 hover:text-gray-900">
              <FaGithub className="mr-2" />
              <p>View {name} on <b>GitHub</b></p>
            </a>
          )}
        </div>
      );
}

export default ProjectThumbnail