import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../Illustration/Group 86.png';
import './Navbar.css';

const Navbar = () => {
    return (

            <nav class="navbar navbar-expand-lg navbar-light">
                    <img style={{width: '100px'}} src={logo} alt=""/>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse text-center  justify-content-end" id="navbarNavAltMarkup">
                    <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link className="nav-link text-dark p-3 mr-5" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-dark p-3 mr-5" to="/about">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-dark p-3 mr-5" to="/service">Service</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-dark p-3 mr-5" to="/pricing">Pricing</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-dark p-3 mr-5" to="/ourTeam">Our Team</Link>
                    </li> 

                </ul>
                    <button className="common-btn ">
                        <Link className="nav-link text-light mr-5" to="/contactUs">Contact Us</Link>
                    </button>
                    </div>
         
                </nav>
 
    );
};

export default Navbar;