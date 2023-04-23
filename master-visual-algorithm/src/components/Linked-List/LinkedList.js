import NodeSum from "./NodeSum";
import ArrowLineSum from "./ArrowLineSum";

function LinkedList({ currentSubArray }) {
  if (Object.keys(currentSubArray).length) {
    const nodeSubArray = currentSubArray.nodeArray;
    const singleSubArray = currentSubArray.singleArray;

    return (
      <svg width="100%" height="500">
        <g>
          <NodeSum nodeSubArray={nodeSubArray}></NodeSum>
        </g>
        <g>
          <ArrowLineSum singleSubArray={singleSubArray}></ArrowLineSum>
        </g>
      </svg>
    );
  }
}

export default LinkedList;
