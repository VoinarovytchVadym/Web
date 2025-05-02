import React from "react";
import "./Services.scss";

// Імпортуємо іконки
import shoppingIcon from "../../assets/icons/shopping-cart.png";
import photographyIcon from "../../assets/icons/camera.png";
import sitesIcon from "../../assets/icons/globe.png";
import findBestIcon from "../../assets/icons/search.png";

export function Services() {
  const services = [
    {
      title: "Sites the World",
      icon: sitesIcon,
    },
    {
      title: "Shopping",
      icon: shoppingIcon,
    },
    {
      title: "Photography",
      icon: photographyIcon,
    },
    {
      title: "Find the Best",
      icon: findBestIcon,
    },
  ];

  return (
    <section className="services">
      <div className="services__container">
        {services.map((service, index) => (
          <div key={index} className="services__item">
            <div className="services__icon">
              <img src={service.icon} alt={service.title} />
            </div>
            <h3 className="services__item-title">{service.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
