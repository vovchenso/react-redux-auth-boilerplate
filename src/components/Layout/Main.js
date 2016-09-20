import React, { PropTypes } from 'react';
import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";


const Main = ({ children }) => (
    <div className="main">
        <Header/>
        <Nav/>
        { children }
        <Footer/>
    </div>
);

export default Main;
