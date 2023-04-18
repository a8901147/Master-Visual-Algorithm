import {
  ARROW_LENGTH,
  FIRST_ARROW_X,
  FIRST_NODE_X,
  NODE_LOWER_Y,
  NODE_UPPER_Y,
} from "../common";

export const search = (obj, searchValue) => {
  const sortobj = JSON.parse(JSON.stringify(obj));
  const records = [];
  const nodeArray = sortobj.nodeArray;
  const singleArray = sortobj.singleArray;

  records.push(JSON.parse(JSON.stringify(sortobj)));
  let index = 0;
  for (index = 0; index < nodeArray.length; index++) {
    if (index) {
      singleArray[index - 1].passed = true;
      records.push(JSON.parse(JSON.stringify(sortobj)));
    }

    nodeArray[index].passed = true;
    records.push(JSON.parse(JSON.stringify(sortobj)));

    const value = nodeArray[index].value;
    if (value == searchValue) {
      break;
    }
  }
  nodeArray[index].marked = true;
  records.push(JSON.parse(JSON.stringify(sortobj)));
  return records;
};

export const insert = (obj, insertValue, insertPosition) => {
  const sortobj = JSON.parse(JSON.stringify(obj));
  const records = [];
  const nodeArray = sortobj.nodeArray;
  const singleArray = sortobj.singleArray;
  // insertPosition = parseInt(insertPosition);

  records.push(JSON.parse(JSON.stringify(sortobj)));

  if (insertPosition == 0) {
    console.log("insert head");
    //insert head

    // insert new node
    const newNode = createNode(nodeArray[insertPosition].x, 150, insertValue);
    newNode.passed = true;
    nodeArray.splice(insertPosition, 0, newNode);
    records.push(JSON.parse(JSON.stringify(sortobj)));

    //insert new arrow (newnode -> back node)
    const newArrow = createArrow(
      nodeArray[insertPosition].x,
      130,
      nodeArray[insertPosition].x,
      80
    );
    newArrow.passed = true;
    singleArray.splice(insertPosition, 0, newArrow);
    records.push(JSON.parse(JSON.stringify(sortobj)));

    //renew node position
    renewNodes(nodeArray, insertPosition);
    // for (let index = 0; index < nodeArray.length; index++) {
    //   nodeArray[index].x = FIRST_NODE_X + 100 * index;
    //   nodeArray[index].y = NODE_UPPER_Y;
    //   if (index == insertPosition) {
    //     nodeArray[index].passed = true;
    //   } else {
    //     nodeArray[index].passed = false;
    //   }
    // }

    //renew arrow target
    renewArrows(singleArray);
    // for (let index = 0; index < singleArray.length; index++) {
    //   singleArray[index].x1 = FIRST_ARROW_X + 100 * index;
    //   singleArray[index].y1 = NODE_UPPER_Y;
    //   singleArray[index].x2 = FIRST_ARROW_X + ARROW_LENGTH + 100 * index;
    //   singleArray[index].y2 = NODE_UPPER_Y;
    //   singleArray[index].passed = false;
    // }
    records.push(JSON.parse(JSON.stringify(sortobj)));
    return records;
  }

  // loop through
  for (let index = 0; index < nodeArray.length; index++) {
    if (index) {
      console.log(insertPosition);
      console.log(index);
      singleArray[index - 1].passed = true;
      records.push(JSON.parse(JSON.stringify(sortobj)));
    }

    nodeArray[index].passed = true;
    records.push(JSON.parse(JSON.stringify(sortobj)));

    if (index == insertPosition) {
      break;
    }
  }

  if (insertPosition < nodeArray.length) {
    console.log("insert middle");
    // insert middle

    // insert new node
    const newNode = createNode(nodeArray[insertPosition].x, 150, insertValue);
    newNode.passed = true;
    nodeArray.splice(insertPosition, 0, newNode);
    records.push(JSON.parse(JSON.stringify(sortobj)));

    //insert new arrow (newnode -> back node)
    const newArrow = createArrow(
      nodeArray[insertPosition].x,
      130,
      nodeArray[insertPosition].x,
      80
    );
    newArrow.passed = true;
    singleArray.splice(insertPosition, 0, newArrow);
    records.push(JSON.parse(JSON.stringify(sortobj)));

    //edit arrow (front node -> newnode)
    singleArray[insertPosition - 1].x1 = nodeArray[insertPosition - 1].x + 10;
    singleArray[insertPosition - 1].y1 = 60;
    singleArray[insertPosition - 1].x2 = nodeArray[insertPosition].x - 20;
    singleArray[insertPosition - 1].y2 = 130;
    records.push(JSON.parse(JSON.stringify(sortobj)));

    //renew node position
    renewNodes(nodeArray, insertPosition);
    // for (let index = 0; index < nodeArray.length; index++) {
    //   nodeArray[index].x = FIRST_NODE_X + 100 * index;
    //   nodeArray[index].y = NODE_UPPER_Y;
    //   if (index == insertPosition) {
    //     nodeArray[index].passed = true;
    //   } else {
    //     nodeArray[index].passed = false;
    //   }
    // }
    //renew arrow target
    renewArrows(singleArray);

    // for (let index = insertPosition - 1; index < singleArray.length; index++) {
    //   singleArray[index].x1 = singleArray[index - 1].x1 + 100;
    //   singleArray[index].y1 = NODE_UPPER_Y;
    //   singleArray[index].x2 = singleArray[index - 1].x2 + 100;
    //   singleArray[index].y2 = NODE_UPPER_Y;
    //   singleArray[index].passed = false;
    // }
    records.push(JSON.parse(JSON.stringify(sortobj)));
  } else {
    console.log("insert tail");
    // insert tail
    const newNode = createNode(
      nodeArray[nodeArray.length - 1].x + 100,
      50,
      insertValue
    );
    nodeArray.push(newNode);
    records.push(JSON.parse(JSON.stringify(sortobj)));

    //insert new arrow
    const newArrow = createArrow(
      singleArray[singleArray.length - 1].x1 + 100,
      50,
      singleArray[singleArray.length - 1].x2 + 100,
      50
    );
    singleArray.push(newArrow);
    records.push(JSON.parse(JSON.stringify(sortobj)));

    singleArray[singleArray.length - 1].passed = true;
    records.push(JSON.parse(JSON.stringify(sortobj)));

    nodeArray[nodeArray.length - 1].passed = true;
    records.push(JSON.parse(JSON.stringify(sortobj)));

    console.log(records);
  }
  return records;
};

export const remove = (obj, removeIndex) => {
  const sortobj = JSON.parse(JSON.stringify(obj));
  const records = [];
  const nodeArray = sortobj.nodeArray;
  const singleArray = sortobj.singleArray;

  records.push(JSON.parse(JSON.stringify(sortobj)));

  // loop through
  for (let index = 0; index <= nodeArray.length; index++) {
    if (index) {
      singleArray[index - 1].passed = true;
      records.push(JSON.parse(JSON.stringify(sortobj)));
    }

    nodeArray[index].passed = true;
    records.push(JSON.parse(JSON.stringify(sortobj)));

    if (index == removeIndex) {
      break;
    }
  }

  if (removeIndex < nodeArray.length) {
    // remove middle

    // node lower to lower level
    nodeArray[removeIndex].y = NODE_LOWER_Y;

    //extend arrow and change arrow direction
    singleArray[removeIndex - 1].x2 = singleArray[removeIndex].x2;
    singleArray[removeIndex].x1 = singleArray[removeIndex].x1 - 10;
    singleArray[removeIndex].y1 = NODE_LOWER_Y - 10;
    singleArray[removeIndex].x2 = singleArray[removeIndex].x2 + 10;
    singleArray[removeIndex].y2 = NODE_UPPER_Y + 20;
    records.push(JSON.parse(JSON.stringify(sortobj)));

    //remove node and arrow
    nodeArray.splice(removeIndex, 1);
    singleArray.splice(removeIndex, 1);
    records.push(JSON.parse(JSON.stringify(sortobj)));

    //renew node position
    renewNodes(nodeArray, removeIndex);
    nodeArray[removeIndex - 1].passed = true;

    //renew arrow target
    renewArrows(singleArray);

    records.push(JSON.parse(JSON.stringify(sortobj)));
  } else {
    // remove tail
  }

  return records;
};

const createNode = (x, y, value) => {
  return {
    value: value,
    x: x,
    y: y,
    passed: false,
    marked: false,
  };
};

const createArrow = (x1, y1, x2, y2) => {
  return {
    x1: x1,
    y1: y1,
    x2: x2,
    y2: y2,
    passed: false,
    showed: true,
  };
};

const renewNodes = (nodeArray, insertPosition) => {
  for (let index = 0; index < nodeArray.length; index++) {
    nodeArray[index].x = FIRST_NODE_X + 100 * index;
    nodeArray[index].y = NODE_UPPER_Y;
    if (index == insertPosition) {
      nodeArray[index].passed = true;
    } else {
      nodeArray[index].passed = false;
    }
  }
};

const renewArrows = (singleArray) => {
  for (let index = 0; index < singleArray.length; index++) {
    singleArray[index].x1 = FIRST_ARROW_X + 100 * index;
    singleArray[index].y1 = NODE_UPPER_Y;
    singleArray[index].x2 = FIRST_ARROW_X + ARROW_LENGTH + 100 * index;
    singleArray[index].y2 = NODE_UPPER_Y;
    singleArray[index].passed = false;
  }
};
