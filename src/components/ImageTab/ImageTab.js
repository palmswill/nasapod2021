import React, { useEffect, useState } from "react";
import { Image, Grid } from "semantic-ui-react";
import { getPhotoByDate } from "../../methods/getNasaAPOD";
import Heart from "../heartIcon/Heart";

import "./imageTab.css";

// The popout image tab that fetch photo data using the target date
const ImageTab = ({ targetDate, likedList, setLikedList }) => {
  const [photo, setPhoto] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    getPhotoByDate(targetDate)
      .then((res) => {
        setPhoto(res);
        setIsLoading(false);
      })
      .catch((err) => setHasError(true));
  }, [targetDate]);

  const handleResult = () => {
    if (hasError) {
      return <div>Opps...Looks Like Something Went Wrong...</div>;
    }
    if (isLoading) {
      return <div>Now Loading...</div>;
    }
    if (!isLoading && !hasError) {
      const { date, hdurl, explanation, url, title, media_type } = photo;

      const liked=likedList.filter(item=>item.date===date).length;
      return (
        <Grid>
          <Grid.Column width={6}>
            {media_type === "image" ? (
              <Image src={hdurl} />
            ) : (
              <iframe src={url} title={title} />
            )}
          </Grid.Column>
          <Grid.Column width={10}>
            <h2 className="highlight">{title}</h2>
            <h4>{date}</h4>
            <h4 className="secondary">{explanation}</h4>
            <h5 className="secondary">
              <Heart
                size={"50px"}
                liked={liked}
                // if liked, click to filter item out of likedlist, if not liked, click to add in the likedlist
                onClick={() =>setLikedList(liked?likedList.filter(item=>item.date!==date):[...likedList,photo])}
              />
              {liked? "Liked!" : "Like?"}
            </h5>
          </Grid.Column>
        </Grid>
      );
    }
  };

  return <div className="image-tab">
    <h1 className="highlight">Astronomy Historical Picture Of The Day</h1>
    {handleResult()}
    </div>;
};

export default ImageTab;
