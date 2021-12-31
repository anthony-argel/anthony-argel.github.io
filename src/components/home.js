import React, { useState } from 'react';
import resume from '../assets/Resume.pdf';
import blogimg from '../assets/images/blog.png';
import asmrdbimg from '../assets/images/asmrdb.png';
import inteviewprepimg from '../assets/images/interviewprep.png';
import tunystechimg from '../assets/images/tunystech.png'
import {FaGithub, FaLinkedin, FaArrowAltCircleLeft, FaArrowAltCircleRight} from 'react-icons/fa';
import {AiOutlineMail} from 'react-icons/ai';
function Home(props) {
    const projects = [
        {
            title: "Tuny's Tech",
            description: "A compilation of resources and personal creations that will help people learn about the world of I.T.",
            img: tunystechimg,
            url: 'https://www.tunystech.com',
            backend: "https://github.com/anthony-argel/tunystech-api",
            frontend: "https://github.com/anthony-argel/tunystech-frontend"
        },
        {
            title: "InterviewPrep.net",
            description: "Ask and browse interview questions, upload and watch youtube responses to questions, give and receive feedback.",
            img: inteviewprepimg,
            url: 'https://www.interviewprep.net/',
            backend: "https://github.com/anthony-argel/interviewprep-api",
            frontend: "https://github.com/anthony-argel/interviewprep-frontend"
        },
        {
            title: "Blog",
            description: "A content management system for my thoughts.",
            img: blogimg,
            url: "https://www.anthonyargel.com/blog",
            backend: "https://github.com/anthony-argel/blog-API",
            frontend: "https://github.com/anthony-argel/blog"
        },
        {
            title: "ASMR database",
            description: "A wiki-esque website for ASMR enthusiasts to gather data, search for new content, and discuss all things ASMR.",
            img: asmrdbimg,
            url:'https://www.asmrdb.net/',
            backend: "https://github.com/anthony-argel/asmrdb-api",
            frontend: "https://github.com/anthony-argel/asmrdb-frontend"
        }
    ];
    
    const [currentProjectInd, setCurrentProjectInd] = useState(0);

    function nextProject(num) {
        let nextNumber = currentProjectInd + num;
        if(nextNumber < 0 ) {
            nextNumber = projects.length - 1;
        }
        if(nextNumber >= projects.length) {
            nextNumber = 0;
        }
        setCurrentProjectInd(nextNumber);
    }

    return (
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-12 col-lg-3 information d-flex flex-column justify-content-center'>
                <div>
                    <h1 className='fw-bold' style={{fontSize:'max(2.4vw, 4vh)'}}>Anthony Argel</h1>
                    <h4 style={{fontSize:'max(1.2vw, 3vh)'}}>Full Stack Developer</h4>
                    <a href={resume} download className='h2' style={{textDecoration:'none', fontSize:'max(1.2vw, 3vh)'}}>Resume</a><br/>
                    <div className='d-flex justify-content-around mt-3'>
                    <a href='mailto:anthony.r.argel@gmail.com'><AiOutlineMail color='black' size='max(1.7vw, 4vh)'/></a>
                    <a href='https://www.linkedin.com/in/anthony-argel-24735116a/'><FaLinkedin color='black' size='max(1.7vw, 4vh)'/></a>
                    <a href='https://github.com/anthony-argel'><FaGithub color='black' size='max(1.7vw, 4vh)'/></a>
                    </div>
                </div>
            </div>




            <div className='col-12 col-lg-9 p-3 projects'>
                    <h3 className='text-center mb-0' style={{fontSize:'max(2.5vw, 4vh)'}}>Projects</h3>
                    <hr style={{marginBottom:'min(10px, .5vh)', marginTop:'min(100px, .5vh)'}}/>
                <div className='grid-container'>

                <div className='grid-item item-1'>
                    <img src={projects[currentProjectInd].img} className='project-img d-block mx-auto' alt=''/>
                </div>

                <div className='grid-item item-2 mx-auto my-auto'>
                <FaArrowAltCircleLeft cursor='pointer' size='max(1.7vw, 4vh)' onClick={() => nextProject(-1)}/>
                </div>

                <div className='grid-item item-3 mx-auto my-auto'>
                <FaArrowAltCircleRight cursor='pointer' size='max(1.7vw, 4vh)' onClick={() => nextProject(1)}/>
                </div>


                <div className='grid-item item-4'>
                    <p className='fw-bold' style={{fontSize:'max(1.3vw, 4vh)'}}>{projects[currentProjectInd].title}</p>
                    <p style={{fontSize:'max(1.3vw, 2vh)'}}>{projects[currentProjectInd].description}</p>
                    <div className='d-flex justify-content-center'>
                        <a href={projects[currentProjectInd].url}  style={{fontSize:'max(1vw, 2vh)'}} target='_blank' rel='noopener noreferrer' className='btn btn-secondary mx-3'>Visit Site</a>
                        <a href={projects[currentProjectInd].backend}  style={{fontSize:'max(1vw, 2vh)'}} target='_blank' rel='noopener noreferrer'  className='btn btn-primary mx-3'>Backend code</a>
                        <a href={projects[currentProjectInd].frontend}  style={{fontSize:'max(1vw, 2vh)'}} target='_blank' rel='noopener noreferrer'  className='btn btn-primary mx-3'>Frontend code</a>
                    </div>
                </div>
            </div>
            </div>

        </div>
    </div>)
}

export default Home;