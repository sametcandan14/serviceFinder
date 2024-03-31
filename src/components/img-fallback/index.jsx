import React from "react";

const ImgFallback = (props) => {
  return (
    <>
      <img
        src={props.src ? props.src : "/assets/no_image.jpg"}
        style={props.style}
        className={props.className}
        onError={(e) => {
          console.log("şu resim yüklenemedi", props.src);

          e.target.src("/assets/no_image.jpg");
        }}
      />
    </>
  );
};

export default ImgFallback;
