import { CIRCLE_RADIUS, STATE_PREFIX } from "../common";

export const getVerticalNodeRandomInt = (max, firstX, firstY) => {
  return Array.from({ length: max }, (x, index) => ({
    value: Math.floor(Math.random() * 100),
    x: firstX,
    y: firstY + index * DISTANCE,
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

export const getVerticalSingleArrow = (max, firstX, firstY) => {
  return Array.from({ length: max - 1 }, (x, index) => ({
    y1: firstY + DISTANCE * index,
    x1: firstX,
    y2: firstY + DISTANCE * index + STACK_CONSTANT.ARROW_LENGTH,
    x2: firstX,
    passed: false,
    showed: true,
  }));
};

const FIRST_NODE_Y = 50;
const DISTANCE = 80;
const NODE_LEFT_X = 450;
const NODE_RIGHT_X = 550;

export const STACK_CONSTANT = {
  FIRST_NODE_Y: FIRST_NODE_Y,
  DISTANCE: DISTANCE,
  NODE_LEFT_X: NODE_LEFT_X,
  NODE_RIGHT_X: NODE_RIGHT_X,
  FIRST_ARROW_Y: FIRST_NODE_Y + CIRCLE_RADIUS,
  ARROW_LENGTH: DISTANCE - 2 * CIRCLE_RADIUS,
};
