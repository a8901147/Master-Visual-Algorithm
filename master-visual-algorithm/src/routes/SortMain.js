import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Visualization from "../components/Visualization";
import { MODE, getSortRandomInt } from "../function/common";

function SortMain() {
  const [obj, setObj] = useState({
    arr: getSortRandomInt(9),
    sortingIndex: [],
    pivotIndex: [],
  });
  const [recordsArray, setRecordsArray] = useState([]);

  useEffect(() => {
    setRecordsArray([obj]);
  }, [obj]);
  const onActionClickHandler = (records) => {
    setRecordsArray(records);
  };
  return (
    <React.Fragment>
      <NavBar
        mode={MODE.SORT}
        // onActionTypeClick={onClickHandler}
        onActionClick={onActionClickHandler}
        obj={obj}
      ></NavBar>

      <Visualization
        arr={recordsArray}
        delay={1000}
        mode={MODE.SORT}
      ></Visualization>
    </React.Fragment>
  );
}

export default SortMain;
