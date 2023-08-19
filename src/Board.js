import React from "react";

export default function Board() {
  return (
    <div className="Board">
      <div className="picture mb-5">
        <div className="red">
          <div className="orange">
            <div className="yellow">
              <div className="green">
                <div className="blue">
                  <div className="violet"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="palette d-flex justify-content-around">
        <div className="palette-color palette-red"></div>
        <div className="palette-color palette-orange"></div>
        <div className="palette-color palette-yellow"></div>
        <div className="palette-color palette-green"></div>
        <div className="palette-color palette-blue"></div>
        <div className="palette-color palette-violet"></div>
      </div>
    </div>
  );
}
