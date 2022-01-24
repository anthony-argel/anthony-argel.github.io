function Projects(props) {
    return (
        <div className='main-panel'>
            {typeof props.projects !== 'undefined' ?
            props.projects.map((value, index) => {
                return (
                    <div className='d-flex flex-column justify-content-center align-items-center' key={index}>
                        <img src={value.img} style={{width:'60%', cursor:'pointer'}} alt='Project thumbnail' onClick={() => props.openProjectInfo(value.title)}></img>
                        <p style={{cursor:'pointer'}}>{value.title}</p>
                    </div>
                )
            })
            :
            null}
        </div>
    )
}

export default Projects;