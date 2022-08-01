import "../styles/Form.css";
import React from "react";

const Form = () => {
  return (
    <div className="form">
      <form action="" method="post">
        <label>Név</label>
        <input type="text" />
        <label>Email cím</label>
        <input type="email" />
        <label>Tárgy</label>
        <input type="text" />
        <label>Üzenet</label>
        <textarea rows="6" placeholder="Írj egy üzenetet..."></textarea>
        <button type="submit" className="btn">
          Küldés
        </button>
      </form>
    </div>
  );
};

export default Form;
