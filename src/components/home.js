import React from 'react';
import EyeCatch from './eyecatch';
import Languages from './languages';
import Projects from './projects';
import NavBar from './nav';
import {FaTwitterSquare, FaGithubSquare} from 'react-icons/fa';
import {AiOutlineMail} from 'react-icons/ai';
import {IoIosPaper} from 'react-icons/io';
import resume from '../assets/Resume.pdf';

function Home(props) {
    return (
        <div>
            <NavBar></NavBar>
            <div className='container-fluid'>
                <EyeCatch></EyeCatch>
            </div>
            <div className='container'>
                <Languages></Languages>
            </div>
            <div className='container-fluid position-relative' style={{'backgroundColor':'#023430', 'borderTopRightRadius':'10%'}}>
                <div className='container'>
                    <Projects></Projects>
                </div>
            </div>
            <div className='w-100 p-5 my-footer text-center d-flex  flex-column align-items-center' id='contact'>
                <h2>Contact</h2>
                <div className='text-start'>
                    <div>
                        <AiOutlineMail size={'40px'}></AiOutlineMail>
                        <span>anthony.r.argel@gmail.com</span>
                    </div>
                    <div>
                        <FaTwitterSquare size={'40px'}></FaTwitterSquare>
                        <a href='https://twitter.com/Anthony_Argel' target="_blank" rel="noopener noreferrer">Twitter</a>
                    </div>
                    <div>
                        <FaGithubSquare size={'40px'}></FaGithubSquare>
                        <a href='https://github.com/anthony-argel' target="_blank" rel="noopener noreferrer">Github</a>
                    </div>
                    <div>
                        <IoIosPaper size={'40px'}></IoIosPaper>
                        <a href={resume} download style={{textDecoration:'none'}}>Resume</a>
                    </div>
                </div>
            </div>

        </div>)
}

export default Home;