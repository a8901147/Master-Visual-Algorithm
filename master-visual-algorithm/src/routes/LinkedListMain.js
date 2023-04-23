import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Visualization from "../components/Visualization";
import { MODE } from "../function/common";
import {
  getHorizonNodeRandomInt,
  getHorizonSingleArrow,
  FIRST_NODE_X,
  NODE_UPPER_Y,
  FIRST_ARROW_X,
} from "../function/linked-list/constant";

function LinkedListMain() {
  const [obj, setObj] = useState({
    nodeArray: getHorizonNodeRandomInt(6, FIRST_NODE_X, NODE_UPPER_Y),
    singleArray: getHorizonSingleArrow(6, FIRST_ARROW_X, NODE_UPPER_Y),
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
        mode={MODE.LINKED_LIST}
        // onActionTypeClick={onClickHandler}
        onActionClick={onActionClickHandler}
        obj={obj}
      ></NavBar>

      <Visualization
        arr={recordsArray}
        delay={1000}
        mode={MODE.LINKED_LIST}
      ></Visualization>
    </React.Fragment>
  );
}

export default LinkedListMain;
