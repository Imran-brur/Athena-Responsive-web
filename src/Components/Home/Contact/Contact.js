import React from 'react';
import img from '../../../Illustration/20 [Converted]@2x.png';
import "./Contact.css"

const Contact = () => {
    return (
        <div>
            <div className="row">
                <div className="col-xl-1 col-md-1">

                </div>
                <div className="col-xl-4 col-md-6 ">
                    <img className="img-fluid" src={img} alt=""/>
                </div>
               
                <div className="contact col-xl-6 col-md-4   align-self-center">
                    <h1>Stay Running & Project</h1>
                    <p className="contact-desc text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione tenetur quia illum error quod veniam cumque, eum Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, esse!</p>
                </div>
            </div>
        </div>
    );
};

export default Contact;