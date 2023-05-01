import { STATE_PREFIX, STATE_POSTFIX, CIRCLE_RADIUS } from "../common";
import {
  ARROW_LENGTH,
  degree45_xy,
  FIRST_ARROW_X,
  FIRST_NODE_X,
  NODE_LOWER_Y,
  NODE_UPPER_Y,
} from "./constant";

export const search = (obj, searchValue) => {
  const sortobj = JSON.parse(JSON.stringify(obj));
  const records = [];
  const nodeArray = sortobj.nodeArray;
  const lineArray = sortobj.lineArray;
  records.push(JSON.parse(JSON.stringify(sortobj)));
  let index = 0;
  for (index = 0; index < nodeArray.length; index++) {
    if (index) {
      lineArray[index - 1].passed = true;
      records.push(JSON.parse(JSON.stringify(sortobj)));
    }

    nodeArray[index].passed = true;
    markedTempIndex(nodeArray, index);
    records.push(JSON.parse(JSON.stringify(sortobj)));

    const value = nodeArray[index].value;
    if (value == searchValue) {
      records.push(JSON.parse(JSON.stringify(sortobj)));
      break;
    }

    if (value != searchValue && index == nodeArray.length - 1) {
      nodeArray[index].marked = false;
      nodeArray[index].pre_aft_newNode_temp = "";
      records.push(JSON.parse(JSON.stringify(sortobj)));
    }
  }

  return records;
};

export const insert = (obj, insertValue, insertPosition) => {
  const sortobj = JSON.parse(JSON.stringify(obj));
  const records = [];
  const nodeArray = sortobj.nodeArray;
  const lineArray = sortobj.lineArray;
  // insertPosition = parseInt(insertPosition);

  records.push(JSON.parse(JSON.stringify(sortobj)));

  if (insertPosition == 0) {
    console.log("insert head");
    //insert head

    // insert new node
    const newNode = createNode(nodeArray[insertPosition].x, 150, insertValue);
    newNode.passed = true;
    nodeArray.splice(insertPosition, 0, newNode);
    records.push(JSON.parse(JSON.stringify(sortobj)));

    //insert new arrow (newnode -> back node)
    const newArrow = createArrow(
      nodeArray[insertPosition].x,
      130,
      nodeArray[insertPosition].x,
      80
    );
    newArrow.passed = true;
    lineArray.splice(insertPosition, 0, newArrow);
    records.push(JSON.parse(JSON.stringify(sortobj)));

    //renew node position
    renewNodes(nodeArray, insertPosition);
    //renew arrow target
    renewArrows(lineArray);
    //newNode become Head

    records.push(JSON.parse(JSON.stringify(sortobj)));
    return records;
  }

  if (insertPosition > nodeArray.length - 1) {
    console.log("insert tail");
    //insert tail

    // insert new node
    const newNode = createNode(
      nodeArray[nodeArray.length - 1].x,
      150,
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
      nodeArray[nodeArray.length - 1].x,
      70,
      nodeArray[nodeArray.length - 1].x,
      120
    );
    newArrow.passed = true;
    lineArray.splice(insertPosition, 0, newArrow);

    records.push(JSON.parse(JSON.stringify(sortobj)));

    //renew node position
    renewNodes(nodeArray, insertPosition);
    //renew arrow target
    renewArrows(lineArray);
    //newNode become Head

    records.push(JSON.parse(JSON.stringify(sortobj)));
    return records;
  }

  // insert middle
  // loop through
  console.log("insert middle");
  for (let index = 0; index < nodeArray.length; index++) {
    if (index) {
      lineArray[index - 1].passed = true;
      records.push(JSON.parse(JSON.stringify(sortobj)));
    }

    if (index == insertPosition) {
      nodeArray[index].passed = true;
      nodeArray[index].marked = true;
      nodeArray[index].pre_aft_newNode_temp = STATE_POSTFIX.AFT;

      records.push(JSON.parse(JSON.stringify(sortobj)));
      break;
    } else {
      nodeArray[index].passed = true;
      nodeArray[index].pre_aft_newNode_temp = STATE_POSTFIX.PRE;
      if (index) {
        nodeArray[index - 1].pre_aft_newNode_temp = "";
      }

      records.push(JSON.parse(JSON.stringify(sortobj)));
    }
  }

  // insert new node
  const newNode = createNode(nodeArray[insertPosition].x, 150, insertValue);
  newNode.passed = true;
  nodeArray.splice(insertPosition, 0, newNode);
  records.push(JSON.parse(JSON.stringify(sortobj)));

  //insert new arrow (newnode -> back node)
  const newArrow = createArrow(
    nodeArray[insertPosition].x,
    NODE_LOWER_Y + CIRCLE_RADIUS,

    nodeArray[insertPosition].x,
    NODE_UPPER_Y + CIRCLE_RADIUS
  );
  newArrow.passed = true;
  lineArray.splice(insertPosition, 0, newArrow);
  records.push(JSON.parse(JSON.stringify(sortobj)));

  //edit arrow (front node -> newnode)
  lineArray[insertPosition - 1].x1 = nodeArray[insertPosition - 1].x + 10;
  lineArray[insertPosition - 1].y1 = 60;
  lineArray[insertPosition - 1].x2 = nodeArray[insertPosition].x - 20;
  lineArray[insertPosition - 1].y2 = 130;
  records.push(JSON.parse(JSON.stringify(sortobj)));

  //renew node position
  renewNodes(nodeArray, insertPosition);

  //renew arrow target
  renewArrows(lineArray);

  records.push(JSON.parse(JSON.stringify(sortobj)));

  return records;
};

export const remove = (obj, removeIndex) => {
  const sortobj = JSON.parse(JSON.stringify(obj));
  const records = [];
  const nodeArray = sortobj.nodeArray;
  const lineArray = sortobj.lineArray;
  records.push(JSON.parse(JSON.stringify(sortobj)));

  if (!removeIndex) {
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
    renewNodes(nodeArray, 0);
    //renew arrow target
    renewArrows(lineArray);
    //newNode become Head

    records.push(JSON.parse(JSON.stringify(sortobj)));

    return records;
  }

  if (removeIndex > nodeArray.length - 1) {
    console.log("remove tail");

    for (let index = 0; index < nodeArray.length - 1; index++) {
      if (!index) {
        nodeArray[0].passed = true;
        nodeArray[0].pre_aft_newNode_temp = STATE_POSTFIX.PRE;
        records.push(JSON.parse(JSON.stringify(sortobj)));

        lineArray[0].passed = true;
        records.push(JSON.parse(JSON.stringify(sortobj)));

        nodeArray[1].passed = true;
        nodeArray[1].marked = true;
        nodeArray[1].pre_aft_newNode_temp = STATE_POSTFIX.TEMP;
        records.push(JSON.parse(JSON.stringify(sortobj)));
      }
      if (index) {
        nodeArray[index - 1].pre_aft_newNode_temp = "";
        nodeArray[index].marked = false;
      }

      nodeArray[index].passed = true;
      nodeArray[index].pre_aft_newNode_temp = STATE_POSTFIX.PRE;

      lineArray[index].passed = true;

      nodeArray[index + 1].passed = true;
      nodeArray[index + 1].marked = true;
      nodeArray[index + 1].pre_aft_newNode_temp = STATE_POSTFIX.TEMP;
      records.push(JSON.parse(JSON.stringify(sortobj)));
    }

    nodeArray.pop();
    lineArray.pop();

    //renew node position
    renewNodes(nodeArray, 0);
    //renew arrow target
    renewArrows(lineArray);
    //newNode become Head

    records.push(JSON.parse(JSON.stringify(sortobj)));
    return records;
  }

  // remove middle
  // loop through
  console.log("remove middle");
  for (let index = 0; index < nodeArray.length; index++) {
    if (index) {
      lineArray[index - 1].passed = true;
      records.push(JSON.parse(JSON.stringify(sortobj)));
    }

    if (index == removeIndex) {
      nodeArray[index].passed = true;
      nodeArray[index].marked = true;
      nodeArray[index].pre_aft_newNode_temp = STATE_POSTFIX.TEMP;
      records.push(JSON.parse(JSON.stringify(sortobj)));

      lineArray[index].passed = true;
      records.push(JSON.parse(JSON.stringify(sortobj)));

      nodeArray[index + 1].passed = true;
      nodeArray[index + 1].pre_aft_newNode_temp = STATE_POSTFIX.AFT;
      records.push(JSON.parse(JSON.stringify(sortobj)));
      break;
    } else {
      nodeArray[index].passed = true;
      nodeArray[index].pre_aft_newNode_temp = STATE_POSTFIX.PRE;
      if (index) {
        nodeArray[index - 1].pre_aft_newNode_temp = "";
      }

      records.push(JSON.parse(JSON.stringify(sortobj)));
    }
  }

  // remove middle

  // node lower to lower level
  nodeArray[removeIndex].y = NODE_LOWER_Y;
  console.log(degree45_xy);
  console.log(lineArray[removeIndex]);
  //extend arrow and change arrow direction
  lineArray[removeIndex - 1].x2 = lineArray[removeIndex].x2;
  lineArray[removeIndex].x1 = nodeArray[removeIndex].x + degree45_xy;
  lineArray[removeIndex].y1 = NODE_LOWER_Y - degree45_xy;
  lineArray[removeIndex].x2 = nodeArray[removeIndex + 1].x - degree45_xy;
  lineArray[removeIndex].y2 = NODE_UPPER_Y + degree45_xy;

  records.push(JSON.parse(JSON.stringify(sortobj)));

  //remove node and arrow
  nodeArray.splice(removeIndex, 1);
  lineArray.splice(removeIndex, 1);
  records.push(JSON.parse(JSON.stringify(sortobj)));

  //renew node position
  renewNodes(nodeArray, removeIndex);
  nodeArray[removeIndex - 1].passed = true;

  //renew arrow target
  renewArrows(lineArray);

  records.push(JSON.parse(JSON.stringify(sortobj)));

  return records;
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

const renewNodes = (nodeArray, insertPosition) => {
  for (let index = 0; index < nodeArray.length; index++) {
    nodeArray[index].x = FIRST_NODE_X + 100 * index;
    nodeArray[index].y = NODE_UPPER_Y;
    nodeArray[index].head_tail = "";
    if (!index) {
      nodeArray[index].head_tail = STATE_PREFIX.HEAD;
    }

    if (index == nodeArray.length - 1) {
      nodeArray[index].head_tail = STATE_PREFIX.TAIL;
    }
  }
};

const renewArrows = (lineArray) => {
  for (let index = 0; index < lineArray.length; index++) {
    lineArray[index].x1 = FIRST_ARROW_X + 100 * index;
    lineArray[index].y1 = NODE_UPPER_Y;
    lineArray[index].x2 = FIRST_ARROW_X + ARROW_LENGTH + 100 * index;
    lineArray[index].y2 = NODE_UPPER_Y;
    // lineArray
    [index].passed = false;
  }
};

const markedTempIndex = (nodeArray, index) => {
  let counter = 0;
  while (counter < nodeArray.length) {
    if (counter == index) {
      nodeArray[counter].marked = true;
      nodeArray[counter].pre_aft_newNode_temp = STATE_POSTFIX.TEMP;
    } else {
      nodeArray[counter].pre_aft_newNode_temp = "";
      nodeArray[counter].marked = false;
    }
    counter++;
  }
};
