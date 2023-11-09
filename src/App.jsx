import React from "react";
import ReactSound from "react-sound";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import bSound from "./assets/music/1.mp3";
import image from "./assets/images/1.jpg";
import image1 from "./assets/images/2.jpeg";
import image2 from "./assets/images/3.jpeg";
import image3 from "./assets/images/4.jpeg";
import image4 from "./assets/images/5.jpeg";
import image5 from "./assets/images/6.jpeg";
import image6 from "./assets/images/7.jpeg";
import image7 from "./assets/images/8.jpeg";
import image8 from "./assets/images/9.jpeg";
import image9 from "./assets/images/10.jpeg";
import image10 from "./assets/images/11.jpeg";
import image11 from "./assets/images/12.jpeg";
import image12 from "./assets/images/13.jpeg";
import image13 from "./assets/images/14.jpeg";
import image14 from "./assets/images/15.jpeg";
import image15 from "./assets/images/16.jpeg";
import image16 from "./assets/images/17.jpeg";
import image17 from "./assets/images/18.jpeg";
import image19 from "./assets/images/20.jpeg";
import image20 from "./assets/images/21.jpeg";

function App() {
  AOS.init({
    duration: 2000,
  });
  return (
    <div className="container">
      <ReactSound url={bSound} />
      <div className="card__container">
        <div className="card" data-aos="fade-up-right">
          <img src={image} className="card__image" />
          <h3>Olotu Michael</h3>
        </div>
        <div className="card" data-aos="fade-up">
          <img src={image1} className="card__image" />
          <h3>Ogunjimi Waleola</h3>
        </div>
        <div className="card" data-aos="fade-down">
          <img src={image2} className="card__image" />
          <h3>Fajebe Oladimeji</h3>
        </div>
        <div className="card" data-aos="fade-up-left">
          <img src={image3} className="card__image" />
          <h3>Olalemi Toluwani</h3>
        </div>
        <div className="card" data-aos="flip-left">
          <img src={image4} className="card__image" />
          <h3>Akinrosotu Bright</h3>
        </div>
        <div className="card" data-aos="flip-up">
          <img src={image5} className="card__image" />
          <h3>Famakinwa Victor</h3>
        </div>
        <div className="card" data-aos="flip-down">
          <img src={image6} className="card__image" />
          <h3>Ajenifuja Oluwaseun</h3>
        </div>
        <div className="card" data-aos="flip-right">
          <img src={image7} className="card__image" />
          <h3>Adefusi David</h3>
        </div>
        <div className="card" data-aos="zoom-in-right">
          <img src={image8} className="card__image" />
          <h3>Olarinre Oluwadamilare</h3>
        </div>
        <div className="card" data-aos="zoom-in-up">
          <img src={image9} className="card__image" />
          <h3>Adepetu-sola Ayomide</h3>
        </div>
        <div className="card" data-aos="zoom-in-down">
          <img src={image10} className="card__image" />
          <h3>Bamidele Praise</h3>
        </div>
        <div className="card" data-aos="zoom-in-left">
          <img src={image11} className="card__image" />
          <h3>Ajileye Omotolani</h3>
        </div>
        <div className="card" data-aos="zoom-out-right">
          <img src={image12} className="card__image" />
          <h3>Oyewole Adeolu</h3>
        </div>
        <div className="card" data-aos="zoom-out-up">
          <img src={image13} className="card__image" />
          <h3>Wilhelm Oluwatosin</h3>
        </div>
        <div className="card" data-aos="zoom-out-down">
          <img src={image14} className="card__image" />
          <h3>Oyewole Oluwadamisi</h3>
        </div>
        <div className="card" data-aos="zoom-out-left">
          <img src={image15} className="card__image" />
          <h3>Malik Rowland</h3>
        </div>
        <div className="card" data-aos="fade-up">
          <img src={image16} className="card__image" />
          <h3>Kunle Ariyo</h3>
        </div>
        <div className="card" data-aos="fade-up">
          <img src={image17} className="card__image" />
          <h3>Odeyemi Michael</h3>
        </div>
        <div className="card" data-aos="fade-up">
          <img src={image19} className="card__image" />
          <h3>Akinyele Samuel</h3>
        </div>
        <div className="card" data-aos="fade-up">
          <img src={image20} className="card__image" />
          <h3>Fagbamila Oluwagbemiga</h3>
        </div>
      </div>
    </div>
  );
}

export default App;
