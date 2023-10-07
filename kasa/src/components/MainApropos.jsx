import React from 'react';
import '../styles/styles.css';
import Imgbandeau2 from '../images/bandeau/b9995860bb6384a77ca7dc9bf52da3be.jpeg'; 


export default function MainApropos() {
    return (
        <section className="MainApropos">
        <div id="banniere" className="main__banner">
        <img className="main__imgBandeau" src={Imgbandeau2} alt="bandeau" />
        </div>
    <div className='MainApropos__ctner'>
    <div className="MainApropos__valeurs">
        <div className="MainApropos__box">
            <div className="MainApropos__fiabilite">
                <div>Fiabilité</div>
                <svg id="logoSVGmenuDrlent1" width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.2897 10.7897C15.9591 10.1202 17.0462 10.1202 17.7157 10.7897L27.9979 21.0719C28.6674 21.7414 28.6674 22.8285 27.9979 23.4979C27.3285 24.1673 26.2414 24.1673 25.572 23.4979L16.5 14.4259L7.42804 23.4926C6.75862 24.162 5.67148 24.162 5.00206 23.4926C4.33265 22.8231 4.33265 21.736 5.00206 21.0666L15.2843 10.7843L15.2897 10.7897Z" fill="white"/>
                </svg>
            </div>
            <div className="MainApropos__menuDrlent">Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</div>
        </div>
        <div className="MainApropos__box">
            <div className="MainApropos__respect">
                <div>Respect</div>
                <svg id="logoSVGmenuDrlent2" width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.2897 10.7897C15.9591 10.1202 17.0462 10.1202 17.7157 10.7897L27.9979 21.0719C28.6674 21.7414 28.6674 22.8285 27.9979 23.4979C27.3285 24.1673 26.2414 24.1673 25.572 23.4979L16.5 14.4259L7.42804 23.4926C6.75862 24.162 5.67148 24.162 5.00206 23.4926C4.33265 22.8231 4.33265 21.736 5.00206 21.0666L15.2843 10.7843L15.2897 10.7897Z" fill="white"/>
                </svg>
            </div>
            <div className="MainApropos__menuDrlent">La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</div>
        </div>
        <div className="MainApropos__box">
            <div className="MainApropos__service">
                <div>Service</div>
                <svg id="logoSVGmenuDrlent3" width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.2897 10.7897C15.9591 10.1202 17.0462 10.1202 17.7157 10.7897L27.9979 21.0719C28.6674 21.7414 28.6674 22.8285 27.9979 23.4979C27.3285 24.1673 26.2414 24.1673 25.572 23.4979L16.5 14.4259L7.42804 23.4926C6.75862 24.162 5.67148 24.162 5.00206 23.4926C4.33265 22.8231 4.33265 21.736 5.00206 21.0666L15.2843 10.7843L15.2897 10.7897Z" fill="white"/>
                </svg>
            </div>
            <div className="MainApropos__menuDrlent">Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</div>
        </div>
        <div className="MainApropos__box">
            <div className="MainApropos__securite">
                <div>Sécurité</div>
                <svg id="logoSVGmenuDrlent4" width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.2897 10.7897C15.9591 10.1202 17.0462 10.1202 17.7157 10.7897L27.9979 21.0719C28.6674 21.7414 28.6674 22.8285 27.9979 23.4979C27.3285 24.1673 26.2414 24.1673 25.572 23.4979L16.5 14.4259L7.42804 23.4926C6.75862 24.162 5.67148 24.162 5.00206 23.4926C4.33265 22.8231 4.33265 21.736 5.00206 21.0666L15.2843 10.7843L15.2897 10.7897Z" fill="white"/>
                </svg>
            </div>
            <div className="MainApropos__menuDrlent">La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au voyageur, notre communauté participe à l'amélioration continue de notre plateforme.</div>
        </div>
    </div>
    </div>
</section>

    )
}

