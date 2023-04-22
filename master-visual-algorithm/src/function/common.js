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
