import NodeSum from "./NodeSum";
import ArrowLineSum from "./Linked-List/ArrowLineSum";

function NodeLineSum({ currentSubArray, withArrow }) {
  console.log("NodeLineSum");
  console.log(currentSubArray);
  // console.log(withArrow);
  if (Object.keys(currentSubArray).length) {
    const nodeSubArray = currentSubArray.nodeArray;
    const lineArray = currentSubArray.lineArray;

    return (
      <svg width="auto" height="500">
        <g>
          <NodeSum nodeSubArray={nodeSubArray}></NodeSum>
        </g>
        <g>
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
