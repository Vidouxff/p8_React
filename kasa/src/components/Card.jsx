import React from "react";
import { Link } from "react-router-dom";
import '../styles/styles.css';

function Card({ id, title, cover }) {
    return (
        <div className="main__card">
            <Link to={`/card/${id}`}>
                <img className="main__cardImg" src={cover} alt={title} />
                <h2 className="main__cardTitle">{title}</h2>
            </Link>
        </div>
    );
}

export default Card;
