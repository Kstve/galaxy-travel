import React from "react";
import "../styles/Pricing.css";
import { Link } from "react-router-dom";
const Pricing = () => {
  return (
    <div className="pricing">
      <div className="card-container">
        <div className="card">
          <h3>- Alap csomag -</h3>
          <span className="bar"></span>
          <p className="btc">1 BTC</p>
          <p>- 3 Nap -</p>
          <p>- Napi 3 étkezés -</p>
          <p>- Privát szoba -</p>
          <Link to="/contact" className="btn">
            Foglalás
          </Link>
        </div>
        <div className="card">
          <h3>- Extra csomag -</h3>
          <span className="bar"></span>
          <p className="btc">2 BTC</p>
          <p>- 5 Nap -</p>
          <p>- Minden ami az alap csomaghoz tartozik -</p>
          <p>- Űrséta -</p>
          <Link to="/contact" className="btn">
            Foglalás
          </Link>
        </div>
        <div className="card">
          <h3>- Gyémánt csomag -</h3>
          <span className="bar"></span>
          <p className="btc">5 BTC</p>
          <p>- 10 Nap -</p>
          <p>- Minden ami az extra csomaghoz tartozik -</p>
          <p>- Privát lakosztály -</p>

          <Link to="/contact" className="btn">
            Foglalás
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
