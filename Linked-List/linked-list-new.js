const search = (obj, searchValue) => {
  const records = [];
  const nodeArray = obj.nodeArray;
  const singleArray = obj.singleArray;

  records.push(JSON.parse(JSON.stringify(obj)));
  for (let index = 0; index < nodeArray.length; index++) {
    if (index) {
      singleArray[index - 1].passed = true;
      records.push(JSON.parse(JSON.stringify(obj)));
    }

    nodeArray[index].passed = true;
    records.push(JSON.parse(JSON.stringify(obj)));

    const value = nodeArray[index].value;
    if (value == searchValue) {
      break;
    }
  }
  return records;
};
const obj = {
  nodeArray: [
    {
      value: 5,
      x: 50,
      y: 50,
      passed: false,
    },
    {
      value: 15,
      x: 150,
      y: 50,
      passed: false,
    },
    {
      value: 25,
      x: 250,
      y: 50,
      passed: false,
    },
  ],
  singleArray: [
    {
      x1: 70,
      y1: 50,
      x2: 120,
      y2: 50,
      passed: false,
      showed: true,
    },
    {
      x1: 170,
      y1: 50,
      x2: 220,
      y2: 50,
      passed: false,
      showed: true,
    },
  ],
};
console.log(search(obj, 25));
