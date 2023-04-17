import React from "react";

function Node({ value, x, y, passed, marked }) {
  const radius = "20";

  return (
    <React.Fragment>
      <circle
        cx={x}
        cy={y}
        r={radius}
        fill={marked ? "rgb(82, 188, 105)" : passed ? "#ff8a27" : "white"}
        stroke="black"
        strokeWidth="2"
      />
      <text x={x} y={y} textAnchor="middle" alignmentBaseline="central">
        {value}
      </text>
    </React.Fragment>
  );
}
export default Node;
