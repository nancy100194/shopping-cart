import React, { useState } from "react";

export default function Star(props) {
  let [count] = useState(props.ratingStar);
  let [color] = useState([]);

  for (var i = 0; i < count; i++) {
    color[i] = "orange";
  }
  return (
    <div>
      <span style={{ color: color[0] }} className="fa fa-star"></span>
      <span style={{ color: color[1] }} className="fa fa-star"></span>
      <span style={{ color: color[2] }} className="fa fa-star"></span>
      <span style={{ color: color[3] }} className="fa fa-star"></span>
      <span style={{ color: color[4] }} className="fa fa-star"></span>
    </div>
  );
}