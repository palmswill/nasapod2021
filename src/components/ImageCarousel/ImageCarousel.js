import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./imageCarousel.css";
import { useHistory } from "react-router";
import ButtonTab from "../ButtonTab/ButtonTab";
import MediaLoader from "../MediaLoader/MediaLoader";

const ImageCarousel = ({ likedList, photoList, setLikedList,autoPlay }) => {
  const history = useHistory();

  const displayCard = (photo, index) => {
    const { title, url, date, media_type } = photo;
    const liked = likedList.filter((item) => item.date === date).length;
    return (
      <div key={title + index} className="card-container">
        <div className="card">
          <h4 className="title hightlight desktop" >{title}</h4>
          <h5 className="desktop">{date}</h5>
          <h2 className="title hightlight mobile" >{title}</h2>
          <h3 className="mobile">{date}</h3>
          <MediaLoader url={url} tilte={title} media_type={media_type} onClick={()=>history.push(`${process.env.PUBLIC_URL}/${date}`)}/>
            <ButtonTab
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
        </div>
      </div>
    );
  };

  const responsive = {
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024,
      },
      items: 5,
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0,
      },
      items: 1,
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464,
      },
      items: 1,
    },
  };

  return (
    <Carousel
      additionalTransfrom={0}
      arrows
      autoPlay={autoPlay}
      customTransition="all 1s linear"
      autoPlaySpeed={3000}
      className="carousel"
      containerClass="container"
      dotListClass=""
      draggable
      focusOnSelect={false}
      infinite
      ssr={false}
      itemClass=""
      keyBoardControl
      minimumTouchDrag={80}
      renderButtonGroupOutside={false}
      responsive={responsive}
      transitionDuration={1000}
      sliderClass=""
      slidesToSlide={1}
      swipeable
    >
      {photoList.map((item, index) => {
        return displayCard(item, index);
      })}
    </Carousel>
  );
};

export default ImageCarousel;
