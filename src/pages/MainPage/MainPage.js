import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";
import Selection from "./sections/Selection";
import { Portal } from "semantic-ui-react";
import ImageTab from "../../components/ImageTab/ImageTab";

const MainPage = ({ states,methods }) => {
  const { date } = useParams();
  const history = useHistory();
  const [portalOpen, setPortalOpen] = useState(false);
  console.log(methods)

  useEffect(() => {
    setPortalOpen(date ? true : false);
  }, [date]);

  return (
    <div>
        {
        <Portal open={portalOpen}  onClose={() => history.push("./")}>
          {date?<ImageTab likedList={states.likedList} setLikedList={methods.setLikedList} targetDate={date} />:<></>}
        </Portal>
      }
      <Selection states={states} autoPlay={!portalOpen} />
      
    </div>
  );
};

export default MainPage;
