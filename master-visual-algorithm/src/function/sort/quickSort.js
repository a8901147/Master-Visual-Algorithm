// const obj = {
//   arr: [
//     { number: 90, sorted: false },
//     { number: 44, sorted: false },
//     { number: 6, sorted: false },
//     { number: 20, sorted: false },
//     { number: 1, sorted: false },
//     { number: 75, sorted: false },
//     { number: 50, sorted: false },
//     { number: 87, sorted: false },
//     { number: 100, sorted: false },
//     { number: 4, sorted: false },
//     { number: 65, sorted: false },
//   ],
//   sortingIndex: [],
// };

export const quickSort = (obj) => {
  const sortobj = JSON.parse(JSON.stringify(obj));
  const arr = sortobj.arr;
  const length = arr.length;
  const records = [];
  quickSortRecursion(sortobj, records, 0, length - 1);
  for (let i = 0; i < length; i++) {
    arr[i].sorted = true;
  }
  records.push(JSON.parse(JSON.stringify(sortobj)));

  return records;
};

function quickSortRecursion(sortobj, records, left, right) {
  // const arr = sortobj.arr;
  // const len = arr.length;
  let pivot;
  let partitionIndex;

  if (left < right) {
    pivot = right;

    partitionIndex = partition(sortobj, records, pivot, left, right);

    //sort left and right
    quickSortRecursion(sortobj, records, left, partitionIndex - 1);
    quickSortRecursion(sortobj, records, partitionIndex + 1, right);
  }
  return sortobj;
}

function partition(sortobj, records, pivot, left, right) {
  const arr = sortobj.arr;
  let pivotValue = arr[pivot].number;
  let partitionIndex = left;
  ///////////////////////////////////////////////////////
  sortobj.pivotIndex = [pivot];
  records.push(JSON.parse(JSON.stringify(sortobj)));
  ///////////////////////////////////////////////////////

  for (let i = left; i < right; i++) {
    ///////////////////////////////////////////////////////
    sortobj.sortingIndex = [partitionIndex, i];
    records.push(JSON.parse(JSON.stringify(sortobj)));
    ///////////////////////////////////////////////////////
    if (arr[i].number < pivotValue) {
      swap(arr, i, partitionIndex);
      ///////////////////////////////////////////////////////
      sortobj.sortingIndex = [partitionIndex, i];
      records.push(JSON.parse(JSON.stringify(sortobj)));
      ///////////////////////////////////////////////////////
      partitionIndex++;
    }
  }
  ///////////////////////////////////////////////////////
  sortobj.sortingIndex = [partitionIndex, right];
  records.push(JSON.parse(JSON.stringify(sortobj)));
  ///////////////////////////////////////////////////////
  swap(arr, right, partitionIndex);
  ///////////////////////////////////////////////////////
  sortobj.sortingIndex = [];
  sortobj.pivotIndex = [partitionIndex];
  records.push(JSON.parse(JSON.stringify(sortobj)));
  ///////////////////////////////////////////////////////
  return partitionIndex;
}

function swap(array, firstIndex, secondIndex) {
  var temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
}
