import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Visualization from "../components/Visualization";
import { MODE } from "../function/common";
import {
  TREE_CONSTANT,
  getTreeNodeRandomInt,
} from "../function/BinarySearchTree/binarySearchTree";
import {
  FIRST_ARROW_X,
  FIRST_NODE_X,
  NODE_UPPER_Y,
  getHorizonSingleArrow,
} from "../function/linked-list/constant";

function BinarySearchTreeMain() {
  const [obj, setObj] = useState({
    nodeArray: [
      ...getTreeNodeRandomInt(31, 40, 50), //450
      // ...getTreeNodeRandomInt(2, 250, 150, 480), //210
      // ...getTreeNodeRandomInt(4, 130, 250, 240), //90
      // ...getTreeNodeRandomInt(8, 70, 350, 120), //30
      // ...getTreeNodeRandomInt(16, 40, 450, 60), //0
    ],
    lineArray: getHorizonSingleArrow(16, FIRST_ARROW_X, NODE_UPPER_Y),
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
        mode={MODE.BINARYSEARCHTREE}
        onActionClick={onActionClickHandler}
        obj={obj}
      ></NavBar>

      <Visualization
        arr={recordsArray}
        delay={1000}
        mode={MODE.BINARYSEARCHTREE}
      ></Visualization>
    </React.Fragment>
  );
}

export default BinarySearchTreeMain;
