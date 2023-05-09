import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import NavBarTest from "../components/NavBarTest";
import Visualization from "../components/Visualization";
import { MODE } from "../function/common";
import {
  TREE_CONSTANT,
  getTreeLine,
  getTreeNodeRandomInt,
  initialTree,
} from "../function/binarySearchTree/binarySearchTree";

function BinarySearchTreeMain() {
  const [treeNodeArray, setTreeArray] = useState([
    ...getTreeNodeRandomInt(10, 40, 50),
  ]);

  const [obj, setObj] = useState({
    nodeArray: treeNodeArray,
    lineArray: getTreeLine(treeNodeArray),
  });
  const [recordsArray, setRecordsArray] = useState([obj]);

  const onActionClickHandler = (records) => {
    setRecordsArray(records);
    const newobj = JSON.parse(JSON.stringify(records[records.length - 1]));
    initialTree(newobj);
    setObj(newobj);
  };

  return (
    <div style={{ margin: "50px" }}>
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
    </div>
  );
}

export default BinarySearchTreeMain;
