import React from "react";
import { CIRCLE_RADIUS } from "../../function/common";

function Node({
  value,
  x,
  y,
  passed,
  marked,
  head_tail,
  pre_aft_newNode_temp,
}) {
  const state =
    head_tail && pre_aft_newNode_temp
      ? head_tail + "/" + pre_aft_newNode_temp
      : head_tail + pre_aft_newNode_temp;
  return (
    <React.Fragment>
      <circle
        cx={x}
        cy={y}
        r={CIRCLE_RADIUS}
        fill={marked ? "rgb(82, 188, 105)" : passed ? "#ff8a27" : "white"}
        stroke="black"
        strokeWidth="2"
      />
      <text x={x} y={y} textAnchor="middle" alignmentBaseline="central">
        {value}
      </text>
      <text x={x} y={y + 30} textAnchor="middle" alignmentBaseline="central">
        {state}
      </text>
    </React.Fragment>
  );
}
export default Node;
