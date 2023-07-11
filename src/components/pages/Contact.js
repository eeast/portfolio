import React from 'react';

import Form from '../Form';

export default function Contact() {
    return (
        <>
            <h1>Contact</h1>
            <Form />
            <ul className="row justify-content-center">
                <li className='col-md-2 text-center'><a href="https://github.com/eeast">GitHub</a></li>
                <li className='col-md-2 text-center'><a href="https://www.linkedin.com/in/eric-easthope/">LinkedIn</a></li>
            </ul>
        </>
    );
}
