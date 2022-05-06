import React from 'react';
import CardHolder from './CardHolder/CardHolder';
import banner from "../../New folder/book.jpg"
import "./Home.css"

const Home = () => {
    return (
        <div>
            <h1 className="text-center">WELCOME TO BOOK<span className="title">MELA</span></h1>
            <img src={banner} className="m-5  banner"></img>
            <CardHolder></CardHolder>
        </div>
    );
};

export default Home;