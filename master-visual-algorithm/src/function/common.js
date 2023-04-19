export const getSortRandomInt = (max) => {
  return Array.from({ length: max }, () => ({
    number: Math.floor(Math.random() * 100),
    sorted: false,
  }));
};

export const MODE = {
  LINKED_LIST: "LINKED_LIST",
  SORT: "SORT",
};

export const ActiveMode = {
  SEARCH: "SEARCH",
  INSERT: "INSERT",
  REMOVE: "REMOVE",
  BUBBLE_SORT: "BUBBLE_SORT",
  SELECTION_SORT: "SELECTION_SORT",
  INSERTION_SORT: "INSERTION_SORT",
  MERGE_SORT: "MERGE_SORT",
  QUICK_SORT: "QUICK_SORT",
};

export const STATE_PREFIX = {
  HEAD: "head",
  TAIL: "tail",
};

export const STATE_POSTFIX = {
  PRE: "pre",
  AFT: "aft",
  NEWNODE: "newNode",
  TEMP: "temp",
};

export const getNodeRandomInt = (max, firstX, firstY) => {
  return Array.from({ length: max }, (x, index) => ({
    value: Math.floor(Math.random() * 100),
    x: firstX + index * 100,
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

export const getSingleArrow = (max, firstX, firstY) => {
  return Array.from({ length: max - 1 }, (x, index) => ({
    x1: firstX + 100 * index,
    y1: firstY,
    x2: firstX + ARROW_LENGTH + 100 * index,
    y2: firstY,
    passed: false,
    showed: true,
  }));
};

export const FIRST_NODE_X = 100;
export const NODE_UPPER_Y = 50;
export const NODE_LOWER_Y = 150;

export const FIRST_ARROW_X = FIRST_NODE_X + 20;
export const ARROW_LENGTH = 50;
