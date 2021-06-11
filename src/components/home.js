import React, { useState } from 'react';
import resume from '../assets/Resume.pdf';
import blogimg from '../assets/images/blog.png';
import asmrdbimg from '../assets/images/asmrdb.png';
import inteviewprepimg from '../assets/images/interviewprep.png';
import {FaGithub, FaLinkedin, FaArrowAltCircleLeft, FaArrowAltCircleRight} from 'react-icons/fa';
import {AiOutlineMail} from 'react-icons/ai';
function Home(props) {
    const projects = [
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
                    <h1 className='display-4 fw-bold'>Anthony Argel</h1>
                    <h4>Fullstack Developer</h4>
                    <a href={resume} download className='h2' style={{textDecoration:'none'}}>Resume</a><br/>
                    <div className='d-flex justify-content-around mt-3'>
                    <a href='mailto:anthony.r.argel@gmail.com'><AiOutlineMail color='black' size='1.7em'/></a>
                    <a href='https://www.linkedin.com/in/anthony-argel-24735116a/'><FaGithub color='black' size='1.7em'/></a>
                    <a href='https://github.com/anthony-argel'><FaLinkedin color='black' size='1.7em'/></a>
                    </div>
                </div>
            </div>




            <div className='col-12 col-lg-9 p-3 projects'>
                    <h3 className='text-center display-4 mb-0'>Projects</h3>
                    <hr/>
                <div className='grid-container'>

                <div className='grid-item item-1'>
                    <img src={projects[currentProjectInd].img} className='project-img d-block mx-auto' alt=''/>
                </div>

                <div className='grid-item item-2 mx-auto my-auto'>
                <FaArrowAltCircleLeft size='2em'  cursor='pointer' onClick={() => nextProject(-1)}/>
                </div>

                <div className='grid-item item-3 mx-auto my-auto'>
                <FaArrowAltCircleRight size='2em' cursor='pointer' onClick={() => nextProject(1)}/>
                </div>


                <div className='grid-item item-4'>
                    <p className='fs-2 fw-bold'>{projects[currentProjectInd].title}</p>
                    <p>{projects[currentProjectInd].description}</p>
                    <div className='d-flex justify-content-center'>
                        <a href={projects[currentProjectInd].url} target='_blank' rel='noopener noreferrer' className='btn btn-secondary mx-3'>Visit Site</a>
                        <a href={projects[currentProjectInd].backend} target='_blank' rel='noopener noreferrer'  className='btn btn-primary mx-3'>Backend code</a>
                        <a href={projects[currentProjectInd].frontend} target='_blank' rel='noopener noreferrer'  className='btn btn-primary mx-3'>Frontend code</a>
                    </div>
                </div>
            </div>
            </div>

        </div>
    </div>)
}

export default Home;