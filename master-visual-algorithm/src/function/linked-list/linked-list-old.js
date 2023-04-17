export class LinkedList {
  constructor(value) {
    // this.head = this.createNode(value);
    // this.tail = this.head;
    // this.length = 1;
    // this.records = [];
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  createNode(value) {
    return {
      value: value,
      checked: false,
      next: null,
    };
  }

  prepend(value) {
    const newNode = this.createNode(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }
  insert(index, value) {
    //Check for proper parameters;
    if (index >= this.length) {
      console.log("index > length: append");
      return this.append(value);
    }

    const newNode = this.createNode(value);
    const leader = this.traverseToIndex(index - 1);
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
    return this.printList();
  }
  traverseToIndex(index) {
    //Check parameters
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
}

const createNode = (value) => {
  return {
    value: value,
    checked: false,
    next: null,
  };
};

export const appendOutputRecords = (obj, value) => {
  const records = [];
  let linkedListObj = JSON.parse(JSON.stringify(obj));
  records.push(JSON.parse(JSON.stringify(linkedListObj)));
  linkedListObj = append(linkedListObj, value);
  records.push(JSON.parse(JSON.stringify(linkedListObj)));
  return { records: records, obj: linkedListObj };
};

export const append = (obj, value) => {
  const newNode = createNode(value);
  if (obj.length === 0) {
    obj.head = newNode;
    obj.tail = obj.head;
    obj.length++;
    return obj;
  } else {
    // obj.tail.next = newNode;
    let currentNode = obj.head;
    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }
    currentNode.next = newNode;
    obj.tail = newNode;
    obj.length++;
    return obj;
  }
};

export const getLinkedListRandomInt = (size) => {
  let counter = 0;
  let obj = {
    head: null,
    tail: null,
    length: 0,
  };
  while (counter < size) {
    const value = Math.floor(Math.random() * 100);
    obj = append(obj, value);
    counter++;
  }
  return obj;
};

export const search = (obj, value) => {
  const records = [];
  const linkedListObj = JSON.parse(JSON.stringify(obj));
  // Initialize current
  let current = linkedListObj.head;

  records.push(JSON.parse(JSON.stringify(linkedListObj)));
  while (current != null) {
    current.checked = true;
    records.push(JSON.parse(JSON.stringify(linkedListObj)));
    if (current.value == value) {
      // Data found
      break;
    }
    current = current.next;
  }

  // Data not found
  return { records: records };
};

const myLinkedList = new LinkedList();
// const obj = {
//   value: 10,
//   checked: false,
//   next: {
//     value: 20,
//     checked: false,
//     next: {
//       value: 30,
//       checked: false,
//       next: {
//         value: 40,
//         checked: false,
//         next: null,
//       },
//     },
//   },
// };
// myLinkedList.getSortRandomInt(100, 10);
// console.log(myLinkedList);

// myLinkedList.append(5);
// myLinkedList.append(16);
// myLinkedList.prepend(1);
// myLinkedList.insert(2, 99);
// myLinkedList.insert(20, 88);
