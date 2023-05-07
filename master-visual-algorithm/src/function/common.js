export const getSortRandomInt = (max) => {
  return Array.from({ length: max }, () => ({
    number: Math.floor(Math.random() * 100),
    sorted: false,
  }));
};

export const MODE = {
  LINKED_LIST: "LINKED_LIST",
  SORT: "SORT",
  STACK: "STACK",
  BINARYSEARCHTREE: "BINARYSEARCHTREE",
};

export const ActiveMode = {
  // linked-list
  SEARCH: "SEARCH",
  INSERT: "INSERT",
  REMOVE: "REMOVE",

  // stack
  POP: "POP",
  PUSH: "PUSH",

  //tree
  SEARCH_BST: "SEARCH_BST",
  INSERT_BST: "INSERT_BST",
  REMOVE_BST: "REMOVE_BST",

  // sort
  BUBBLE_SORT: "BUBBLE_SORT",
  SELECTION_SORT: "SELECTION_SORT",
  INSERTION_SORT: "INSERTION_SORT",
  MERGE_SORT: "MERGE_SORT",
  QUICK_SORT: "QUICK_SORT",
};

export const STATE_PREFIX = {
  HEAD: "head",
  TAIL: "tail",
  ROOT: "root",
};

export const STATE_POSTFIX = {
  PRE: "pre",
  AFT: "aft",
  NEWNODE: "newNode",
  TEMP: "temp",
  CURRENT: "^",
};

export const CIRCLE_RADIUS = 20;

export const calculate_delta = (node1, node2) => {
  const x_diiference =
    node1.x > node2.x ? node1.x - node2.x : node2.x - node1.x;
  const y_diiference =
    node1.y > node2.y ? node1.y - node2.y : node2.y - node1.y;
  const slope = y_diiference / x_diiference;

  const delta_X = Math.sqrt(
    Math.pow(CIRCLE_RADIUS, 2) / (Math.pow(slope, 2) + 1)
  );

  const delta_Y = slope * delta_X;
  return [delta_X, delta_Y];
};
