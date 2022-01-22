import React, { useEffect, useState } from 'react';
import resume from '../assets/Resume.pdf';
import blogimg from '../assets/images/blog.png';
import asmrdbimg from '../assets/images/asmrdb.png';
import inteviewprepimg from '../assets/images/interviewprep.png';
import rpgimg from '../assets/images/rpgengine.png'
import Window from './window';
import About from './about';
import Projects from './projects';
import TaskBar from './taskbar';
import Info from './info';
function Home(props) {
    const [activeWindow, setActiveWindow] = useState(0);
    const [selectedProject, setSelectedProject] = useState(-1);
    const [leftPos, setLeftPos] = useState(0);
    const [topPos, setTopPos] = useState(0);
    const [xOffset, setXOffset] = useState(0);
    const [yOffset, setYOffset] = useState(0);
    const [dragging, setDragging] = useState(false);
    const [winPositions, setWinPositions] = useState([[100,400], [1000,50], [2,2]])

    function openProjectInfo(title) {
        for(let i = 0; i < projects.length; i++) {
            if(title === projects[i].title) {
                setSelectedProject(i);
            }
        }
    }

    const projects = [
        {
            title:'Dungeon Crawler RPG Engine',
            description: 'A video game engine made in C++.',
            img: rpgimg,
            url: 'https://www.youtube.com/watch?v=RFxn00Do2zo'
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

    function changePos(e) {
        e.preventDefault();
        setLeftPos(e.pageX + xOffset);
        setTopPos(e.pageY + yOffset);
    }

    function toggleDragging(e, mouseIsDown, oldLeftPos, oldTopPos, clickedId) {
        if(mouseIsDown === true && dragging === false) {
            setDragging(true);
            setActiveWindow(clickedId);
            setXOffset(oldLeftPos - e.pageX);
            setYOffset(oldTopPos - e.pageY);
            setLeftPos(e.pageX + (oldLeftPos - e.pageX));
            setTopPos(e.pageY + (oldTopPos - e.pageY));
        }
        else if(mouseIsDown === false && dragging === true) {
            setDragging(false);
            const newPos = [...winPositions];
            newPos[activeWindow] = [leftPos, topPos];
            setWinPositions(newPos);
            setXOffset(0);
            setYOffset(0);
        }
    }

    return (
    <div onMouseMove={e => {changePos(e)}} onMouseUp={e => {toggleDragging(e, false)}}>
        <div>
            <Window title='About' toggleDragging={toggleDragging} activeWindow={activeWindow} setActiveWindow={setActiveWindow} setXOffset={setXOffset} 
            setYOffset={setYOffset} 
            top={activeWindow === 0 && dragging ? topPos : winPositions[0][1]} left={activeWindow === 0 && dragging ? leftPos : winPositions[0][0]} 
            width='400px' winID={0} 
            windowContent={<About></About>}></Window>

            <Window title='Projects (Click on them for more info!)' toggleDragging={toggleDragging} activeWindow={activeWindow} setXOffset={setXOffset} 
            setYOffset={setYOffset} setActiveWindow={setActiveWindow} winID={1} 
            top={activeWindow === 1 && dragging ? topPos : winPositions[1][1]} left={activeWindow === 1 && dragging ? leftPos : winPositions[1][0]}
            width='800px'  windowContent={<Projects openProjectInfo={openProjectInfo} projects={projects}></Projects>}></Window>

            {selectedProject !== -1 ?
            <Window title={projects[selectedProject].title} toggleDragging={toggleDragging} activeWindow={activeWindow} setXOffset={setXOffset} 
            setYOffset={setYOffset} setActiveWindow={setActiveWindow} 
            top={activeWindow === 2 && dragging ? topPos : winPositions[2][1]} left={activeWindow === 2  && dragging? leftPos : winPositions[2][0]} 
            width='500px' windID={2} windowContent={<Info project={projects[selectedProject]}></Info>}></Window>
            : null}
            <TaskBar></TaskBar>
        </div>
    </div>)
}

export default Home;