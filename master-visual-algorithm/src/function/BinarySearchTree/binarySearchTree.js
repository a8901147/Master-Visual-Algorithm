//balanced tree
//The absolute difference of heights of left and right subtrees at any node is less than 1

import { CIRCLE_RADIUS, STATE_PREFIX } from "../common";
import { push } from "../stack/stack";

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

const FIRST_NODE_X = 60;
const HOR_DISTANCE_MIN = 30;
const VER_DISTANCE_MIN = 80;

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

const createBSTArray = (number) => {
  let counter = 0;
  const treeArray = Array.from({ length: 31 }, () => "");

  while (counter < number) {
    const insertValue = Math.floor(Math.random() * 100);
    if (!counter) {
      // first element
      treeArray[0] = insertValue;
      counter++;
      continue;
    }

    let index = 0;

    while (
      index < 32 &&
      insertValue != treeArray[index] &&
      treeArray[index] != ""
    ) {
      if (insertValue < treeArray[index]) {
        index = 2 * index + 1;
      } else {
        index = 2 * index + 2;
      }
    }

    if (treeArray[index] == "" && index < 32) {
      treeArray[index] = insertValue;
      counter++;
    }
  }

  return treeArray;
};

export const getTreeNodeRandomInt = (size, firstX, firstY) => {
  const treeArray = createBSTArray(size);
  return treeArray.map((value, index) => ({
    value: value === "" ? "" : value,
    x: coordinateXMap[index].x * HOR_DISTANCE_MIN + firstX,
    y: coordinateXMap[index].y * VER_DISTANCE_MIN + firstY,
    passed: false,
    marked: false,
    head_tail: index ? "" : STATE_PREFIX.ROOT,
    pre_aft_newNode_temp: "",
    // pre_aft_newNode_temp: coordinateXMap[index].x * HOR_DISTANCE_MIN + firstX,
  }));
};

export const getTreeLine = (treeArray) => {
  const lineArray = [];

  for (let index = 0; index < treeArray.length; index++) {
    if (2 * index + 1 < treeArray.length) {
      const { delta_X, delta_Y } = calculate_delta(
        treeArray[index],
        treeArray[2 * index + 1]
      );

      const hasLeftLine =
        treeArray[index].value != "" && treeArray[2 * index + 1].value != ""
          ? true
          : false;
      lineArray.push({
        x1: treeArray[index].x - delta_X,
        y1: treeArray[index].y + delta_Y,
        x2: treeArray[2 * index + 1].x + delta_X,
        y2: treeArray[2 * index + 1].y - delta_Y,
        passed: false,
        showed: hasLeftLine,
      });
    }

    if (2 * index + 2 < treeArray.length) {
      const hasRightLine =
        treeArray[index].value != "" && treeArray[2 * index + 2].value != ""
          ? true
          : false;

      const { delta_X, delta_Y } = calculate_delta(
        treeArray[index],
        treeArray[2 * index + 2]
      );
      lineArray.push({
        x1: treeArray[index].x + delta_X,
        y1: treeArray[index].y + delta_Y,
        x2: treeArray[2 * index + 2].x - delta_X,
        y2: treeArray[2 * index + 2].y - delta_Y,
        passed: false,
        showed: hasRightLine,
      });
    }
  }

  return lineArray;
};

const renewTreeLine = (obj) => {
  const sortobj = JSON.parse(JSON.stringify(obj));

  const nodeArray = sortobj.nodeArray;
  const lineArray = sortobj.lineArray;

  for (let index = 0; index < nodeArray.length; index++) {
    if (2 * index + 1 < nodeArray.length) {
      const { delta_X, delta_Y } = calculate_delta(
        nodeArray[index],
        nodeArray[2 * index + 1]
      );

      const hasLeftLine =
        nodeArray[index].value != "" && nodeArray[2 * index + 1].value != ""
          ? true
          : false;

      lineArray[2 * index].x1 = nodeArray[index].x - delta_X;
      lineArray[2 * index].y1 = nodeArray[index].y + delta_Y;
      lineArray[2 * index].x2 = nodeArray[2 * index + 1].x + delta_X;
      lineArray[2 * index].y2 = nodeArray[2 * index + 1].y - delta_Y;
      lineArray[2 * index].passed = false;
      lineArray[2 * index].showed = hasLeftLine;
    }

    if (2 * index + 2 < nodeArray.length) {
      const hasRightLine =
        nodeArray[index].value != "" && nodeArray[2 * index + 2].value != ""
          ? true
          : false;

      const { delta_X, delta_Y } = calculate_delta(
        nodeArray[index],
        nodeArray[2 * index + 2]
      );
      lineArray[2 * index].x1 = nodeArray[index].x + delta_X;
      lineArray[2 * index].y1 = nodeArray[index].y + delta_Y;
      lineArray[2 * index].x2 = nodeArray[2 * index + 1].x - delta_X;
      lineArray[2 * index].y2 = nodeArray[2 * index + 1].y - delta_Y;
      lineArray[2 * index].passed = false;
      lineArray[2 * index].showed = hasRightLine;
    }
  }

  return lineArray;
};

const calculate_delta = (node1, node2) => {
  const x_diiference =
    node1.x > node2.x ? node1.x - node2.x : node2.x - node1.x;
  const y_diiference =
    node1.y > node2.y ? node1.y - node2.y : node2.y - node1.y;
  const slope = y_diiference / x_diiference;

  const delta_X = Math.sqrt(
    Math.pow(CIRCLE_RADIUS, 2) / (Math.pow(slope, 2) + 1)
  );

  const delta_Y = slope * delta_X;
  return { delta_X, delta_Y };
};

export const searchBST = (obj, searchValue) => {
  const targetValue = parseInt(searchValue);
  const sortobj = JSON.parse(JSON.stringify(obj));
  const records = [];
  const nodeArray = sortobj.nodeArray;
  const lineArray = sortobj.lineArray;
  records.push(JSON.parse(JSON.stringify(sortobj)));

  let index = 0;

  while (index < nodeArray.length && nodeArray[index].value != "") {
    if (index) {
      const currentLine = lineArray[index - 1];
      currentLine.passed = true;
      records.push(JSON.parse(JSON.stringify(sortobj)));
    }

    const currentNode = nodeArray[index];
    currentNode.passed = true;
    records.push(JSON.parse(JSON.stringify(sortobj)));

    if (targetValue < currentNode.value) {
      index = 2 * index + 1;
    } else if (currentNode.value < targetValue) {
      index = 2 * index + 2;
    } else {
      //equal
      currentNode.marked = true;
      records.push(JSON.parse(JSON.stringify(sortobj)));
      break;
    }
  }
  return records;
};

export const insertBST = (obj, insertValue) => {
  const records = searchBST(obj, insertValue);
  const lastRecord = records[records.length - 1];
  const parentNodeIndex = lastRecord.nodeArray.findLastIndex(isPassedNode);
  if (parentNodeIndex < 15) {
    const sortobj = JSON.parse(JSON.stringify(lastRecord));
    const nodeArray = sortobj.nodeArray;
    const lineArray = sortobj.lineArray;
    let newNodeindex = 0;

    // no duplicated condition
    if (insertValue < nodeArray[parentNodeIndex].value) {
      // left
      newNodeindex = 2 * parentNodeIndex + 1;
    } else {
      //right
      newNodeindex = 2 * parentNodeIndex + 2;
    }
    nodeArray[newNodeindex].value = insertValue;
    records.push(JSON.parse(JSON.stringify(sortobj)));

    lineArray[newNodeindex - 1].showed = true;
    lineArray[newNodeindex - 1].passed = true;
    records.push(JSON.parse(JSON.stringify(sortobj)));

    nodeArray[newNodeindex].passed = true;
    nodeArray[newNodeindex].marked = true;
    records.push(JSON.parse(JSON.stringify(sortobj)));
  } else {
    return [obj];
  }

  return records;
};

export const removeBST = (obj, removeValue) => {
  // already sure can find the remove value
  const records = searchBST(obj, removeValue);
  const lastRecord = records[records.length - 1];
  const removeNodeIndex = lastRecord.nodeArray.findLastIndex(isPassedNode);

  const sortobj = JSON.parse(JSON.stringify(lastRecord));
  const nodeArray = sortobj.nodeArray;
  const lineArray = sortobj.lineArray;

  //1. Node to be deleted is the leaf
  if (removeNodeIndex > 14) {
    nodeArray[removeNodeIndex].value = "";
    lineArray[removeNodeIndex - 1].showed = false;
    records.push(JSON.parse(JSON.stringify(sortobj)));
  } else {
    if (
      nodeArray[2 * removeNodeIndex + 1].value == "" &&
      nodeArray[2 * removeNodeIndex + 2].value == ""
    ) {
      nodeArray[removeNodeIndex].value = "";
      lineArray[removeNodeIndex - 1].showed = false;
      records.push(JSON.parse(JSON.stringify(sortobj)));
    }
  }
  //2. Node to be deleted has only one child
  if (
    (nodeArray[2 * removeNodeIndex + 1].value == "" &&
      nodeArray[2 * removeNodeIndex + 2].value != "") ||
    (nodeArray[2 * removeNodeIndex + 1].value != "" &&
      nodeArray[2 * removeNodeIndex + 2].value == "")
  ) {
    nodeArray[removeNodeIndex].passed = false;
    nodeArray[removeNodeIndex].marked = false;
    records.push(JSON.parse(JSON.stringify(sortobj)));

    // remove node and change direction of line
    const childNodeIndex =
      nodeArray[2 * removeNodeIndex + 2].value != ""
        ? 2 * removeNodeIndex + 2
        : 2 * removeNodeIndex + 1;
    const removeIsLeft = Number.isInteger((removeNodeIndex - 1) / 2);
    const parentIndex = Math.floor((removeNodeIndex - 1) / 2);
    nodeArray[removeNodeIndex].value = "";
    lineArray[childNodeIndex - 1].showed = false;

    const { delta_X, delta_Y } = calculate_delta(
      nodeArray[parentIndex],
      nodeArray[childNodeIndex]
    );
    lineArray[removeNodeIndex - 1].x1 = removeIsLeft
      ? nodeArray[parentIndex].x - delta_X
      : nodeArray[parentIndex].x + delta_X;
    lineArray[removeNodeIndex - 1].y1 = nodeArray[parentIndex].y + delta_Y;
    lineArray[removeNodeIndex - 1].x2 = removeIsLeft
      ? nodeArray[childNodeIndex].x + delta_X
      : nodeArray[childNodeIndex].x - delta_X;
    lineArray[removeNodeIndex - 1].y2 = nodeArray[childNodeIndex].y - delta_Y;
    records.push(JSON.parse(JSON.stringify(sortobj)));

    //clear removeNode branch Node first then move it upward
    const r = collectionRelocateTreeNodeArray(childNodeIndex, nodeArray);
    console.log(r);
  }
  //3. Node to be deleted has two children
  if (
    (nodeArray[2 * removeNodeIndex + 1].value != "" &&
      nodeArray[2 * removeNodeIndex + 2].value != "") ||
    (nodeArray[2 * removeNodeIndex + 1].value != "" &&
      nodeArray[2 * removeNodeIndex + 2].value != "")
  ) {
  }

  return records;
};

const isPassedNode = (element) => element.passed === true;

const collectionRelocateTreeNodeArray = (rootIndex, nodeArray) => {
  const queue = [];

  return recursive(nodeArray, rootIndex, queue);
};

const recursive = (nodeArray, index, queue) => {
  if (index > 30) {
    return;
  }
  if (nodeArray[index].value == "") {
    return;
  }

  queue.push({
    oldIndex: index,
    newIndex: Math.floor((index - 1) / 2),
    value: nodeArray[index].value,
  });
  recursive(nodeArray, 2 * index + 1, queue);
  recursive(nodeArray, 2 * index + 2, queue);

  return queue;
};
