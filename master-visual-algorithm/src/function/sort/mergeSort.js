export const mergeSort = (obj) => {
  const sortobj = JSON.parse(JSON.stringify(obj));
  const arr = sortobj.arr;
  const arrayLength = sortobj.arr.length;
  const records = [];
  mergeSortRecursion(sortobj, 0, arrayLength, records);
  for (let i = 0; i < arrayLength; i++) {
    arr[i].sorted = true;
  }
  records.push(JSON.parse(JSON.stringify(sortobj)));

  return records;
};

function mergeSortRecursion(obj, startPoint, arrayLength, records) {
  if (arrayLength === 1) {
    return { startPoint: startPoint, length: arrayLength };
  }

  const mid = Math.ceil(arrayLength / 2);
  const arrayLeft_startPoint = startPoint;
  const arrayRight_startPoint = startPoint + mid;
  const arrayLeft_length = mid;
  const arrayRight_length = arrayLength - mid;
  const arrayLeft = mergeSortRecursion(
    obj,
    arrayLeft_startPoint,
    arrayLeft_length,
    records
  );
  const arrayRight = mergeSortRecursion(
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
  // const leftEndpoint = left.startPoint + left.length;
  let rightIndex = right.startPoint;
  const rightEndpoint = right.startPoint + right.length;

  while (rightIndex < rightEndpoint && leftIndex < rightIndex) {
    ///////////////////////////////////////////////////////
    sortobj.sortingIndex = [leftIndex, rightIndex];
    records.push(JSON.parse(JSON.stringify(sortobj)));
    ///////////////////////////////////////////////////////
    if (arr[leftIndex].number < arr[rightIndex].number) {
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
