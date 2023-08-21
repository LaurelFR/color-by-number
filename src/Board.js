import React, { useState } from "react";

export default function Board() {
  const [center, setCenter] = useState("center");
  const [redPalette, setredPalette] = useState(false);

  function handleCenter() {
    if (redPalette) {
      setCenter("center center-active");
    }
  }

  function handleRedClick() {
    setredPalette(true);
  }

  return (
    <div className="Board">
      <div className="picture mb-5 d-flex justify-content-center">
        <div className="petal petal-one"></div>
        <div className="petal petal-two"></div>
        <div className="petal petal-three"></div>
        <div className="petal petal-four"></div>
        <div className="petal petal-five"></div>
        <div className="petal petal-six"></div>
        <div className={center} onClick={handleCenter}>
          1
        </div>
      </div>
      <div className="palette d-flex justify-content-around">
        <div
          className="palette-color palette-red"
          onClick={handleRedClick}
        ></div>
        <div className="palette-color palette-orange"></div>
        <div className="palette-color palette-yellow"></div>
        <div className="palette-color palette-green"></div>
        <div className="palette-color palette-blue"></div>
        <div className="palette-color palette-violet"></div>
      </div>
    </div>
  );
}
