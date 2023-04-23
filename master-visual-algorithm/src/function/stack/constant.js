import { STATE_PREFIX } from "../common";

export const pop = () => {
  console.log("pop");
};

export const getVerticalNodeRandomInt = (max, firstX, firstY) => {
  return Array.from({ length: max }, (x, index) => ({
    value: Math.floor(Math.random() * 100),
    x: firstX,
    y: firstY + index * STACK_CONSTANT.DISTANCE,
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
    y1: firstY + STACK_CONSTANT.DISTANCE * index,
    x1: firstX,
    y2: firstY + STACK_CONSTANT.DISTANCE * index + STACK_CONSTANT.ARROW_LENGTH,
    x2: firstX,
    passed: false,
    showed: true,
  }));
};

const FIRST_NODE_Y = 20;

export const STACK_CONSTANT = {
  FIRST_NODE_Y: FIRST_NODE_Y,
  DISTANCE: 80,
  NODE_LEFT_X: 150,
  NODE_RIGHT_X: 250,
  FIRST_ARROW_Y: FIRST_NODE_Y + 20,
  ARROW_LENGTH: 40,
};
