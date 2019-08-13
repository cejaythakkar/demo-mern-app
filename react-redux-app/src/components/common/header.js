import React from 'react';
import {Link} from 'react-router-dom';
import './header.scss';

export default function Header() {
    return (
        <header className="App-header">
            <nav className="navbar navbar-light navbar-expand justify-content-center">
                <ul className="navbar-nav">
                    <li className="nav-item"><Link exact to="/" className="nav-link">Home</Link></li>
                    <li className="nav-item"><Link to="/todos" className="nav-link">Todos</Link></li>
                    <li className="nav-item"><Link to="/users" className="nav-link">Users</Link></li>
                    <li className="nav-item"><Link to="/redux" className="nav-link">Redux</Link></li>
                    <li className="nav-item"><Link to="/about" className="nav-link">About</Link></li>
                    <li className="nav-item"><Link to="/jotto" className="nav-link">Jotto</Link></li>
                </ul>
            </nav>
        </header>
    )
}
