import React, { useState } from 'react';
import '../styles/styles.css';
import Imgbandeau2 from '../images/bandeau/b9995860bb6384a77ca7dc9bf52da3be.jpeg';
import ChevronIcon from './ChevronIcon';
/* import '../styles/layouts/_mainApropos.scss'; */

export default function MainApropos() {
    const [isRotated, setIsRotated] = useState([false, false, false, false]);

    const handleToggle = index => {
        setIsRotated(prevState => {
            const newState = [...prevState];
            newState[index] = !newState[index];
            return newState;
        });
    };

    return (
        <section className="MainApropos">
        <div id="banniere" className="main__banner">
        <img className="main__imgBandeau" id="iMgBando2" src={Imgbandeau2} alt="bandeau" />
        </div>
    <div className='MainApropos__ctner'>
    <div className="MainApropos__valeurs">
        <div className="MainApropos__box">
            <div className="MainApropos__fiabilite">
                <div className='MainApropos__vtitle'>Fiabilité</div>
                <ChevronIcon onClick={() => handleToggle(0)} isRotated={isRotated[0]} />
            </div>
            <div className={`MainApropos__menuDrlent ${isRotated[0] ? 'open' : ''}`}>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</div>
        </div>
        <div className="MainApropos__box">
            <div className="MainApropos__respect">
                <div className='MainApropos__vtitle'>Respect</div>
                <ChevronIcon onClick={() => handleToggle(1)} isRotated={isRotated[1]} />
            </div>
            <div className={`MainApropos__menuDrlent ${isRotated[1] ? 'open' : ''}`}>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</div>
        </div>
        <div className="MainApropos__box">
            <div className="MainApropos__service">
                <div className='MainApropos__vtitle'>Service</div>
                <ChevronIcon onClick={() => handleToggle(2)} isRotated={isRotated[2]} />
            </div>
            <div className={`MainApropos__menuDrlent ${isRotated[2] ? 'open' : ''}`}>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</div>
        </div>
        <div className="MainApropos__box">
            <div className="MainApropos__securite">
                <div className='MainApropos__vtitle'>Sécurité</div>
                <ChevronIcon onClick={() => handleToggle(3)} isRotated={isRotated[3]} />
            </div>
            <div className={`MainApropos__menuDrlent ${isRotated[3] ? 'open' : ''}`}>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au voyageur, notre communauté participe à l'amélioration continue de notre plateforme.</div>
        </div>
    </div>
    </div>
</section>

    )
}

