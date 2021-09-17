import React, { useEffect, useState } from "react";
import axios from "axios";
import { Image, Grid, Loader,Dimmer} from "semantic-ui-react";
import { getPhotoByDate } from "../../methods/getNasaAPOD";
import { useHistory } from "react-router";
import MediaLoader from "../MediaLoader/MediaLoader";
import ButtonTab from "../ButtonTab/ButtonTab";

import "./imageTab.css";

// The popout image tab that fetch photo data using the target date
const ImageTab = ({ targetDate, likedList, setLikedList,photoList,setPhotoList }) => {
  const history = useHistory();

  const [photo, setPhoto] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    getPhotoByDate(targetDate)
      .then((res) => {
        setPhoto(res);
        setIsLoading(false);
        // if site directly access by date and the date is not in the random photo list
        //, add it in the forth element (shown first on mobile)
        if (!photoList.filter(photo=>photo.date===targetDate).length){
          console.log("in")
          setPhotoList([...photoList.slice(0,4),res,...photoList.slice(5,10)])
        }
        return axios.CancelToken.source().cancel();
      })
      .catch((err) => {
      console.log(err)
      setHasError(true)});
  }, [targetDate,photoList,setPhotoList]);

  const handleResult = () => {
    if (hasError) {
      return <div>
        <p>Opps...Looks Like Something Went Wrong...</p>
        <ButtonTab
                closeButton
                date={targetDate}
               />
        </div>;
    }
    if (isLoading) {
      return (
        <Dimmer style={{minHeight:"40vh"}}  active>
          <Loader size={"massive"} />
        </Dimmer>
      );
    }
    if (!isLoading && !hasError) {
      const { date, hdurl, explanation, url, title, media_type } = photo;

      const liked = likedList.filter((item) => item.date === date).length;
      return (
        <>
          <Grid className={"desktop-grid"}>
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
              <h5 className="secondary explanation">{explanation}</h5>
              <ButtonTab
                closeButton
                date={date}
                onHeartClick={() =>
                  setLikedList(
                    liked
                      ? likedList.filter((item) => item.date !== date)
                      : [...likedList, photo]
                  )
                }
                heartLiked={liked}
              />
            </Grid.Column>
          </Grid>
          {/* grid for mobile */}
          <Grid className={"mobile-grid"}>
            <Grid.Column>
              {media_type === "image" ? (
                <MediaLoader
                  url={url}
                  tilte={title}
                  media_type={media_type}
                  onClick={() =>
                    history.push(`${process.env.PUBLIC_URL}/${date}`)
                  }
                />
              ) : (
                <iframe src={url} title={title} />
              )}
              <h2 className="highlight">{title}</h2>
              <h4>{date}</h4>
              <h3 className="secondary explanation">{explanation}</h3>
              <ButtonTab
                closeButton
                date={date}
                onHeartClick={() =>
                  setLikedList(
                    liked
                      ? likedList.filter((item) => item.date !== date)
                      : [...likedList, photo]
                  )
                }
                heartLiked={liked}
              />
            </Grid.Column>
          </Grid>
        </>
      );
    }
  };

  return (
    <div className="image-tab">
      <h3 className="highlight header">Historical Picture Of The Day</h3>
      {handleResult()}
    </div>
  );
};

export default ImageTab;
