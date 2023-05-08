// loop over the whole array and find the minimum one, exchange position with the front
// compare to bubble sort, selection only change position one time in each loop
export const selectionSort = (obj) => {
  const records = [];
  const sortobj = JSON.parse(JSON.stringify(obj));
  records.push(JSON.parse(JSON.stringify(sortobj)));
  const arr = sortobj.arr;
  const length = arr.length;

  for (let i = 0; i < length; i++) {
    // set current index as minimum
    let min = i;
    for (let j = i + 1; j < length; j++) {
      ////////////////////////////////////////////////////
      sortobj.sortingIndex = [min, j];
      records.push(JSON.parse(JSON.stringify(sortobj)));
      ////////////////////////////////////////////////////
      if (arr[j].number < arr[min].number) {
        //update minimum if current is lower that what we had previously
        min = j;
      }
    }
    swapElements(arr, i, min);

    ////////////////////////////////////////////////////
    sortobj.sortingIndex = [min, i];
    records.push(JSON.parse(JSON.stringify(sortobj)));
    ////////////////////////////////////////////////////

    ////////////////////////////////////////////////////
    arr[i].sorted = true;
    sortobj.sortingIndex = [];
    records.push(JSON.parse(JSON.stringify(sortobj)));
    ////////////////////////////////////////////////////
  }
  return records;
};

const swapElements = (array, index1, index2) => {
  const temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
};
