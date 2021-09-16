import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";
import Selection from "./sections/Selection";
import { Portal } from "semantic-ui-react";
import ImageTab from "../../components/ImageTab/ImageTab";

import "./mainPage.css";

const MainPage = ({ states,methods }) => {
  const { date } = useParams();
  const history = useHistory();
  const [portalOpen, setPortalOpen] = useState(false);

  useEffect(() => {
    setPortalOpen(date ? true : false);
  }, [date]);

  return (
    <main>
        {
        <Portal open={portalOpen}  onClose={() => history.push("./")}>
          {date?<ImageTab likedList={states.likedList} setLikedList={methods.setLikedList} targetDate={date} />:<></>}
        </Portal>
      }
      <div className="cover" style={portalOpen?{}:{display:"none"}}></div>
      <Selection photoList={states.photoList} likedList={states.likedList} setLikedList={methods.setLikedList} autoPlay={!portalOpen} />
      
      
    </main>
  );
};

export default MainPage;
