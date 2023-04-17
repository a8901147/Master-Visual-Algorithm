const obj = {
  number: 1,
};

const addnumber = (obj) => {
  obj.number++;
  return obj;
};
const newobj = addnumber(obj);
const newnew = JSON.parse(JSON.stringify(newobj));

addnumber(obj);
console.log(obj);
console.log(newobj);
console.log(newnew);
