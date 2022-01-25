import blogimg from '../assets/images/blog.png';
import asmrdbimg from '../assets/images/asmrdb.png';
import inteviewprepimg from '../assets/images/interviewprep.png';
import rpgimg from '../assets/images/rpgengine.png';

function Projects(props) {
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

    return (

        <div className='row mt-5 projects p-2' id='projects'>
                <h2 className='text-center mb-5'>Projects</h2>
            {projects.map((value, index) => {
                return (
                <div className='col-12' key={index}>
                    <div className={index % 2 === 0 ? 'row' : 'row flex-row-reverse'}>
                        <div className='col-12 col-lg-6 p-0'>
                            <img src={value.img} alt='project thumbnail' className='w-100'></img>
                        </div>
                        <div className='col-12 col-lg-6 p-3 d-flex flex-column justify-content-between'>
                            <h3>{value.title}</h3>
                            <p>{value.description}</p>
                            <div className='d-flex justify-content-center'>
                                <button type="button" className="btn btn-primary mx-2">Demonstration</button>
                                {
                                    typeof value.frontend !== 'undefined' ?
                                    <button type="button" className="btn btn-primary mx-2">Frontend Code</button>
                                    :
                                    null
                                }
                                {
                                    typeof value.backend !== 'undefined' ?
                                    <button type="button" className="btn btn-primary mx-2">Backend Code</button>
                                    :
                                    null
                                }
                            </div>
                        </div>
                    </div>
                </div>
                )   
            })}
        </div>
    )
}

export default Projects;