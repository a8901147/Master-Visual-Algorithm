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
      head_tail={value.head_tail}
      pre_aft_newNode_temp={value.pre_aft_newNode_temp}
    ></Node>
  ));
}

export default NodeSum;
