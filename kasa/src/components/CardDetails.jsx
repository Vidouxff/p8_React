import React, { useState, useEffect } from "react";
import { Navigate } from 'react-router-dom';
import { useParams } from "react-router-dom";
import accommodations from "../data/accommodations.json";
import RatingStars from './RatingStars';
import ChevronIcon from './ChevronIcon';
import '../styles/components/_carouselle.scss';



function CardDetails({ setIsCardDetailsVisible }) {
  useEffect(() => {
    setIsCardDetailsVisible(true);
    return () => {
      setIsCardDetailsVisible(false);
    };
  }, [setIsCardDetailsVisible]);
  
  const { id } = useParams();
  const accommodation = accommodations.find((acc) => acc.id === id);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isDescriptionVisible, setDescriptionVisibility] = useState(false);
  const [isEquipmentVisible, setEquipmentVisibility] = useState(false);

  if (!accommodation) {
    return <Navigate to="/404" replace />;
}

/*   const { id } = useParams();
  const accommodation = accommodations.find((acc) => acc.id === id);

  const [currentImageIndex, setCurrentImageIndex] = useState(0); */

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % accommodation.pictures.length);
  };

  const goToPrevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + accommodation.pictures.length) % accommodation.pictures.length
    );
  };
/*   const [isDescriptionVisible, setDescriptionVisibility] = useState(false);
  const [isEquipmentVisible, setEquipmentVisibility] = useState(false); */


  const formattedLocation = accommodation.location.replace(' - ', ', ');

  return (
    <div>
      <main className="cardDetails">
        <div className="cardDetails__carousel">
          <svg
            className="cardDetails__vectorl"
            width="48"
            height="80"
            viewBox="0 0 48 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={goToPrevImage}
          >
            <path
              d="M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z"
              fill="white"
            />
          </svg>
          <img
            src={accommodation.pictures[currentImageIndex]}
            alt={`Slide ${currentImageIndex}`}
            className="cardDetails__carouselImg"
          />
          <svg
            className="cardDetails__vectorr"
            width="48"
            height="80"
            viewBox="0 0 48 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={goToNextImage}
          >
            <path
              d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z"
              fill="white"
            />
          </svg>
        </div>
      <div className="carDetails__infosCtner">
        <div className="cardDetails__infosGauche">
	        <h1 className="cardDetails__title">{accommodation.title}</h1>
          <p className="cardDetails__location">{formattedLocation}</p>
          <div className="cardDetails__tags">
          {accommodation.tags.map((tag, index) => (
            <span key={index} className="cardDetails__tag">{tag}</span>
          ))}
        </div>
        </div>
        <div className="cardDetails__infosDroite">
          <RatingStars rating={accommodation.rating} />
          <div className="cardDetails__host">
            <h4 className="cardDetails__hostname">{accommodation.host.name}</h4>
            <img className="cardDetails__hostpic" src={accommodation.host.picture} alt={accommodation.host.name} />
          </div>
        </div>
        </div>
        <div className="CardDetails__descripEquipeCtner">
            <div className="cardDetails__descriptionCtner">
                <div className="cardDetails__Flexbox">
                    <div className="cardDetails__dptTitle">Description</div>
                    <ChevronIcon onClick={() => setDescriptionVisibility(!isDescriptionVisible)} 
                        isRotated={isDescriptionVisible} />

                </div>
                <p className={`cardDetails__description ${isDescriptionVisible ? 'visible' : 'hidden'}`}>
                    {accommodation.description}
                </p>
            </div>
            <div className="cardDetails__equipmentsCtner">
                <div className="cardDetails__Flexbox">
                    <div className="cardDetails__equipmentsTitle">Équipements</div>
                    <ChevronIcon onClick={() => setEquipmentVisibility(!isEquipmentVisible)}
                        isRotated={isEquipmentVisible} />

                </div>
                <ul id="margeTop" className={`${isEquipmentVisible ? 'visible' : 'hidden'}`}>
                    {accommodation.equipments.map((equipment, index) => (
                        <li key={index}>{equipment}</li>
                    ))}
                </ul>
            </div>
        </div>
      </main>

      </div>
  );
}

export default CardDetails;
