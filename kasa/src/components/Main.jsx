// Main.jsx
import React from "react";
import accommodations from "../data/accommodations.json";
import Card from "./Card.jsx";
import Imgbandeau1 from '../images/bandeau/IMG.png'; 

export default function Main() {
    return (
        <div className="main">
            <section id="banniere" className="main__banner">
                <img className="main__imgBandeau" src={Imgbandeau1} alt="bandeau" />
                <div className="main__banner-text">
                    Chez vous, partout et ailleurs
                </div>
            </section>
        
            <section id="hebergements">
                <div id="box">
                    <div className="main__background">
                        <div className="main__cards-container">
                        {accommodations.slice(0, 20).map((acc, index) => (
                          <Card key={index} id={acc.id} title={acc.title} cover={acc.cover} />
                        ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
