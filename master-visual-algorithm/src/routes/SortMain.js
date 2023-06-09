import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Visualization from "../components/Visualization";
import { ActiveMode, MODE, getSortRandomInt } from "../function/common";

function SortMain() {
  const [sortArray, setSortArray] = useState(getSortRandomInt(16));
  const [obj, setObj] = useState({
    arr: sortArray,
    sortingIndex: [],
    pivotIndex: [],
    type: ActiveMode.BUBBLE_SORT,
  });
  const [recordsArray, setRecordsArray] = useState([obj]);

  // useEffect(() => {
  //   setRecordsArray([obj]);
  // }, [obj]);
  const onActionClickHandler = (records) => {
    setRecordsArray(records);
  };

  const onSortTypeHandler = (value) => {
    setObj({
      arr: sortArray,
      sortingIndex: [],
      pivotIndex: [],
      type: value,
    });
  };
  console.log(obj);
  console.log(recordsArray);
  return (
    <div style={{ margin: "50px" }}>
      <NavBar
        mode={MODE.SORT}
        onSortTypeClick={onSortTypeHandler}
        onActionClick={onActionClickHandler}
        obj={obj}
      ></NavBar>

      <Visualization
        arr={recordsArray}
        delay={500}
        mode={MODE.SORT}
      ></Visualization>
    </div>
  );
}

export default SortMain;
