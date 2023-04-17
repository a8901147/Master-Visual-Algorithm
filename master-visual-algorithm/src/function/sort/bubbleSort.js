// loop over the whole array, [i, i+1] the adjacent element do comparison and exchange postion

export const bubbleSort = (obj) => {
  const sortobj = JSON.parse(JSON.stringify(obj));
  const arr = sortobj.arr;

  const length = arr.length;
  const records = [];
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - i - 1; j++) {
      sortobj.sortingIndex = [j, j + 1];
      records.push(JSON.parse(JSON.stringify(sortobj)));
      if (arr[j].number > arr[j + 1].number) {
        swapElements(arr, j, j + 1);
        records.push(JSON.parse(JSON.stringify(sortobj)));
      }
    }

    arr[length - i - 1].sorted = true;
    sortobj.sortingIndex = [];
    records.push(JSON.parse(JSON.stringify(sortobj)));
  }

  return records;
};

const swapElements = (array, index1, index2) => {
  const temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
};
