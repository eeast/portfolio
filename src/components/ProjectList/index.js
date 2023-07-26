import React from 'react'
import ProjectCard from './ProjectCard'
import images from './images'

import './style.css'

const ProjectList = () => {
    const projects = [
        {
            name: "Schedaddy",
            description: "Scheduling and Employee Management Web App",
            tools: "Node, Express, MongoDB, React, GraphQL, JWT",
            github: "https://github.com/cmcnamara15/Schedaddy",
            deployedURL: "https://schedaddy-0dffdc6ab2cd.herokuapp.com/",
            imgLink: images.schedaddyImg,
        },
        {
            name: "J.A.T.E.",
            description: "Just Another Text Editor",
            tools: "Node, Express, IndexedDB, Webpack, Workbox",
            github: "https://github.com/eeast/eeast-jate",
            deployedURL: "https://eeast-jate-7038722a6abc.herokuapp.com/",
            imgLink: images.jateImg,
        },
        {
            name: "NoSQL Blog API",
            description: "Blog API application using NoSQL",
            tools: "Node, Express, Mongoose",
            github: "https://github.com/eeast/NoSQL-Blog-API",
            deployedURL: "",
            imgLink: images.noSQLImg,
        },
        {
            name: "Tech Blog Web App",
            description: "Simple web blog application",
            tools: "Sequelize, MySQL, BCrypt, Handlebars",
            github: "https://github.com/eeast/Tech-Blog",
            deployedURL: "https://eeast-tech-blog-a2d8c6ae77bb.herokuapp.com/",
            imgLink: images.techBlogImg,
        },
        {
            name: "E-Commerce API",
            description: "API application for E-commerce",
            tools: "Sequelize, Express, and MySQL2",
            github: "https://github.com/eeast/E-Commerce-Back-End-Application",
            deployedURL: "",
            imgLink: images.ecommImg,
        },
        {
            name: "Employee Tracker CLI App",
            description: "CLI application for employee management",
            tools: "MySQL, Node, Inquirer",
            github: "https://github.com/eeast/Employee-Manager",
            deployedURL: "",
            imgLink: images.empMgrImg,
        },
        {
            name: "Note Taker Web App",
            description: "Web application for taking notes",
            tools: "Node, Express",
            github: "https://github.com/eeast/note-taker-web-app",
            deployedURL: "https://note-taker-web-app.herokuapp.com/",
            imgLink: images.noteTakerImg,
        },
    ]

    return (
        <ul>
            {projects.map((project) => (
                <ProjectCard
                    name={project.name}
                    tools={project.tools}
                    github={project.github}
                    deployedURL={project.deployedURL}
                    imgLink={project.imgLink}
                />
            ))}
        </ul>
    )
}

export default ProjectList
