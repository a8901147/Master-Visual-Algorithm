import { STATE_POSTFIX, STATE_PREFIX } from "../common";
import { STACK_CONSTANT } from "./constant";

export const pop = (obj) => {
  const sortobj = JSON.parse(JSON.stringify(obj));
  const records = [];
  const nodeArray = sortobj.nodeArray;
  const singleArray = sortobj.singleArray;

  records.push(JSON.parse(JSON.stringify(sortobj)));

  console.log("remove head");
  nodeArray[0].passed = true;
  nodeArray[0].pre_aft_newNode_temp = STATE_POSTFIX.TEMP;
  records.push(JSON.parse(JSON.stringify(sortobj)));

  singleArray[0].passed = true;
  records.push(JSON.parse(JSON.stringify(sortobj)));

  nodeArray[0].head_tail = "";
  nodeArray[1].passed = true;
  nodeArray[1].marked = true;
  nodeArray[1].head_tail = STATE_PREFIX.HEAD;
  records.push(JSON.parse(JSON.stringify(sortobj)));

  nodeArray.shift();
  singleArray.shift();

  //renew node position
  renewNodes(nodeArray, 0);
  //renew arrow target
  renewArrows(singleArray);
  //newNode become Head

  records.push(JSON.parse(JSON.stringify(sortobj)));

  return records;
};

const renewNodes = (nodeArray, insertPosition) => {
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

const renewArrows = (singleArray) => {
  for (let index = 0; index < singleArray.length; index++) {
    singleArray[index].x1 = STACK_CONSTANT.NODE_RIGHT_X;
    singleArray[index].y1 =
      STACK_CONSTANT.FIRST_ARROW_Y + STACK_CONSTANT.DISTANCE * index;
    singleArray[index].x2 = STACK_CONSTANT.NODE_RIGHT_X;
    singleArray[index].y2 =
      STACK_CONSTANT.FIRST_ARROW_Y +
      STACK_CONSTANT.ARROW_LENGTH +
      STACK_CONSTANT.DISTANCE * index;

    // singleArray[index].passed = false;
  }
};
