import React, { useState, useEffect } from "react";
import { getRandomAPOD } from "../methods/getNasaAPOD";
import LoadingPage from "../pages/LoadingPage";
import MainPage from "../pages/MainPage/MainPage";

const StateHOC = () => {
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
      setPhotoList(response);
      setIsLoading(false);
    });

  }, []);

  return (
    <main className={isLightMode?("light-mode"):("dark-mode")}>
      {isLoading?<LoadingPage/>:<MainPage states={states} methods={methods}/>}
    </main>
    
    
    )
};

export default StateHOC;
