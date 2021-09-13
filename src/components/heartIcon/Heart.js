import React from "react";
import "./heart.css";

const Heart = ({ size,liked,onClick }) => {
  
  return (
    <span className={`heart-container `} style={{ "--heart-size": size}} >
      <span className={`material-icons heart ${liked?(`liked`):(`unliked`)}`} onClick={onClick} >
        favorite
      </span>
    </span>
  )
};

export default Heart;
