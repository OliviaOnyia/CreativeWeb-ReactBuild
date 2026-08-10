import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() { 
    return (
        <> 
        <header className="navbar">
            <div className="nav-container">
                <nav aria-label="Primary">
            <ul className="nav-links">
                <li><NavLink to ="/">Home</NavLink></li>
                <li><NavLink to ="/technical-projects">Technical Projects</NavLink></li>
                <li><NavLink to ="/3d-projects">3D Projects</NavLink></li>
                <li><NavLink to ="/composer-projects">Composer</NavLink></li>
                <li><NavLink to ="/contact">Contact</NavLink></li>
            </ul>
                </nav>
            </div>
        </header>
           
     
        </>
    );
}

export default Navbar;