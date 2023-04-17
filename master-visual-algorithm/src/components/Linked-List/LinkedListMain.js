import React, { useEffect, useState } from "react";
import NavBar from "../NavBar";
import Visualization from "../Visualization";
import {
  MODE,
  getNodeRandomInt,
  getSingleArrow,
  FIRST_NODE_X,
  NODE_UPPER_Y,
  FIRST_ARROW_X,
} from "../../function/common";

function LinkedListMain() {
  const [obj, setObj] = useState({
    nodeArray: getNodeRandomInt(6, FIRST_NODE_X, NODE_UPPER_Y),
    singleArray: getSingleArrow(6, FIRST_ARROW_X, NODE_UPPER_Y),
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
