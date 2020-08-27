import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar bg-info navbar-expand-lg">
                <a className="text-white navbar-brand" href="/home">Home</a>
                <a className="text-white navbar-brand" href="/online">Online Class</a>
                <a className="text-white navbar-brand" href="/offline">Offline Class</a>
                <a className="text-white navbar-brand" href="/blog">Blog</a>
                <a className="text-white navbar-brand" href="/contact">Contact</a>
            </nav>
        </div>
    );
};

export default Navbar;