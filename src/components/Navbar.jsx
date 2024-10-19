import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{ padding: '1rem', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <h1 className="navbar-brand" style={{ fontFamily: 'Arial, sans-serif', fontSize: '1.5rem', color: '#390432', fontWeight: 'bold', padding: '0.5rem 1rem' }}>
                <i className="fa-solid fa-user-tie fa-2xl" style={{ marginRight: '0.5rem' }} />
                Employee Management
            </h1>
            <button 
                className="navbar-toggler" 
                type="button" 
                data-toggle="collapse" 
                data-target="#navbarNav" 
                aria-controls="navbarNav" 
                aria-expanded="false" 
                aria-label="Toggle navigation"
                style={{ border: 'none' }} 
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav" style={{ marginLeft: 'auto' }}> 
                    <li className="nav-item">
                        <Link className="nav-link" to="/" style={{ color: '#390432', fontWeight: 'bold', fontSize: '18px', padding: '0.5rem 1rem' }}>
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/employees" style={{ color: '#390432', fontWeight: 'bold', fontSize: '18px', padding: '0.5rem 1rem' }}>
                            Employees
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/services" style={{ color: '#390432', fontWeight: 'bold', fontSize: '18px', padding: '0.5rem 1rem' }}>
                            Our Services
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
