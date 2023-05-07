import { CIRCLE_RADIUS, STATE_PREFIX } from "../common";

export const getHorizonNodeRandomInt = (max, firstX, firstY) => {
  return Array.from({ length: max }, (x, index) => ({
    value: Math.floor(Math.random() * 100),
    x: firstX + index * HOR_DISTANCE,
    y: firstY,
    passed: false,
    marked: false,
    head_tail:
      index == 0
        ? STATE_PREFIX.HEAD
        : index == max - 1
        ? STATE_PREFIX.TAIL
        : "",
    pre_aft_newNode_temp: "",
  }));
};

export const getHorizonSingleArrow = (max, firstX, firstY) => {
  return Array.from({ length: max - 1 }, (x, index) => ({
    x1: firstX + HOR_DISTANCE * index,
    y1: firstY,
    x2: firstX + ARROW_LENGTH + HOR_DISTANCE * index,
    y2: firstY,
    passed: false,
    showed: true,
  }));
};

export const renewNodes = (nodeArray) => {
  for (let index = 0; index < nodeArray.length; index++) {
    nodeArray[index].x = FIRST_NODE_X + HOR_DISTANCE * index;
    nodeArray[index].y = NODE_UPPER_Y;
    // nodeArray[index].head_tail = "";
    // if (!index) {
    //   nodeArray[index].head_tail = STATE_PREFIX.HEAD;
    // }

    // if (index == nodeArray.length - 1) {
    //   nodeArray[index].head_tail = STATE_PREFIX.TAIL;
    // }
    nodeArray[index].head_tail =
      index == 0
        ? STATE_PREFIX.HEAD
        : index == nodeArray.length - 1
        ? STATE_PREFIX.TAIL
        : "";
  }
};

export const renewArrows = (lineArray) => {
  for (let index = 0; index < lineArray.length; index++) {
    lineArray[index].x1 =
      LINKEDLIST_CONSTANT.FIRST_ARROW_X + HOR_DISTANCE * index;
    lineArray[index].y1 = NODE_UPPER_Y;
    lineArray[index].x2 =
      LINKEDLIST_CONSTANT.FIRST_ARROW_X + ARROW_LENGTH + HOR_DISTANCE * index;
    lineArray[index].y2 = NODE_UPPER_Y;
    // lineArray
    [index].passed = false;
  }
};

const FIRST_NODE_X = 40;
const HOR_DISTANCE = 70;
const NODE_UPPER_Y = 50;
const NODE_LOWER_Y = 150;

export const LINKEDLIST_CONSTANT = {
  FIRST_NODE_X: FIRST_NODE_X,
  HOR_DISTANCE: HOR_DISTANCE,
  NODE_UPPER_Y: NODE_UPPER_Y,
  NODE_LOWER_Y: NODE_LOWER_Y,
  FIRST_ARROW_X: FIRST_NODE_X + CIRCLE_RADIUS,
};

// export const FIRST_ARROW_X = FIRST_NODE_X + 20;
export const ARROW_LENGTH = HOR_DISTANCE - 2 * CIRCLE_RADIUS;
export const degree45_xy = CIRCLE_RADIUS / Math.SQRT2;
