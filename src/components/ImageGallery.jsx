import React from "react";

export function ImageGallery(props) {
  return (
    <>
      {props.images.map((item, index) => (
        <div key={index} className="col-3">
          <img
            className="rounded my-2"
            loading="lazy"
            style={{ width: "100%", height: "300px" }}
            onChange={(e) => props.onChange(e.target.value)}
            src={item}
            alt="Descripción de la imagen"
          />
        </div>
      ))}
    </>
  );
}
