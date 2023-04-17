// const obj = {
//   arr: [
//     { value: 90, sorted: false },
//     { value: 44, sorted: false },
//     { value: 6, sorted: false },
//     { value: 20, sorted: false },
//     { value: 1, sorted: false },
//     { value: 75, sorted: false },
//     { value: 50, sorted: false },
//     { value: 87, sorted: false },
//     { value: 100, sorted: false },
//     { value: 4, sorted: false },
//     { value: 65, sorted: false },
//   ],
//   sortingIndex: [],
// };

export const insertionSort = (obj) => {
  const sortobj = JSON.parse(JSON.stringify(obj));
  const arr = sortobj.arr;
  const length = arr.length;
  const records = [];
  for (let i = 0; i < length; i++) {
    //////////////////////////////////////////////////////
    sortobj.sortingIndex = [0, i];
    records.push(JSON.parse(JSON.stringify(sortobj)));
    //////////////////////////////////////////////////////
    if (i !== 0) {
      if (arr[i].number < arr[0].number) {
        //move number to the first position
        arr.unshift(arr.splice(i, 1)[0]);
        //////////////////////////////////////////////////////
        sortobj.sortingIndex = [0, i];
        records.push(JSON.parse(JSON.stringify(sortobj)));
        //////////////////////////////////////////////////////
      } else {
        // only sort number smaller than number on the left of it. This is the part of insertion sort that makes it fast if the arr is almost sorted.
        //////////////////////////////////////////////////////
        sortobj.sortingIndex = [i - 1, i];
        records.push(JSON.parse(JSON.stringify(sortobj)));
        //////////////////////////////////////////////////////
        if (arr[i].number < arr[i - 1].number) {
          //find where number should go
          for (var j = 1; j < i; j++) {
            //////////////////////////////////////////////////////
            sortobj.sortingIndex = [j, i];
            records.push(JSON.parse(JSON.stringify(sortobj)));
            //////////////////////////////////////////////////////
            if (
              arr[i].number >= arr[j - 1].number &&
              arr[i].number < arr[j].number
            ) {
              //move number to the right spot
              arr.splice(j, 0, arr.splice(i, 1)[0]);
              //////////////////////////////////////////////////////
              sortobj.sortingIndex = [j, i];
              records.push(JSON.parse(JSON.stringify(sortobj)));
              //////////////////////////////////////////////////////
              break;
            }
          }
        }
      }
    }
  }

  for (let i = 0; i < length; i++) {
    arr[i].sorted = true;
  }
  records.push(JSON.parse(JSON.stringify(sortobj)));

  return records;
};
