function Info(props) {
    return (
        <div>
            <div className='p-2 main-panel'>
                <img style={{width:'100%'}} src={props.project.img} alt='project thumbnail'></img>
                <p>Description: {props.project.description}</p>
            </div>
            <div className='d-flex justify-content-around p-2'>
                <a href={props.project.url} className='win-button win-border' target='_blank' rel='noreferrer noopener'>Demonstration</a>
                {typeof props.project.frontend !== 'undefined' ?
                <a href={props.project.frontend} className='win-button win-border' target='_blank' rel='noreferrer noopener'>Frontend Code</a>
                :null}
                {typeof props.project.backend !== 'undefined' ?
                <a href={props.project.backend} className='win-button win-border' target='_blank' rel='noreferrer noopener'>Backend Code</a>
                :null}
            </div>
        </div>
    )
}

export default Info;