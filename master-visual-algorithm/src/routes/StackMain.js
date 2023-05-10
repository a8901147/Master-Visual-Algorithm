import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Visualization from "../components/Visualization";
import { MODE } from "../function/common";

import {
  getVerticalNodeRandomInt,
  getVerticalSingleArrow,
  STACK_CONSTANT,
} from "../function/stack/constant";
import { initialLinkedList } from "../function/linked-list/linked-list";

function StackMain() {
  const NODE_NUMBER = 4;
  const [obj, setObj] = useState({
    nodeArray: getVerticalNodeRandomInt(
      NODE_NUMBER,
      STACK_CONSTANT.NODE_RIGHT_X,
      STACK_CONSTANT.FIRST_NODE_Y
    ),
    lineArray: getVerticalSingleArrow(
      NODE_NUMBER,
      STACK_CONSTANT.NODE_RIGHT_X,
      STACK_CONSTANT.FIRST_ARROW_Y
    ),
  });
  const [recordsArray, setRecordsArray] = useState([obj]);

  // useEffect(() => {
  //   setRecordsArray([obj]);
  // }, [obj]);

  const onActionClickHandler = (records) => {
    setRecordsArray(records);
    const newobj = JSON.parse(JSON.stringify(records[records.length - 1]));

    initialLinkedList(newobj);
    setObj(newobj);
  };

  return (
    <div style={{ margin: "50px" }}>
      <NavBar
        mode={MODE.STACK}
        onActionClick={onActionClickHandler}
        obj={obj}
      ></NavBar>

      <Visualization
        arr={recordsArray}
        delay={500}
        mode={MODE.STACK}
      ></Visualization>
    </div>
  );
}

export default StackMain;
