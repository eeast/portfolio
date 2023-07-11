import React from 'react';

export default function About({ handlePageChange }) {
    return (
        <>
            <h1>About Me</h1>
            <p>
            Hello! My name is Eric Easthope. I left my job in public accounting back in 2020 to study CS and cut my teeth on the basics of programming and development. I started with the core CS curriculum at BYU, where I learned the fundamentals of C++, Java, and Python. During that time, I worked as a CS tutor through Juni Learning, which gave me the opportunity to be fully submersed in programming full-time. After about a year, I made the move to South Korea with my wife, where we worked as English teachers, where I continued to build on what I had learned about programming.
            <br></br>
            <br></br>
            For the past year or so I have been focused on studying Web Development, and have been able to practice using the full MERN stack, as well as serveral other Node libraries in a variety of projects. Currently, I am beginning to look for my breakout role as a developer and to continue developing my skills. In my current role I've been able to implement a few Python scripts to assist with the mass processing of files and data, exporting the results into an Excel document for review. I'm looking forward to getting more involved and finding opportunities along the way.
            <br></br>
            <br></br>
            Feel free to look though my <a href="https://github.com/eeast" target='blank'>github profile</a> and/or send me a note through the <a 
            href="#contact" 
            onClick={() => handlePageChange('Contact')}
            >Contact</a> page. Happy coding!
            </p>
        </>
    );
}
