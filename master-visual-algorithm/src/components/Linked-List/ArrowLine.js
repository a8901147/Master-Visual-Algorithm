import React, { useRef, useEffect } from "react";
//import * as d3 from "d3";

/*
const ArrowLine = ({ x1, y1, x2, y2, passed, showed }) => {
  const svgRef = useRef(null);

  useEffect(() => {
    const svg = d3.select(svgRef.current);

    svg
      .append("defs")
      .append("marker")
      .attr("id", "arrowhead")
      .attr("markerWidth", "10")
      .attr("markerHeight", "7")
      .attr("refX", "10")
      .attr("refY", "3.5")
      .attr("orient", "auto")
      .attr("fill", passed ? "#ff8a27" : "black")

      .append("polygon")
      .attr("points", "0 0, 10 3.5, 0 7");
    svg
      .append("line")
      .attr("x1", x1)
      .attr("y1", y1)
      .attr("x2", x2)
      .attr("y2", y2)
      .attr("stroke", passed ? "#ff8a27" : "black")

      .attr("marker-end", "url(#arrowhead)");

    return () => {
      // clear all previous content on refresh

      const everything = svg.selectAll("*");
      everything.remove();
    };
  }, [x1, y1, x2, y2, passed]);
  if (showed) {
    return <svg ref={svgRef}></svg>;
  }
};

export default ArrowLine;
*/

const ArrowLine = ({ x1, y1, x2, y2, passed, showed, withArrow }) => {
  //console.log(withArrow);
  const color = passed ? "#ff8a27" : "black";
  // deleted showed
  if (showed) {
    if (withArrow) {
      return (
        <svg>
          <defs>
            <marker
              id="arrowhead"
              markerWidth="10"
              markerHeight="7"
              refX="10"
              refY="3.5"
              orient="auto"
              fill={color}
            >
              <polygon points="0 0, 10 3.5, 0 7"></polygon>
            </marker>
          </defs>
          <line
            x1={x1}
            x2={x2}
            y1={y1}
            y2={y2}
            stroke={color}
            markerEnd="url(#arrowhead)"
          ></line>
        </svg>
      );
    } else {
      return (
        <svg>
          <line
            x1={x1}
            x2={x2}
            y1={y1}
            y2={y2}
            strokeWidth={2}
            stroke={color}
          ></line>
        </svg>
      );
    }
  } else {
    return;
  }
};

export default ArrowLine;
