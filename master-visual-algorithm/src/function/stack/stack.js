import { STATE_POSTFIX, STATE_PREFIX } from "../common";
import { STACK_CONSTANT } from "./constant";

export const pop = (obj) => {
  const sortobj = JSON.parse(JSON.stringify(obj));
  const records = [];
  const nodeArray = sortobj.nodeArray;
  const lineArray = sortobj.lineArray;

  records.push(JSON.parse(JSON.stringify(sortobj)));

  console.log("remove head");
  nodeArray[0].passed = true;
  nodeArray[0].pre_aft_newNode_temp = STATE_POSTFIX.TEMP;
  records.push(JSON.parse(JSON.stringify(sortobj)));

  lineArray[0].passed = true;
  records.push(JSON.parse(JSON.stringify(sortobj)));

  nodeArray[0].head_tail = "";
  nodeArray[1].passed = true;
  nodeArray[1].marked = true;
  nodeArray[1].head_tail = STATE_PREFIX.HEAD;
  records.push(JSON.parse(JSON.stringify(sortobj)));

  nodeArray.shift();
  lineArray.shift();

  //renew node position
  renewVerticalNodes(nodeArray);
  //renew arrow target
  renewVerticalArrows(lineArray);
  //newNode become Head

  records.push(JSON.parse(JSON.stringify(sortobj)));

  return records;
};

export const push = (obj, insertValue) => {
  const sortobj = JSON.parse(JSON.stringify(obj));
  const records = [];
  const nodeArray = sortobj.nodeArray;
  const lineArray = sortobj.lineArray;
  // insertPosition = parseInt(insertPosition);

  records.push(JSON.parse(JSON.stringify(sortobj)));

  console.log("insert tail");
  //insert tail

  // insert new node
  const newNode = createNode(
    STACK_CONSTANT.NODE_RIGHT_X,
    nodeArray[nodeArray.length - 1].y + STACK_CONSTANT.DISTANCE,
    insertValue
  );
  newNode.passed = true;
  nodeArray.push(newNode);
  records.push(JSON.parse(JSON.stringify(sortobj)));

  // mark tail and point to newNode
  nodeArray[nodeArray.length - 2].passed = true;
  nodeArray[nodeArray.length - 2].marked = true;
  //insert new arrow (newnode -> back node)
  const newArrow = createArrow(
    STACK_CONSTANT.NODE_RIGHT_X,
    nodeArray[nodeArray.length - 1].y1 + STACK_CONSTANT.DISTANCE,
    STACK_CONSTANT.NODE_RIGHT_X,
    nodeArray[nodeArray.length - 1].y2 + STACK_CONSTANT.DISTANCE
  );
  newArrow.passed = true;
  lineArray.push(newArrow);

  records.push(JSON.parse(JSON.stringify(sortobj)));

  //renew node position
  renewVerticalNodes(nodeArray);
  //renew arrow target
  renewVerticalArrows(lineArray);
  //newNode become Head

  records.push(JSON.parse(JSON.stringify(sortobj)));

  return records;
};

const renewVerticalNodes = (nodeArray) => {
  for (let index = 0; index < nodeArray.length; index++) {
    nodeArray[index].x = STACK_CONSTANT.NODE_RIGHT_X;
    nodeArray[index].y =
      STACK_CONSTANT.FIRST_NODE_Y + STACK_CONSTANT.DISTANCE * index;
    nodeArray[index].head_tail = "";
    if (!index) {
      nodeArray[index].head_tail = STATE_PREFIX.HEAD;
    }

    if (index == nodeArray.length - 1) {
      nodeArray[index].head_tail = STATE_PREFIX.TAIL;
    }
    // if (index == insertPosition) {
    //   nodeArray[index].passed = true;
    // } else {
    //   nodeArray[index].passed = false;
    // }
  }
};

const renewVerticalArrows = (lineArray) => {
  for (let index = 0; index < lineArray.length; index++) {
    lineArray[index].x1 = STACK_CONSTANT.NODE_RIGHT_X;
    lineArray[index].y1 =
      STACK_CONSTANT.FIRST_ARROW_Y + STACK_CONSTANT.DISTANCE * index;
    lineArray[index].x2 = STACK_CONSTANT.NODE_RIGHT_X;
    lineArray[index].y2 =
      STACK_CONSTANT.FIRST_ARROW_Y +
      STACK_CONSTANT.ARROW_LENGTH +
      STACK_CONSTANT.DISTANCE * index;

    // lineArray[index].passed = false;
  }
};

const createNode = (x, y, value) => {
  return {
    value: value,
    x: x,
    y: y,
    passed: false,
    marked: false,
    head_tail: "",
    pre_aft_newNode_temp: STATE_POSTFIX.NEWNODE,
  };
};

const createArrow = (x1, y1, x2, y2) => {
  return {
    x1: x1,
    y1: y1,
    x2: x2,
    y2: y2,
    passed: false,
    showed: true,
  };
};
