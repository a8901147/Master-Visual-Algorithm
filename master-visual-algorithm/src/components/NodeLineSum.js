import NodeSum from "./NodeSum";
import ArrowLineSum from "./Linked-List/ArrowLineSum";
import { MODE } from "../function/common";

function NodeLineSum({ currentSubArray, withArrow, mode }) {
  // console.log("NodeLineSum");
  // console.log(currentSubArray);
  // console.log(withArrow);
  if (Object.keys(currentSubArray).length) {
    const nodeSubArray = currentSubArray.nodeArray;
    const lineArray = currentSubArray.lineArray;
    const height = mode === MODE.LINKED_LIST ? "200" : "500";

    return (
      <svg width="100%" height={height}>
        <g id="nodeGroup">
          <NodeSum nodeSubArray={nodeSubArray}></NodeSum>
        </g>
        <g id="lineGroup">
          <ArrowLineSum
            lineArray={lineArray}
            withArrow={withArrow}
          ></ArrowLineSum>
        </g>
      </svg>
    );
  }
}

export default NodeLineSum;
