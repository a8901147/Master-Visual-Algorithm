function SortingBars({ currentSubArray }) {
  if (Object.keys(currentSubArray).length) {
    const arr = currentSubArray.arr;
    const sortingIndex = currentSubArray.sortingIndex;
    const pivotIndex = currentSubArray.pivotIndex;

    const values = arr.map((obj) => obj.number);

    const maxVal = Math.max(...values);
    const barWidth = 45;
    const graphWidth = arr.length * barWidth;
    const graphHeight = maxVal * 5;

    return (
      <svg width={graphWidth} height={graphHeight}>
        {arr.map((value, index) => (
          <g key={index}>
            <rect
              x={index * barWidth}
              y={graphHeight - value.number * 5}
              width={barWidth - 2}
              height={value.number * 5}
              fill={
                value.sorted
                  ? "#fab700"
                  : pivotIndex.includes(index)
                  ? "#038d71"
                  : sortingIndex.includes(index)
                  ? "#F56565"
                  : "rgb(173,216,230)"
              }
              // fill="rgb(173,216,230)"
            />
            <text
              x={index * barWidth + barWidth / 2}
              y={graphHeight - 5}
              //fontSize="10"
              textAnchor="middle"
            >
              {value.number}
            </text>
          </g>
        ))}
      </svg>
    );
  } else {
    return <p></p>;
  }
}

export default SortingBars;

// return (
//   <g
//     style={{
//       transform: `translate(${index * 50}px,${(100 - value.number) * 3}px)`,
//     }}
//   >
//     <rect
//       width="45"
//       height={value.number * 3}
//       style={{ fill: "rgb(173,216,230)" }}
//     />
//     <text textAnchor="middle" dy="1em" x="22.5" y={value.number * 3}>
//       {value.word}
//     </text>
//   </g>
// );
