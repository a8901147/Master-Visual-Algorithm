import Node from "./Node";

function NodeSum({ nodeSubArray }) {
  return nodeSubArray.map((value, index) => (
    <Node
      key={index}
      value={value.value}
      x={value.x}
      y={value.y}
      passed={value.passed}
      marked={value.marked}
    ></Node>
  ));
}

export default NodeSum;
