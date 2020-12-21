import React from 'react';
import img1 from '../../../Illustration/Group 65@2x.png';
import img2 from '../../../Illustration/Group 66@2x.png';
import img3 from '../../../Illustration/Group 69@2x.png';
import img4 from '../../../Illustration/Group 72@2x.png';
import './Courses.css';

const Courses = () => {
    return (
        <div>
            <section className="course-header text-center">
                <h1 className="text-center">WHAT WE DO</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br/> Unde quas consequatur nam.</p>
            </section>
            <section>
                <div className="row">
                    <div className="course col-lg-3 col-md-6 col-sm-12">
                        <div class="card text-center p-2" style={{width: '18rem'}}>
                            <img src={img1} class="w-40 align-self-center" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Experience Design</h5>
                                <p class="card-text text-secondary text-justify">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="course col-lg-3 col-md-6 col-sm-12">
                        <div class="card text-center p-2" style={{width: '18rem'}}>
                            <img src={img2} class="w-40 align-self-center" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Interface Design</h5>
                                <p class="card-text text-secondary text-justify">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div> 
                    <div className="course col-lg-3 col-md-6 col-sm-12">
                        <div class="card text-center p-2" style={{width: '18rem'}}>
                            <img src={img3} class="w-40 align-self-center" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Prototyping</h5>
                                <p class="card-text text-secondary text-justify">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="course col-lg-3 col-md-6 col-sm-12">
                        <div class="card text-center p-2" style={{width: '18rem'}}>
                            <img src={img4} class="w-40 align-self-center" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Illustration</h5>
                                <p class="card-text text-secondary text-justify">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Courses;