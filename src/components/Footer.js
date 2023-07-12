import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <footer className='footer sticky-bottom py-3 bg-light'>
            <div className="container">
                <section className="justify-content-center">
                    <span>&copy; 2023 Eric Easthope</span>
                    <a className="mx-2" href="https://github.com/eeast"><FontAwesomeIcon icon={ faGithub } /> GitHub</a>
                    <a className="mx-2" href="https://www.linkedin.com/in/eric-easthope/"><FontAwesomeIcon icon={ faLinkedin } /> LinkedIn</a>
                </section>
            </div>
        </footer>
    )
}

export default Footer
