import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Visualization from "../components/Visualization";
import { MODE } from "../function/common";
import {
  getHorizonNodeRandomInt,
  getHorizonSingleArrow,
  LINKEDLIST_CONSTANT,
} from "../function/linked-list/constant";
import { initialLinkedList } from "../function/linked-list/linked-list";

function LinkedListMain() {
  const [obj, setObj] = useState({
    nodeArray: getHorizonNodeRandomInt(
      16,
      LINKEDLIST_CONSTANT.FIRST_NODE_X,
      LINKEDLIST_CONSTANT.NODE_UPPER_Y
    ),
    lineArray: getHorizonSingleArrow(
      16,
      LINKEDLIST_CONSTANT.FIRST_ARROW_X,
      LINKEDLIST_CONSTANT.NODE_UPPER_Y
    ),
  });
  const [recordsArray, setRecordsArray] = useState([obj]);
  console.log(obj);
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
    </div>
  );
}

export default LinkedListMain;
