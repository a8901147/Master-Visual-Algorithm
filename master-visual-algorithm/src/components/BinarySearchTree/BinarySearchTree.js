import ArrowLineSum from "../Linked-List/ArrowLineSum";
import NodeSum from "../NodeSum";

function BinarySearchTree({ currentSubArray }) {
  console.log("BinarySearchTree");
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
            withArrow={false}
          ></ArrowLineSum>
        </g>
      </svg>
    );
  }
}

export default BinarySearchTree;
