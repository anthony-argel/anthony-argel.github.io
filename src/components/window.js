import { useState } from 'react';
import '../assets/window.css'

function Window(props) {
    const leftPos = props.left;
    const topPos = props.top;




    return (
        <div className='window win-border' style={{'top':topPos, 'left':leftPos, width:props.width, zIndex: props.activeWindow === props.winID ? '1000' : 'auto'}} 
        onClick={e => props.setActiveWindow(props.winID)}>
            <div className='menu-bar' style={{backgroundColor: props.activeWindow === props.winID ? '#000082' : '#7f8180'}}
            onMouseDown={e => {props.toggleDragging(e, true, leftPos, topPos, props.winID)}} onMouseUp={e => {props.toggleDragging(e, false)}}
            >
                <p>{props.title}</p>
            </div>
            <div className='display'>
                {props.windowContent}
            </div>
        </div>
    )
}

export default Window;