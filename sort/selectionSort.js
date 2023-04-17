const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
const obj = {
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

function selectionSort(obj) {
  const sortobj = JSON.parse(JSON.stringify(obj));
  const arr = sortobj.arr;
  const length = arr.length;
  const records = [];

  for (let i = 0; i < length; i++) {
    // set current index as minimum
    let min = i;
    let temp = arr[i].value;
    for (let j = i + 1; j < length; j++) {
      if (arr[j].value < arr[min].value) {
        //update minimum if current is lower that what we had previously
        min = j;
      }
    }
    swapElements(arr, i, min);
    const newObj = JSON.parse(JSON.stringify(sortobj));
    records.push(newObj);
  }
  return records;
}

const swapElements = (array, index1, index2) => {
  const temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
};

const k = selectionSort(obj);
console.log(k);
