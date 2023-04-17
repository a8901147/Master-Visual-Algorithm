class LinkedList {
  constructor(value) {
    // this.head = this.createNode(value);
    // this.tail = this.head;
    // this.length = 1;
    // this.records = [];
    this.head = null;
    this.tail = null;
    this.length = 0;
    this.records = [];
  }
  createNode(value) {
    return {
      value: value,
      checked: false,
      next: null,
    };
  }
  append(value) {
    if (this.length == 0) {
      const newNode = this.createNode(value);
      this.head = newNode;
      this.tail = this.head;
      this.length++;
      return this;
    } else {
      const newNode = this.createNode(value);
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
      return this;
    }
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

  search(value) {
    // Initialize current
    let current = this.head;

    while (current != null) {
      if (current.value == value)
        // Data found
        return true;
      current = current.next;
    }

    // Data not found
    return false;
  }

  getSortRandomInt(max, size) {
    let counter = 0;
    while (counter < size) {
      this.append(Math.floor(Math.random() * max));
      counter++;
    }
    return this;
  }
}

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
myLinkedList.append(1);
myLinkedList.append(100);
console.log(myLinkedList);

// myLinkedList.append(5);
// myLinkedList.append(16);
// myLinkedList.prepend(1);
// myLinkedList.insert(2, 99);
// myLinkedList.insert(20, 88);
