import ArrowLine from "./ArrowLine";

function ArrowLineSum({ singleSubArray, withArrow }) {
  return singleSubArray.map((value, index) => (
    <ArrowLine
      key={index}
      passed={value.passed}
      showed={value.showed}
      x1={value.x1}
      x2={value.x2}
      y1={value.y1}
      y2={value.y2}
      withArrow={withArrow}
    ></ArrowLine>
  ));
}

export default ArrowLineSum;
