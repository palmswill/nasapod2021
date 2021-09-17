import React, { useState, useEffect } from "react";
import { getRandomAPOD } from "../methods/getNasaAPOD";
import axios from "axios";
import LoadingPage from "../pages/LoadingPage/LoadingPage";
import MainPage from "../pages/MainPage/MainPage";
import { BrowserRouter as Router, Route } from "react-router-dom";

const StateWrapper = () => {
  // the photoList displayed as carousel
  const [photoList, setPhotoList] = useState([]);
  // wheather the group search for caresoul is loading or not
  const [isLoading, setIsLoading] = useState(true);
  // light or dark mode
  const [isLightMode, SetisLightMode] = useState(false);
  const [error, setError] = useState(false);
  // list of liked dates APOD
  const [likedList, setLikedList] = useState([]);
  // is the search bar running
  const [isSearching, setIsSearching] = useState(false);

  const states = {
    photoList,
    isLoading,
    isLightMode,
    error,
    isSearching,
    likedList,
  };
  const methods = {
    setPhotoList,
    setIsLoading,
    SetisLightMode,
    setError,
    setIsSearching,
    setLikedList,
  };


  useEffect(() => {
    setTimeout(() => {
      getRandomAPOD(10)
        .then((response) => {
          console.log("loaded");
          setPhotoList(response);
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setIsLoading(false);
          setError(true);
        });
      return axios.CancelToken.source().cancel();
    }, 3000);
  }, []);

  return (
    <>
    <div className={isLightMode ? "light-mode" : "dark-mode"}>
      <Router>
        <Route
          exact
          path="/:date?"
          children={
            isLoading ? (
              <LoadingPage />
            ) : error ? (
              <div>opps, something went wrong</div>
            ) : (
              <MainPage states={states} methods={methods} />
            )
          }
        />
        {/* <Route exact path="/:date?" children={<LoadingPage/>}/> */}
      </Router>
    </div>
    </>
  );
};

export default StateWrapper;
