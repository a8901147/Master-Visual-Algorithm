const numbers = [90, 44, 6, 20, 1, 75, 50, 87, 100, 4, 65];
const records = [];

const bubbleSort = (array) => {
  const length = array.length;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (array[j] > array[j + 1]) {
        swapElements(array, j, j + 1);
      }
      //Why Can’t I Use = to Copy an Array?
      //Because arrays in JS are reference values, so when you try to copy it using the = it will only copy the reference to the original array and not the value of the array.

      // Old way
      //const cloneSheeps = sheeps.slice();

      // ES6 way
      //const cloneSheepsES6 = [...sheeps];
      const record = [...array];
      records.push(record);
    }
  }
};

const swapElements = (array, index1, index2) => {
  const temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
};

const sortobj = {
  arr: [
    { value: 90, sorted: false },
    { value: 44, sorted: false },
    { value: 6, sorted: false },
    { value: 20, sorted: false },
    { value: 1, sorted: false },
    { value: 75, sorted: false },
    { value: 50, sorted: false },
    { value: 87, sorted: false },
    { value: 100, sorted: false },
    { value: 4, sorted: false },
    { value: 65, sorted: false },
  ],
  sortingIndex: [],
};

const bubbleSortest = (obj) => {
  const sortobj = JSON.parse(JSON.stringify(obj));
  const arr = sortobj.arr;
  const length = arr.length;
  const records = [];
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - i - 1; j++) {
      if (arr[j].value > arr[j + 1].value) {
        swapElements(arr, j, j + 1);
      }

      //Why Can’t I Use = to Copy an Array?
      //Because arrays in JS are reference values, so when you try to copy it using the = it will only copy the reference to the original array and not the value of the array.

      // Old way
      //const cloneSheeps = sheeps.slice();

      // ES6 way
      //const cloneSheepsES6 = [...sheeps];
      const newObj = JSON.parse(JSON.stringify(sortobj));
      records.push(newObj);
    }
  }
  return records;
};
