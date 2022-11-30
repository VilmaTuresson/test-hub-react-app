import React from "react";

const Avatar = (src, height = 45, text) => {
  return (
    <span>
      <img src={src} height={height} width={width} alt="avatar" />
      {text}
    </span>
  );
};

export default Avatar;
