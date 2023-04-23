import { CIRCLE_RADIUS, STATE_PREFIX } from "../common";

export const getHorizonNodeRandomInt = (max, firstX, firstY) => {
  return Array.from({ length: max }, (x, index) => ({
    value: Math.floor(Math.random() * 100),
    x: firstX + index * DISTANCE,
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
    x1: firstX + DISTANCE * index,
    y1: firstY,
    x2: firstX + ARROW_LENGTH + DISTANCE * index,
    y2: firstY,
    passed: false,
    showed: true,
  }));
};

export const FIRST_NODE_X = 100;
const DISTANCE = 100;
export const NODE_UPPER_Y = 50;
export const NODE_LOWER_Y = 150;

export const FIRST_ARROW_X = FIRST_NODE_X + 20;
export const ARROW_LENGTH = DISTANCE - 2 * CIRCLE_RADIUS;
export const degree45_xy = CIRCLE_RADIUS / Math.SQRT2;
