import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImage from "../components/HeroImage";
import TrainingSection from "../components/Training";
const Training = () => {
  return (
    <div>
      <Navbar />
      <HeroImage
        heading="KÉPZÉS"
        text="Utazás előtti és utazás közbeni felkészülés"
      />
      <TrainingSection />
      <Footer />
    </div>
  );
};

export default Training;
