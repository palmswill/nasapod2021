import React from "react";


const MediaLoder = ({ url, media_type, title, onClick }) => {
  return (
    <div style={{ width: "100%" }}>
      {media_type === "image" ? (
        <>
          <img
            onClick={onClick}
            draggable={false}
            src={url}
            alt={title}
          />
        </>
      ) : (
        <iframe src={url} title={title} />
      )}
    </div>
  );
};

export default MediaLoder;
