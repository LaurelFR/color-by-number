import React, { useState } from "react";

export default function Board() {
  const [red, setRed] = useState("red");
  const [redPalette, setredPalette] = useState(false);
  const [orange, setOrange] = useState("orange");
  const [orangePalette, setorangePalette] = useState(false);

  function handleRed() {
    if (redPalette) {
      setRed("red-active");
    }
  }

  function handleRedClick() {
    setredPalette(true);
  }

  function handleOrange() {
    if (orangePalette) {
      setOrange("orange-active");
    }
  }

  function handleOrangeClick() {
    setorangePalette(true);
  }

  return (
    <div className="Board">
      <div className="picture mb-5">
        <div className={red} onClick={handleRed}>
          1
          <div className={orange} onClick={handleOrange}>
            2
            <div className="yellow">
              3
              <div className="green">
                4
                <div className="blue">
                  5<div className="violet">6</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="palette d-flex justify-content-around">
        <div
          className="palette-color palette-red"
          onClick={handleRedClick}
        ></div>
        <div
          className="palette-color palette-orange"
          onClick={handleOrangeClick}
        ></div>
        <div className="palette-color palette-yellow"></div>
        <div className="palette-color palette-green"></div>
        <div className="palette-color palette-blue"></div>
        <div className="palette-color palette-violet"></div>
      </div>
    </div>
  );
}
