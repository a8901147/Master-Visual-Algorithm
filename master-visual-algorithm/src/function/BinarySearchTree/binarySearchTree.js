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
const DISTANCE = 60;

export const TREE_CONSTANT = {
  FIRST_NODE_X: FIRST_NODE_X,
  DISTANCE: DISTANCE,

  // FIRST_ARROW_Y: FIRST_NODE_X + CIRCLE_RADIUS,
  // ARROW_LENGTH: DISTANCE - 2 * CIRCLE_RADIUS,
};

export const getTreeNodeRandomInt = (max, firstX, firstY, distance) => {
  return Array.from({ length: max }, (x, index) => ({
    value: Math.floor(Math.random() * 100),
    x: firstX + index * distance,
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
