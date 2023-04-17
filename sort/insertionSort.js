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

function insertionSort(array) {
  const length = array.length;
  for (let i = 0; i < length; i++) {
    if (array[i] < array[0]) {
      //move number to the first position
      array.unshift(array.splice(i, 1)[0]);
    } else {
      // only sort number smaller than number on the left of it. This is the part of insertion sort that makes it fast if the array is almost sorted.
      if (array[i] < array[i - 1]) {
        //find where number should go
        for (var j = 1; j < i; j++) {
          if (array[i] >= array[j - 1] && array[i] < array[j]) {
            //move number to the right spot
            array.splice(j, 0, array.splice(i, 1)[0]);
          }
        }
      }
    }
  }
  return array;
}

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
console.log(insertionSort(numbers));
