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
            <div className="container-fluid" id="home">
                <EyeCatch />
            </div>
            <div style={{ backgroundColor: "#252323" }} id="experience">
                <Experience />
            </div>
            <div className="container" id="skills">
                <Languages />
            </div>
            <div
                className="container-fluid p-0"
                style={{ backgroundColor: "#023430" }}
                id="projects"
            >
                <Projects />
            </div>
            <div
                className="w-100 p-5 my-footer text-center d-flex  flex-column align-items-center"
                id="contact"
            >
                <h2>Contact</h2>
                <div className="text-start">
                    <div>
                        <AiOutlineMail size={"40px"}></AiOutlineMail>
                        <span>anthony.r.argel@gmail.com</span>
                    </div>
                    <div>
                        <FaTwitterSquare size={"40px"}></FaTwitterSquare>
                        <a
                            href="https://twitter.com/Anthony_Argel"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Twitter
                        </a>
                    </div>
                    <div>
                        <FaGithubSquare size={"40px"}></FaGithubSquare>
                        <a
                            href="https://github.com/anthony-argel"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Github
                        </a>
                    </div>
                    <div>
                        <IoIosPaper size={"40px"}></IoIosPaper>
                        <a
                            href={resume}
                            download
                            style={{ textDecoration: "none" }}
                        >
                            Resume
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
