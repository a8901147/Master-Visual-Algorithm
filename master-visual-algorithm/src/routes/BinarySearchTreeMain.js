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
      ...getTreeNodeRandomInt(1, TREE_CONSTANT.FIRST_NODE_X, 50, 60),
      ...getTreeNodeRandomInt(2, 185, 150, 480),
      ...getTreeNodeRandomInt(4, 130, 250, 240),
      ...getTreeNodeRandomInt(8, 70, 350, 120),
      ...getTreeNodeRandomInt(16, 40, 450, 60),
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
