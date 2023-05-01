import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Visualization from "../components/Visualization";
import { MODE } from "../function/common";
import {
  TREE_CONSTANT,
  getTreeLine,
  getTreeNodeRandomInt,
} from "../function/binarySearchTree/binarySearchTree";

function BinarySearchTreeMain() {
  const [treeNodeArray, setTreeArray] = useState([
    ...getTreeNodeRandomInt(10, 40, 50),
  ]);

  const [obj, setObj] = useState({
    nodeArray: treeNodeArray,
    lineArray: getTreeLine(treeNodeArray),
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
