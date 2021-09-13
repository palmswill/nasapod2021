import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Image } from "semantic-ui-react";
import "./imageCarousel.css";
import { useHistory } from "react-router";

const ImageCarousel = ({ deviceType, photoList, methods,autoPlay }) => {
  const history = useHistory();

  const displayCard = (info, index) => {
    const { title, url, date, media_type } = info;
    return (
      <div key={title + index} className="card-container">
        <div className="card">
          <h4 className="hightlight" style={{height:"40px"}}>{title}</h4>
          <h5>{date}</h5>
          {media_type ===
            "image"?(
              <Image
                onClick={() => history.push(`./${date}`)}
                className="carousel-image"
                draggable={false}
                style={{ display: "block" }}
                src={url}
                alt={title}
              />
            ):(<iframe src={url} title={title}/>)}
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
      items: 3,
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
      centerMode={true}
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
