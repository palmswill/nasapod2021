import React, { useEffect, useState } from "react";
import { Image, Grid, Button, Menu } from "semantic-ui-react";
import { getPhotoByDate } from "../../methods/getNasaAPOD";
import { useHistory } from "react-router";
import Heart from "../heartIcon/Heart";
import ButtonTab from "../ButtonTab/ButtonTab";

import "./imageTab.css";

// The popout image tab that fetch photo data using the target date
const ImageTab = ({ targetDate, likedList, setLikedList }) => {
  const history = useHistory();

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
              <h4 className="secondary explanation">{explanation}</h4>
              <div className="button-tab">
                <Menu borderless className={"button-menu"}>
                  <Menu.Item>
                    <h5 className="secondary like-section">
                      <Heart
                        size={"50px"}
                        liked={liked}
                        // if liked, click to filter item out of likedlist, if not liked, click to add in the likedlist
                        onClick={() =>
                          setLikedList(
                            liked
                              ? likedList.filter((item) => item.date !== date)
                              : [...likedList, photo]
                          )
                        }
                      />
                    </h5>
                  </Menu.Item>
                  <Menu.Item position="right">
                    <Button
                      className="close-button"
                      basic
                      inverted
                      floated={"right"}
                      onClick={() => history.push(process.env.PUBLIC_URL)}
                    >
                      close
                    </Button>
                  </Menu.Item>
                </Menu>
              </div>
            </Grid.Column>
          </Grid>
          {/* grid for mobile */}
          <Grid className={"mobile-grid"}>
            <Grid.Column>
              {media_type === "image" ? (
                <Image src={hdurl} />
              ) : (
                <iframe src={url} title={title} />
              )}
              <h2 className="highlight">{title}</h2>
              <h4>{date}</h4>
              <h4 className="secondary explanation">{explanation}</h4>
              <ButtonTab
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
      <h1 className="highlight header">Historical Picture Of The Day</h1>
      {handleResult()}
    </div>
  );
};

export default ImageTab;
