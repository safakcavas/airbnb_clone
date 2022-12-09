import React from "react";

export default function Card() {
  return (
    <div className="general">
      <div>
        <div className="zindexle">
          <p className="card-mini-text">Sold Out</p>
        </div>

        <img className="card-photo-1" src="/woman1.png" />
        <container>
          
          <div>
            <img src="/star 1.png" />

            <span> 5.0</span>
            <span className="text-shadow"> (6)</span>
            <span className="text-shadow"> .USA</span>
          </div>
          <p className="card-p">Life lessons with Katie Zaferes</p>
          <p className="card-p-2">From $136 / person</p>
        </container>
      </div>

      <div>
      <div className="zindexle">
        <p className="card-mini-text">ONLINE</p>
        </div>
        <img className="card-photo-2" src="/wedding-photography 1.png" />
        <container>
          {" "}
          <div>
            <img src="/star 1.png" />

            <span> 5.0</span>
            <span className="text-shadow"> (30)</span>
            <span className="text-shadow"> .USA</span>
          </div>
          <p className="card-p">Learn wedding photography</p>
          <p className="card-p-2">From $125 / person</p>
        </container>
      </div>

      <div>
        <img className="card-photo-3" src="/mountain-bike 1.png" />
        <container>
          {" "}
          <div>
            <img src="/star 1.png" />

            <span> 4.8</span>
            <span className="text-shadow"> (2)</span>
            <span className="text-shadow"> .USA</span>
          </div>
          <p className="card-p">Group Mountain Biking</p>
          <p className="card-p-2">From $50 / person</p>
        </container>
      </div>
    </div>
  );
}
