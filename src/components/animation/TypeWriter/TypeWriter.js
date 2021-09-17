import React from "react";
import "./typeWriter.css";

const TypeWriter = ({
  text,
  size,
  style,
  speed,
  className,
  infinite,
  background,
  active = true,
}) => {
  return (
    <p
      className={`typewriter-text${active ? "" : "-inactive"} ${
        className ? className : ""
      }`}
      style={{
        "--typewriterCharacters": infinite ? text.length + 1 : text.length,
        // "--typewriterSpeed": speed,
        "--background": background,
        fontSize: size,
        "--playType": infinite ? "infinite" : "forwards",
        ...style,
      }}
    >
      {`${text}${active ? (infinite ? "!" : "") : ""}`}
    </p>
  );
};

export default TypeWriter;
