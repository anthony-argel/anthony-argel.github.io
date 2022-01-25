import {FaPython} from 'react-icons/fa'
import {SiCplusplus, SiJavascript} from 'react-icons/si'

function Languages(props) {
    return (
        <div className='row languages d-flex justify-content-center mt-5' id='languages'>
            
            <h2 className='text-center h2' >Programming Langauges</h2>
            <div className='col-12 col-lg-4 p-2 m-2 position-relative' style={{'zIndex':'1'}}>
                   <FaPython className='position-absolute top-50 start-50 translate-middle' style={{'zIndex':'-1', width:'100%', height:'100%'}}></FaPython>
                <p className="fs-2">Python</p>
                <hr></hr>
                <p>I have used Python for mainly data science-related projects.</p>
                <ul>
                    <li>Data Scraping via Selenium, Requests, BeautifulSoup</li>
                    <li>Data Science / Data Analysis / Data Visualization via Jupyter Notebook, PowerBI, and MySQL</li>
                    <li>Basic scripting / Automation</li>
                </ul>
            </div>
            <div className='col-12 col-lg-4 p-2 m-2 position-relative' style={{'zIndex':'1'}}>
                   <SiCplusplus className='position-absolute top-50 start-50 translate-middle' style={{'zIndex':'-1', width:'90%', height:'90%'}}></SiCplusplus>
                <p className="fs-2">C++</p>
                <hr></hr>
                <p>I have used C++ for mainly game development as well as general software-engineering projects.</p>
                <ul>
                    <li>Game Development with the help of openFrameworks</li>
                    <li>LeetCode / Programming Challenges</li>
                </ul>
            </div>
            <div className='col-12 col-lg-4 p-2 m-2 position-relative' style={{'zIndex':'1'}}>
                   <SiJavascript className='position-absolute top-50 start-50 translate-middle' style={{'zIndex':'-1', width:'90%', height:'90%'}}></SiJavascript>
                <p className="fs-2">JavaScript</p>
                <hr></hr>
                <p>I have used JavaScript for web development projects.</p>
                <ul>
                    <li>Frontend development via React</li>
                    <li>Backend development via Node</li>
                </ul>
            </div>
        </div>
    )
}

export default Languages;