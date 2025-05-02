import React from "react";
import "./Hero.scss";

export function Hero() {
  return (
    <section className="hero">
      <div className="hero__content">
        <h1 className="hero__title">I LIKE TO ASK THE SAME QUESTION</h1>
        <h1 className="hero__title_second"> MANY MANY TIMES</h1>
        <button className="hero__button">Ok ask me</button>
      </div>
    </section>
  );
}
