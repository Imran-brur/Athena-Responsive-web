import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../../Illustration/16 [Converted]@2x.png'
import './Header.css';

const Header = () => {
    return (
        <div>
            <div className="row  mt-5 ">
                <div className="part1 col-sm-12 col-md-6 col-lg-6 align-self-center ">
                    <h1 className="mb-3 ">Florence Agency  <span></span></h1>
                    <p className="text-secondary text-start">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem ratione nemo velit, nihil earum placeat fugit sed magnam labore, quas quisquam, fugiat quia veniam! Molestiae cum totam perferendis id error.</p>
                    <button className="common-btn d-flex justify-content-start">
                        <Link className="nav-link text-light mr-5" to="/contactUs">see pricing</Link>
                    </button>                
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6">
                    <img className="img-fluid" src={image} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Header;