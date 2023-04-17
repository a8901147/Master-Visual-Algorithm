import ArrowLine from "./ArrowLine";

function ArrowLineSum({ singleSubArray }) {
  return singleSubArray.map((value, index) => (
    <ArrowLine
      key={index}
      passed={value.passed}
      showed={value.showed}
      x1={value.x1}
      x2={value.x2}
      y1={value.y1}
      y2={value.y2}
    ></ArrowLine>
  ));
}

export default ArrowLineSum;
