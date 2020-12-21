import React from 'react';
import img from '../../../Illustration/Group 86.png';
import facebook from '../../../Illustration/facebook-logo-in-circular-shape@2x.png'
import twitter from '../../../Illustration/twitter (4)@2x.png';
import linkedin from '../../../Illustration/linkedin (2)@2x.png';
import surface from '../../../Illustration/dribbble (1)@2x.png';
import './Footer.css';

const Footer = () => {
    return (
        <div className="mt-5">
            <div>
                <h1 style={{color: "rgb(40, 139, 73)"}}>Get Your Design Right, Right Now</h1>
                <p className= "mb-5">Be the first know our latest offers and updates</p>
                <input  style={{height: '50px', margin: "10px", border: "none"}} className= "mb-5 w-50" type="comments"></input>
                <button className="common-btn">Get Started</button>
            </div>
            <div className="row  mt-5 ">
                <div className="col-lg-3 col-md-12 col-sm-12">
                    <img style={{width: '100px'}} src={img} alt=""/>
                    <div className="social m-3">
                    <img className="img-fluid m-2 social1" src={facebook} alt=""/>
                    <img className="img-fluid m-2 social" src={twitter} alt=""/>
                    <img className="img-fluid m-2 social" src={linkedin} alt=""/>
                    <img className="img-fluid m-2 social" src={surface} alt=""/>
                    <img className="img-fluid m-2 social" src={twitter} alt=""/>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-12">
                    <p>Features</p>
                    <p>Enterprise</p>
                    <p>pricing</p>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-12">
                    <p>Blog</p>
                    <p>Help Center</p>
                    <p>Contact Us</p>
                    <p>Status</p>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-12">
                    <p>About Us</p>
                    <p>Terms of Service</p>
                    <p>Security</p>
                    <p>Login</p>
                </div>
            </div>
            <div className="footer mt-5">
                <p style={{marginTop: '20px', fontWeight: "bold" }}>©IMRAN 2020! All Rights Reserved</p>
            </div>
        </div>
    );
};

export default Footer;