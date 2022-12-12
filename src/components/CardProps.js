/* eslint-disable jsx-a11y/alt-text */
import React from "react";

export default function Card(props) {
  return (
    <div className="general">
      <div>
        <div className="zindexle">
          <p className="card-mini-text">Sold Out</p>
        </div>

        <img className="card-photo-1" src={props.img} />
        <container>
          <div>
            <img src="/star 1.png" />

            <span> {props.rating}</span>
            <span className="text-shadow"> {props.reviewCount}</span>
            <span className="text-shadow"> {props.country}</span>
          </div>
          <p className="card-p">{props.title}</p>
          <p className="card-p-2">{props.price}</p>
        </container>
      </div>

    </div>
  );
}