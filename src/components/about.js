import {FaGithub, FaLinkedin} from 'react-icons/fa';
import {AiOutlineMail} from 'react-icons/ai';

function About(props) {
    return (
        <div className='text-center main-panel'>
            <h1 style={{'fontSize':'max(1.6vw, 6vh)'}}>Anthony Argel</h1>
            <h3>Full Stack Developer</h3>
            <a href='mailto:anthony.r.argel@gmail.com'><AiOutlineMail color='black' size='max(1.7vw, 4vh)'/></a>
            <a href='https://www.linkedin.com/in/anthony-argel-24735116a/'><FaLinkedin color='black' size='max(1.7vw, 4vh)'/></a>
            <a href='https://github.com/anthony-argel'><FaGithub color='black' size='max(1.7vw, 4vh)'/></a>
            <p className='text-center'>Resume</p>
        </div>
    )
}

export default About;