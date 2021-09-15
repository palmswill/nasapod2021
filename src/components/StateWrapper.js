import React, { useState, useEffect } from "react";
import { getRandomAPOD } from "../methods/getNasaAPOD";
import LoadingPage from "../pages/LoadingPage";
import MainPage from "../pages/MainPage/MainPage";
import { BrowserRouter as Router, Route } from "react-router-dom";

const StateWrapper = () => {
  // the photoList displayed as carousel
  const [photoList, setPhotoList] = useState([]);
  // wheather the group search for caresoul is loading or not
  const [isLoading, setIsLoading] = useState(true);
  // light or dark mode
  const [isLightMode,SetisLightMode]=useState(false);
  const [error, setError] = useState("");
  // list of liked dates APOD
  const [likedList,setLikedList]=useState([]);
  // is the search bar running
  const [isSearching,setIsSearching]=useState(false);

  const states={photoList,isLoading,isLightMode,error,isSearching,likedList};
  const methods={setPhotoList,setIsLoading,SetisLightMode,setError,setIsSearching,setLikedList};



  useEffect(() => {
    getRandomAPOD(10).then((response) => {
      console.log("loaded");
      setPhotoList(response);
      setIsLoading(false);
    }).catch((err)=>{
      console.log(err);
      setError(true);
    });

  }, []);

  return (
    <div className={isLightMode?("light-mode"):("dark-mode")}>
      <Router>
      <Route exact path="/:date?" children={isLoading?<LoadingPage/>:<MainPage states={states} methods={methods}/>}/>
      </Router>
    </div>
    
    
    )
};


export default StateWrapper;
