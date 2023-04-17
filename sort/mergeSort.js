const obj = {
  arr: [
    { value: 30, sorted: false },
    { value: 97, sorted: false },
    { value: 50, sorted: false },
    { value: 29, sorted: false },
  ],
  sortingIndex: [],
};
const records = [];
mergeSort(obj, 0, 4, records);
console.log(records);

function mergeSort(obj, startPoint, arrayLength, records) {
  if (arrayLength == 1) {
    return { startPoint: startPoint, length: arrayLength };
  }

  const mid = Math.ceil(arrayLength / 2);
  const arrayLeft_startPoint = startPoint;
  const arrayRight_startPoint = startPoint + mid;
  const arrayLeft_length = mid;
  const arrayRight_length = arrayLength - mid;
  const arrayLeft = mergeSort(
    obj,
    arrayLeft_startPoint,
    arrayLeft_length,
    records
  );
  const arrayRight = mergeSort(
    obj,
    arrayRight_startPoint,
    arrayRight_length,
    records
  );

  return merge(obj, arrayLeft, arrayRight, records);
}

function merge(sortobj, left, right, records) {
  const arr = sortobj.arr;
  let leftIndex = left.startPoint;
  const leftEndpoint = left.startPoint + left.length;
  let rightIndex = right.startPoint;
  const rightEndpoint = right.startPoint + right.length;

  while (rightIndex < rightEndpoint) {
    ///////////////////////////////////////////////////////
    sortobj.sortingIndex = [leftIndex, rightIndex];
    records.push(JSON.parse(JSON.stringify(sortobj)));
    ///////////////////////////////////////////////////////
    if (arr[leftIndex].value < arr[rightIndex].value) {
      leftIndex++;
    } else {
      arr.splice(leftIndex, 0, arr.splice(rightIndex, 1)[0]);
      ///////////////////////////////////////////////////////
      sortobj.sortingIndex = [leftIndex, leftIndex + 1];
      records.push(JSON.parse(JSON.stringify(sortobj)));
      ///////////////////////////////////////////////////////
      leftIndex++;
      rightIndex++;
    }
  }

  return { startPoint: left.startPoint, length: left.length + right.length };
}
