import React from 'react';
import blogimg from '../assets/images/blog-2021-4-26.png';

function Home(props) {

    return (
    <div className='container-fluid' id='home' style={{backgroundColor:'rgb(155, 194, 155)'}}>
        <div className='row min-vh-100 '>
            <div className='col-12 d-flex flex-column justify-content-center align-items-center header position-relative' style={{minHeight:"100%"}}>
                <h1>Anthony Argel</h1>
                <p className='position-absolute' style={{animationDelay:"1s",left:"10%", top:"20%"}}>Web Development</p>
                <p className='position-absolute' style={{animationDelay:"1s",left:"70%", top:"85%"}}>JavaScript</p>
                <p className='position-absolute' style={{animationDelay:"3s",left:"80%", top:"60%"}}>Game Development</p>
                <p className='position-absolute' style={{animationDelay:"3s",left:"20%", top:"50%"}}>C++</p>
                <p className='position-absolute' style={{animationDelay:"3s",left:"40%", top:"15%"}}>Python</p>
                <p className='position-absolute' style={{animationDelay:"4s",left:"70%", top:"30%"}}>Mathematics</p>
                <p className='position-absolute' style={{animationDelay:"4s",left:"30%", top:"80%"}}>Education</p>
            </div>
        </div>
        

        <div className='row d-flex justify-content-center' id='about'>
            <div className='col-12 col-md-8'>
                <div className='about-me' >
                    <h2 className='text-center'>About Me</h2><hr/>
                    <p>I have a B.S. in Applied Mathematics from San Jose State Univeristy. My goal in life is to learn all there is to know about mathematics and computers (software and hardware). I am currently studying Web Development. I believe that anyone can do anything so long as they have the time and resources. What may take a normal person 10 hours to learn may take an idiot 100 hours to learn. So what? If you truly want something, then you better put in the hours.</p>
                    <h2 className='text-center' >Interests</h2><hr></hr>

                    
                    <div className='row d-flex justify-content-center'>
                        <div className='col-10 col-xl-4'>
                            <div className='card h-100 mt-2'>
                                <div className='card-body text-center'>
                                    <h5 className='card-title'>Programming</h5>
                                    <hr/>
                                    <p className='card-text'>Web Development<br/>Game Development<br/>Artificial Intelligence</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-10 col-xl-4'>
                            <div className='card h-100 mt-2'>
                                <div className='card-body text-center'>
                                    <h5 className='card-title'>Mathematics</h5>
                                    <hr/>
                                    <p className='card-text'>Combinatorics<br/>Graph Theory<br/>Cryptography</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-10 col-xl-4 '>
                            <div className='card h-100 mt-2'>
                                <div className='card-body text-center'>
                                    <h5 className='card-title'>Miscellaneous</h5>
                                    <hr/>
                                    <p className='card-text'>Japanese Studies<br/>Collecting Cheesy Quotes<br/>Teaching</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>





        <div className='row d-flex justify-content-center'>
            <div className='col-12 col-md-8'>
                <h2 className='text-center' id='projects'>Projects</h2>
                <hr/>





                <div className='card mb-3 p-3'>
                    <div className='card-body' style={{backgroundColor:'white'}}>
                        <h5 className='card-title text-center'>2021 Challenge</h5>
                        <p className='card-text'>I am aiming to make multiple projects per month in 2021. I will be highlighting my 2 favorite projects of each month and writing blog posts on them.</p>
                        <hr/>
                        <a href="https://anthonyargel.com/blog/#/blog/6087a2dafedb56001512312d" className="btn">Visit Hub Page</a>
                    </div>
                </div>


                
                <div className='card mb-3 p-3'>
                    <div className='row g-0'>
                        <div className='col-md-4'>
                            <img src={blogimg} className='w-100' alt='My blog project.'/>
                        </div>
                        <div className='col-md-8 h-100'>
                            <div className='card-body' style={{backgroundColor:'white'}}>
                                <h5 className='card-title'>Blog</h5>
                                <p className='card-text'>My personal blog. It is one of the first projects I have made that uses my own frontend and backend. I attempted to write code with CRUD and REST in mind. I plan to keep updating this site as I learn more.
                                <br/><br/>Tools worth noting: React, Bootstrap 5, Express, MongoDB, Passport</p>
                                <hr/>
                                <a href="https://github.com/anthony-argel/blog" className="btn">Source Code: Frontend</a>
                                <a href="https://github.com/anthony-argel/blog-API" className="btn">Source Code: Backend</a>
                                <a href="https://anthonyargel.com/blog/" className="btn">Visit Page</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='card mb-3 p-3'>
                    <div className='row g-0'>
                        <div className='col-md-4'>
                            <img src='https://i.imgur.com/IwSyHhr.png' className='w-100' alt='Homepage of ASMR database'/>
                        </div>
                        <div className='col-md-8 h-100'>
                            <div className='card-body' style={{backgroundColor:'white'}}>
                                <h5 className='card-title'>ASMRdb</h5>
                                <p className='card-text'>An online database for ASMR youtubers. Wiki-esque. I tried my best to implement the concepts of CRUD and REST.
                                <br/><br/>Tools worth noting: React, Bootstrap 5, Express, MongoDB, Passport</p>
                                <hr/>
                                <a href="https://github.com/anthony-argel/asmrdb-frontend" className="btn">Source Code: Frontend</a>
                                <a href="https://github.com/anthony-argel/asmrdb-api" className="btn">Source Code: Backend</a>
                                <a href="https://www.asmrdb.net" className="btn">Visit Page</a>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='card mb-3 p-3'>
                    <div className='row g-0'>
                        <div className='col-md-4'>
                            <img src='https://pbs.twimg.com/media/EzRJTXDVIAUNOWj?format=jpg' className='w-100' alt='My messageboard project.'/>
                        </div>
                        <div className='col-md-8 h-100'>
                            <div className='card-body' style={{backgroundColor:'white'}}>
                                <h5 className='card-title'>Member's Only Messageboard</h5>
                                <p className='card-text'>A messageboard where members of different levels have different options on the site. This project was a good introduction to Express as well as MongoDB.</p>
                                <hr/>
                                <a href="https://github.com/anthony-argel/members-only" className="btn">Source Code</a>
                                <a href="https://whispering-stream-50848.herokuapp.com/" className="btn">Visit Page</a>
                            </div>
                        </div>
                    </div>
                </div>




            </div>
        </div>








    </div>)
}

export default Home;