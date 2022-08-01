import React from "react";
import "../styles/Footer.css";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaSearchLocation,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaSearchLocation
              size={20}
              style={{ color: "#fff", marginRight: "2rem" }}
            />
            <div>
              <p>Űr utca 1.</p>
              <h4>1094 Budapest</h4>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              06-80-123-4567
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              utazas@galaxytravel.hu
            </h4>
          </div>
        </div>

        <div className="right">
          <h4>Rólunk</h4>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque
            explicabo corporis possimus ipsum. Delectus odit deserunt
            laudantium, provident nemo fuga eos ipsam molestias sit ipsa!
            Similique natus laudantium tenetur enim.
          </p>
          <div className="social">
            <FaFacebook
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
            <FaLinkedin
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
            <FaTwitter
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
