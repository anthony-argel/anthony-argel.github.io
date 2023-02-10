import React from "react";
import EyeCatch from "./Eyecatch";
import Languages from "./Languages";
import Projects from "./Projects";
import NavBar from "./NavBar";
import { FaTwitterSquare, FaGithubSquare } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { IoIosPaper } from "react-icons/io";
import resume from "../assets/resume.pdf";
import Experience from "./Experience";

function Home(props) {
    return (
        <div>
            <NavBar />
            <div id="home">
                <EyeCatch />
            </div>
            <div className="bg-white-vanilla md:flex justify-center w-full" id="experience">
                <div className="md:basis-1/2">
                    <Experience />
                </div>
            </div>
            <div className="bg-black" id="skills">
                <Languages />
            </div>
            <div style={{ backgroundColor: "#023430" }} id="projects">
                <Projects />
            </div>
            <div className="flex flex-col items-center justify-center text-white p-5" id="contact" style={{ backgroundColor: "#061621" }}>
                <h2 className="text-2xl mb-3 font-bold">Contact</h2>
                <div className="flex flex-wrap justify-center items-center gap-5">
                    <div className="flex items-center justify-center">
                        <FaTwitterSquare size={"40px"}></FaTwitterSquare>
                        <a href="https://twitter.com/Anthony_Argel" target="_blank" rel="noopener noreferrer">
                            Twitter
                        </a>
                    </div>
                    <div className="flex items-center justify-center">
                        <FaGithubSquare size={"40px"}></FaGithubSquare>
                        <a href="https://github.com/anthony-argel" target="_blank" rel="noopener noreferrer">
                            Github
                        </a>
                    </div>
                    <div className="flex items-center justify-center">
                        <IoIosPaper size={"40px"}></IoIosPaper>
                        <a href={resume} download style={{ textDecoration: "none" }}>
                            Resume
                        </a>
                    </div>
                    <div className="flex items-center justify-center">
                        <AiOutlineMail size={"40px"}></AiOutlineMail>
                        <span>anthony.r.argel@gmail.com</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
