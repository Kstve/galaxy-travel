import React from "react";
import "../styles/Training.css";
import { Link } from "react-router-dom";
import Pod from "../assets/pod.jpg";
import Moon from "../assets/moon.jpg";

const Training = () => {
  return (
    <div className="training">
      <div className="left">
        <h1>Képzés</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, unde
          earum. Distinctio, voluptas temporibus tenetur assumenda reprehenderit
          doloribus vitae excepturi.
        </p>
        <Link to="/contact">
          <button className="btn">Kapcsolat</button>
        </Link>
      </div>

      <div className="right">
        <div className="image-container">
          <div className="image-stack top">
            <img src={Moon} alt="Moon" className="img" />
          </div>
          <div className="image-stack bottom">
            <img src={Pod} alt="Pod" className="img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Training;
