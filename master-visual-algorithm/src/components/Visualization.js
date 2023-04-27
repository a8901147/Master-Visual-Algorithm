import React, { useState, useEffect } from "react";
import SortingBars from "./Sorting/SortingBars";
import ProgressBar from "./Sorting/ProgressBar";
import { MODE } from "../function/common";
import NodeLineSum from "./NodeLineSum";

function Visualization({ arr, delay, mode }) {
  const [currentSubArrayIndex, setCurrentSubArrayIndex] = useState(0);
  const [currentSubArray, setCurrentSubArray] = useState({});
  const [progressBarFlag, setProgressBarFlag] = useState(0);

  useEffect(() => {
    if (arr.length != 1) {
      if (!progressBarFlag) {
        if (currentSubArrayIndex < arr.length) {
          const timerId = setTimeout(() => {
            setCurrentSubArray(arr[currentSubArrayIndex]);
            if (arr.length > 1) {
              setCurrentSubArrayIndex(currentSubArrayIndex + 1);
            }
          }, delay);

          return () => {
            clearTimeout(timerId);
          };
        }
      } else {
        // setProgressBarFlag(0);
      }
    } else {
      setCurrentSubArray(arr[0]);
      setCurrentSubArrayIndex(0);
    }
  }, [currentSubArrayIndex, arr, delay, progressBarFlag]);

  const onChangeHandler = (x) => {
    setCurrentSubArray(arr[x]);
    setCurrentSubArrayIndex(x);
    setProgressBarFlag(1);
  };

  // const onlinkedListAuxValueHandler = () => {
  //   handlelinkedListAuxValueChange();
  // };

  if (mode === MODE.LINKED_LIST) {
    return (
      <div style={{ textAlign: "center" }}>
        <NodeLineSum
          currentSubArray={currentSubArray}
          withArrow={true}
        ></NodeLineSum>

        <ProgressBar
          value={currentSubArrayIndex}
          maxValue={arr.length}
          onSetCurrentSubArrayIndex={onChangeHandler}
        ></ProgressBar>
      </div>
    );
  } else if (mode === MODE.STACK) {
    return (
      <div style={{ textAlign: "center" }}>
        <NodeLineSum
          currentSubArray={currentSubArray}
          withArrow={true}
        ></NodeLineSum>
        <ProgressBar
          value={currentSubArrayIndex}
          maxValue={arr.length}
          onSetCurrentSubArrayIndex={onChangeHandler}
        ></ProgressBar>
      </div>
    );
  } else if (mode === MODE.SORT) {
    return (
      <div style={{ textAlign: "center" }}>
        <SortingBars currentSubArray={currentSubArray}></SortingBars>
        <ProgressBar
          value={currentSubArrayIndex}
          maxValue={arr.length}
          onSetCurrentSubArrayIndex={onChangeHandler}
        ></ProgressBar>
      </div>
    );
  } else if (mode === MODE.BINARYSEARCHTREE) {
    return (
      <div style={{ textAlign: "center" }}>
        <NodeLineSum
          currentSubArray={currentSubArray}
          withArrow={false}
        ></NodeLineSum>
        <ProgressBar
          value={currentSubArrayIndex}
          maxValue={arr.length}
          onSetCurrentSubArrayIndex={onChangeHandler}
        ></ProgressBar>
      </div>
    );
  }
}

export default Visualization;
