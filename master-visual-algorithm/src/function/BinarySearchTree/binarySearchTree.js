//balanced tree
//The absolute difference of heights of left and right subtrees at any node is less than 1

import { CIRCLE_RADIUS, STATE_PREFIX } from "../common";

// Binary search tree
// Array Representation :
// The binary tree can be represented using an array of size 2n+1 if the depth of the binary tree is n.
// If the parent element is at the index p, Then the left child will be stored in the index 2p+1
// and the right child will be stored in the index (2p)+2.

//The array representation of the above binary tree is :
//As in the above binary tree, A was the root node, so it will be stored in the 0th index.
//The left child of A will be stored in the 2(0)+1 that is equal to the 1st location.
//So, B is stored in index 1. And, similarly, the right child of A will be stored in the 2(0)+2 index.
//For every node, the left and right child will be stored accordingly.

const FIRST_NODE_X = 40;
const HOR_DISTANCE_MIN = 30;
const VER_DISTANCE_MIN = 100;

export const TREE_CONSTANT = {
  FIRST_NODE_X: FIRST_NODE_X,
  HOR_DISTANCE_MIN: HOR_DISTANCE_MIN,
  VER_DISTANCE_MIN: VER_DISTANCE_MIN,

  // FIRST_ARROW_Y: FIRST_NODE_X + CIRCLE_RADIUS,
  // ARROW_LENGTH: DISTANCE - 2 * CIRCLE_RADIUS,
};

const coordinateXMap = {
  0: { x: 15, y: 0 },
  1: { x: 7, y: 1 },
  2: { x: 23, y: 1 },
  3: { x: 3, y: 2 },
  4: { x: 11, y: 2 },
  5: { x: 19, y: 2 },
  6: { x: 27, y: 2 },
  7: { x: 1, y: 3 },
  8: { x: 5, y: 3 },
  9: { x: 9, y: 3 },
  10: { x: 13, y: 3 },
  11: { x: 17, y: 3 },
  12: { x: 21, y: 3 },
  13: { x: 25, y: 3 },
  14: { x: 29, y: 3 },
  15: { x: 0, y: 4 },
  16: { x: 2, y: 4 },
  17: { x: 4, y: 4 },
  18: { x: 6, y: 4 },
  19: { x: 8, y: 4 },
  20: { x: 10, y: 4 },
  21: { x: 12, y: 4 },
  22: { x: 14, y: 4 },
  23: { x: 16, y: 4 },
  24: { x: 18, y: 4 },
  25: { x: 20, y: 4 },
  26: { x: 22, y: 4 },
  27: { x: 24, y: 4 },
  28: { x: 26, y: 4 },
  29: { x: 28, y: 4 },
  30: { x: 30, y: 4 },
};

export const getTreeNodeRandomInt = (max, firstX, firstY) => {
  return Array.from({ length: max }, (x, index) => ({
    value: index,
    // x: firstX + index * distance,
    x: coordinateXMap[index].x * HOR_DISTANCE_MIN + firstX,
    y: coordinateXMap[index].y * VER_DISTANCE_MIN + firstY,
    passed: false,
    marked: false,
    head_tail:
      index == 0
        ? STATE_PREFIX.HEAD
        : index == max - 1
        ? STATE_PREFIX.TAIL
        : "",
    //pre_aft_newNode_temp: "",
    pre_aft_newNode_temp: coordinateXMap[index].x * HOR_DISTANCE_MIN + firstX,
  }));
};
