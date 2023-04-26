import NodeSum from "../NodeSum";

function BinarySearchTree({ currentSubArray }) {
  if (Object.keys(currentSubArray).length) {
    const nodeSubArray = currentSubArray.nodeArray;
    const singleSubArray = currentSubArray.singleArray;

    return (
      <svg width="auto" height="500">
        <g>
          <NodeSum nodeSubArray={nodeSubArray}></NodeSum>
        </g>
        <g>
          {/* <ArrowLineSum singleSubArray={singleSubArray}></ArrowLineSum> */}
        </g>
      </svg>
    );
  }
}

export default BinarySearchTree;
