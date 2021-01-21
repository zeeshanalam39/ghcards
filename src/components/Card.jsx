import React from "react";
import "../styles/card.css";

const Card = ({ user: { avatar_url, name, company } }) => {
  return (
    <div className="card">
      <img src={avatar_url} alt="" />
      <div className="name">{name}</div>
      <div className="company">{company}</div>
    </div>
  );
};

export default Card;
