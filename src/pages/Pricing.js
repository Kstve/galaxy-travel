import React from "react";
import Navbar from "../components/Navbar";
import HeroImage from "../components/HeroImage";
import PricingCards from "../components/Pricing";
import Footer from "../components/Footer";

const Pricing = () => {
  return (
    <div>
      <Navbar />
      <HeroImage heading="Árak" text="Válassz egy utat" />
      <PricingCards />
      <Footer />
    </div>
  );
};

export default Pricing;
