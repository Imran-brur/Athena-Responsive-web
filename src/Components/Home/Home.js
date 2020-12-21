import React from 'react';
import Achivement from './Achivement/Achivement';
import Contact from './Contact/Contact';
import Courses from './Courses/Courses';
import Header from './Header/Header';
import Navbar from './Navbar/Navbar';
import './Home.css'
import Team from './Team/Team';
import Footer from './Footer/Footer';
const Home = () => {
    return (
        <div className="container">
            <Navbar></Navbar>
            <Header></Header>
            <Courses></Courses>
            <Contact></Contact>
            <Achivement></Achivement>
            <Team></Team>
            <Footer></Footer>
        </div>
    );
};

export default Home;