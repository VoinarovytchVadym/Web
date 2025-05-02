import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import { Footer } from "./components/Footer/Footer.jsx";
import { Hero } from "./components/Hero/Hero.jsx";
import { Services } from "./components/Services/Services.jsx";
import { Gallery } from "./components/Gallery/Gallery.jsx";
import { Description } from "./components/Description/Decsription.jsx";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Gallery />
      <Description />
      <Services />
      <Footer />
    </>
  );
}

export default App;
