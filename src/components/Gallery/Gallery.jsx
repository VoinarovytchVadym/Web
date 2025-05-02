import React from "react";
import "./Gallery.scss";
import azheekal from "../../assets/images/azheekal.jpg";
import ooty from "../../assets/images/Ooty.jpg";
import munnar from "../../assets/images/Munnar.jpg";
import hampi from "../../assets/images/Hampi.jpg";
import kovalam from "../../assets/images/Kovalam.jpg";
import kuttand from "../../assets/images/Kuttand.jpg";
import thenmala from "../../assets/images/Thennala.jpg";
import beach from "../../assets/images/Beach.jpg";
import munnar2 from "../../assets/images/Munnar2.jpg";
import punaloor from "../../assets/images/Punaloor.jpg";

export function Gallery() {
  const places = [
    { name: "Azheekal", img: azheekal },
    { name: "Ooty", img: ooty },
    { name: "Munnar", img: munnar },
    { name: "Hampi", img: hampi },
    { name: "Kovalam", img: kovalam },
    { name: "Kuttand", img: kuttand },
    { name: "Thennala", img: thenmala },
    { name: "Beach", img: beach },
    { name: "Munnar", img: munnar2 },
    { name: "Punaloor", img: punaloor },
  ];

  return (
    <section className="gallery">
      <h2 className="gallery__title">Places You Must Visit In Your Lifetime</h2>
      <div className="gallery__container">
        {places.map((place, index) => (
          <div key={index} className="gallery__item">
            <img src={place.img} alt={place.name} className="gallery__image" />
            <p className="gallery__name">{place.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
