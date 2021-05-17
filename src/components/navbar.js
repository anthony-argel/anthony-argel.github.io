import React from 'react';

function Navbar(props) {
    return(

        <nav className='navbar navbar-light navbar-expand-md shadow-lg position-fixed min-vw-100' style={{backgroundColor:"#44b787", zIndex:"3"}}>
            <div className='container'>
                <a href='#home' className='navbar-brand'>Home</a>
                <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navContent' aria-controls='navContent' aria-expanded='false' aria-label='Toggle navigation'>
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse ' id='navContent'>
                    <ul className='navbar-nav'>
                        <li className='nav-item'>
                            <a href='#about' className='nav-link'>About</a>
                        </li>
                        <li className='nav-item'>
                            <a href='#projects' className='nav-link'>Projects</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;