import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Visualization from "../components/Visualization";
import { MODE } from "../function/common";

import {
  getVerticalNodeRandomInt,
  getVerticalSingleArrow,
  STACK_CONSTANT,
} from "../function/stack/constant";

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
        mode={MODE.STACK}
        onActionClick={onActionClickHandler}
        obj={obj}
      ></NavBar>

      <Visualization
        arr={recordsArray}
        delay={1000}
        mode={MODE.STACK}
      ></Visualization>
    </React.Fragment>
  );
}

export default StackMain;
