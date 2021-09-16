import React from "react";
import TypeWriter from "../../components/animation/TypeWriter/TypeWriter";
import "./loadingPage.css";

const LoadingPage = () => {
  return (
    <div className="loading-container">
      <div className="centered">
        <TypeWriter infinite text="Spacestagram" />
        <h2 className="loading">Now Loading...</h2>
      </div>
    </div>
  );
};

export default LoadingPage;
