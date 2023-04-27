import NodeSum from "../NodeSum";
import ArrowLineSum from "./ArrowLineSum";

function LinkedList({ currentSubArray }) {
  if (Object.keys(currentSubArray).length) {
    const nodeSubArray = currentSubArray.nodeArray;
    const singleSubArray = currentSubArray.singleArray;

    return (
      <svg width="auto" height="500">
        <g>
          <NodeSum nodeSubArray={nodeSubArray}></NodeSum>
        </g>
        <g>
          <ArrowLineSum
            singleSubArray={singleSubArray}
            withArrow={true}
          ></ArrowLineSum>
        </g>
      </svg>
    );
  }
}

export default LinkedList;
