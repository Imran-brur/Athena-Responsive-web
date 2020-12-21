import React from 'react';
import image1 from '../../../Illustration/happy@2x.png';
import image2 from '../../../Illustration/marketing@2x.png';
import image3 from '../../../Illustration/surface1@2x.png';
import image4 from '../../../Illustration/transportation@2x.png';
import './Achivement.css'

const Achivement = () => {
    return (
        <div className="our-achievement h-100 py-5 my-5 d-flex align-items-center">
                <div className="row mt-5 ">
                    <div className="achieve col-sm-12 col-md-12 col-lg-5 align-self-center">
                        <h1>Our Achievements</h1>
                        <p className="text-secondary text-justify">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda nobis earum cum error fuga ipsam voluptas a inventore rerum ipsa ullam delectus, eveniet similique rem accusantium libero perferendis in repudiandae alias dignissimos unde iure consequatur distinctio molestiae. Ad, tempore autem.</p>
                    </div>
                    <div className="desc col-sm-12 col-md-12 col-lg-7 align-self-center">
                        <div className="row ">
                            <div className="card1 m-3 col-sm-6 col-md-6  col-lg-6 ">
                                <div className=" d-flex justify-content-center align-self-center">
                                    <div className="p-3">
                                        <img style={{border: "1px solid gray",borderRadius: "50px"}} className="img-fluid bg-secondary"src={image1} alt=""/>
                                    </div>
                                    <div className="p-3 ">
                                        <h1>700+</h1>
                                        <p>Happy Clients</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card2 m-3 col-sm-6 col-md-6  col-lg-6 ">
                                <div className=" d-flex justify-content-center align-self-center">
                                    <div className="p-3">
                                        <img className="img-fluid"src={image2} alt=""/>
                                    </div>
                                    <div className="p-3">
                                        <h1>140+</h1>
                                        <p>Project Completed</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card3 m-3 col-sm-6 col-md-6  col-lg-6 ">
                                <div className=" d-flex justify-content-center align-self-center">
                                    <div className="p-3">
                                        <img className="img-fluid"src={image3} alt=""/>
                                    </div>
                                    <div className="p-3 ">
                                        <h1>25+</h1>
                                        <p>Happy Clients</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card4 m-3 col-sm-6 col-md-6  col-lg-6 ">
                                <div className=" d-flex justify-content-center align-self-center">
                                    <div className="p-3">
                                        <img className="img-fluid"src={image4} alt=""/>
                                    </div>
                                    <div className="p-3 ">
                                        <h1>75+</h1>
                                        <p>Running</p>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
      
    );
};

export default Achivement;