import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";
import Selection from "./sections/Selection";
import { Portal } from "semantic-ui-react";
import ImageTab from "../../components/ImageTab/ImageTab";

import "./mainPage.css";
import NavBar from "../../components/NavBar/NavBar";

const MainPage = ({ states, methods }) => {
  const { date } = useParams();
  const history = useHistory();
  const [portalOpen, setPortalOpen] = useState(false);

  useEffect(() => {
    setPortalOpen(date ? true : false);
  }, [date]);

  return (
    <>
      <NavBar />
      <main>
        {
          <Portal
            closeOnDocumentClick={false}
            open={portalOpen}
            onClose={() => history.push("./")}
          >
            {date ? (
              <ImageTab
                photoList={states.photoList}
                setPhotoList={methods.setPhotoList}
                likedList={states.likedList}
                setLikedList={methods.setLikedList}
                targetDate={date}
              />
            ) : (
              <></>
            )}
          </Portal>
        }
        <div
          className="cover"
          style={portalOpen ? {} : { display: "none" }}
        ></div>

        <Selection
          photoList={states.photoList}
          likedList={states.likedList}
          setLikedList={methods.setLikedList}
          autoPlay={!portalOpen}
        />
      </main>
    </>
  );
};

export default MainPage;
