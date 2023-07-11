import React from 'react'

import './style.css'

const ProjectCard = ({ name, tools, github, deployedURL, imgLink }) => {
    return (
        <li className="card" onClick={() => { window.open(deployedURL !== "" ? deployedURL : github, "_blank") }} style={{ backgroundImage: `url(${imgLink})` }} >
            <div className="card-body" href={deployedURL !== "" ? deployedURL : github} >
                <div className="card-title">{name}</div>
                <div className="card-text">{tools}</div>
                <div className="card-spacer"></div>
                <div className="text-end">
                    <button id="github-link" onClick={(e) => {
                        e.stopPropagation();
                        window.open(github, "_blank");
                    }}>View Repo</button>
                </div>
            </div>

        </li>
    )
}

export default ProjectCard