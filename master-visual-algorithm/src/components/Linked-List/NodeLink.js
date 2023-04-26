import React from "react";
import ArrowLine from "./ArrowLine";
import Node from "../Node";

function NodeLink(props) {
  const { index, value, x, y, checked } = props;

  if (index === 0) {
    return (
      <React.Fragment>
        <Node value={value} x={x} y={y} checked={checked}></Node>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <ArrowLine x1={x - 80} y1={y} x2={x - 30} y2={y}></ArrowLine>
        <Node value={value} x={x} y={y} checked={checked}></Node>
      </React.Fragment>
    );
  }
}
export default NodeLink;
