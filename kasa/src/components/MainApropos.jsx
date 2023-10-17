import React, { useState } from 'react';
import '../styles/styles.css';
import Imgbandeau2 from '../images/bandeau/b9995860bb6384a77ca7dc9bf52da3be.jpeg';
/* import ChevronIcon from './ChevronIcon'; */
import Collapse from './Collapse';

const MainApropos = () => {
    const [isRotated, setIsRotated] = useState([false, false, false, false]);

    const handleToggle = index => {
        let newIsRotated = [...isRotated];
        newIsRotated[index] = !newIsRotated[index];
        setIsRotated(newIsRotated);
    };
    const sections = [
        { title: 'Fiabilité', content: 'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.' },
        { title: 'Respect', content: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.' },
        { title: 'Service', content: "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question." },
        { title: 'Sécurité', content: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au voyageur, notre communauté participe à l'amélioration continue de notre plateforme." }
    ];

    return (
        <section className="MainApropos">
        <div id="banniere" className="main__banner">
        <img className="main__imgBandeau" id="iMgBando2" src={Imgbandeau2} alt="bandeau" />
        </div>
        <div className='MainApropos__ctner'>
            <div className="MainApropos__valeurs">
                {sections.map((section, index) => (
                    <Collapse
                        key={index}
                        title={section.title}
                        content={section.content}
                        handleToggle={handleToggle}
                        index={index}
                        isRotated={isRotated}
                    />
                ))}
            </div>
        </div>
</section>
    );
}

export default MainApropos;

