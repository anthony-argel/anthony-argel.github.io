import React, { useEffect, useState } from 'react';
import EyeCatch from './eyecatch';
import Languages from './languages';
import Databases from './databases';
import Projects from './projects';
import NavBar from './nav';
function Home(props) {
    return (
        <div>
            <NavBar></NavBar>
            <div className='container-fluid'>
                <EyeCatch></EyeCatch>
            </div>
            <div className='container'>
                <Databases></Databases>
                <Languages></Languages>
            </div>
            <div className='container-fluid'>
                <Projects></Projects>
            </div>
            <div className='w-100 p-5 my-footer text-center'>
                    <p className='mb-0'>email: anthony.r.argel@gmail.com</p>
            </div>

        </div>)
}

export default Home;