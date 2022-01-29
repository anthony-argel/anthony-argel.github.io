import {FaPython} from 'react-icons/fa'
import {DiMysql} from 'react-icons/di'
import {SiCplusplus, SiJavascript, SiMongodb} from 'react-icons/si'

function Languages(props) {
    return (
        <div className='row languages d-flex justify-content-center mt-5 mb-5' id='skills'>
            
            <h2 className='text-center h2 p-2' >Skills</h2>
            <div className='col-12 col-lg-3 p-2 m-2 position-relative' style={{'zIndex':'1'}}>
                   <FaPython className='position-absolute top-50 start-50 translate-middle' style={{'zIndex':'-1', width:'100%', height:'100%'}}></FaPython>
                <p className="fs-2">Python</p>
                 <ul>
                    <li>Data Scraping</li>
                    <li>Data Science / Data Analysis / Data Visualization </li>
                    <li>Basic scripting / Automation</li>
                </ul>
            </div>
            <div className='col-12 col-lg-3 m-2 p-2 position-relative' style={{'zIndex':'1'}}>
                   <SiCplusplus className='position-absolute top-50 start-50 translate-middle' style={{'zIndex':'-1', width:'90%', height:'90%'}}></SiCplusplus>
                <p className="fs-2">C++</p>
                <ul>
                    <li>Game Development / openFrameworks</li>
                    <li>LeetCode / Programming Challenges</li>
                </ul>
            </div>
            <div className='col-12 col-lg-3 m-2 p-2 position-relative' style={{'zIndex':'1'}}>
                   <SiJavascript className='position-absolute top-50 start-50 translate-middle' style={{'zIndex':'-1', width:'90%', height:'90%'}}></SiJavascript>
                <p className="fs-2">JavaScript</p>
                <ul>
                    <li>Frontend development / React</li>
                    <li>Backend development / Node</li>
                </ul>
            </div>
            <div className='col-12 col-lg-3 m-2  p-2 position-relative' style={{'zIndex':'1'}}>
                   <SiMongodb className='position-absolute top-50 start-50 translate-middle' style={{'zIndex':'-1', width:'90%', height:'90%'}}></SiMongodb>
                <p className="fs-2">MongoDB</p>
                <ul>
                    <li>Web APIs</li>
                </ul>
            </div>
            <div className='col-12 col-lg-3 m-2 p-3 position-relative' style={{'zIndex':'1'}}>
                   <DiMysql className='position-absolute top-50 start-50 translate-middle' style={{'zIndex':'-1', width:'90%', height:'90%'}}></DiMysql>
                <p className="fs-2">MySQL</p>
                <ul>
                    <li>Storage of scraped data</li>
                    <li>Web APIs</li>
                </ul>
            </div>
        </div>
    )
}

export default Languages;