/* eslint-disable default-case */
import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Visualization from "./components/Visualization";

import {
  MODE,
  getSortRandomInt,
  getNodeRandomInt,
  getSingleArrow,
} from "./function/common";

import { linked_list_records } from "./function/linked-list/linked-list-object-example";
import LinkedListMain from "./components/Linked-List/LinkedListMain";
import Home from "./Home";
import SortMain from "./components/Sorting/SortMain";

// function App() {
//   const [recordsArray, setRecordsArray] = useState([]);
//   const [obj, setObj] = useState({});
//   const [mode, setMode] = useState(MODE.LINKED_LIST);

//   const onClickHandler = () => {
//     let obj = {};
//     switch (mode) {
//       case MODE.LINKED_LIST:
//         obj = {
//           nodeArray: getNodeRandomInt(10, 50, 50),
//           singleArray: getSingleArrow(10, 70, 50),
//         };
//         break;
//       case MODE.SORT:
//         obj = {
//           arr: getSortRandomInt(9),
//           sortingIndex: [],
//           pivotIndex: [],
//         };
//         break;
//     }

//     const newObj = JSON.parse(JSON.stringify(obj));
//     setObj(newObj);
//     setRecordsArray([newObj]);
//   };

//   const onActionClickHandler = (records) => {
//     setRecordsArray(records);
//   };

//   const onClickChangeToSortHandler = () => {
//     setMode(MODE.SORT);
//     const obj = {
//       arr: getSortRandomInt(9),
//       sortingIndex: [],
//       pivotIndex: [],
//     };

//     const newObj = JSON.parse(JSON.stringify(obj));
//     setObj(newObj);
//     setRecordsArray([newObj]);
//   };
//   const onClickChangeToLinkedListHandler = () => {
//     setMode(MODE.LINKED_LIST);
//     const obj = {
//       nodeArray: getNodeRandomInt(10, 50, 50),
//       singleArray: getSingleArrow(10, 70, 50),
//     };

//     const newObj = JSON.parse(JSON.stringify(obj));
//     setObj(newObj);
//     setRecordsArray([newObj]);
//   };
//   return (
//     <div style={{ margin: "100px" }}>
//       <button onClick={onClickChangeToSortHandler}>{MODE.SORT}</button>
//       <button onClick={onClickChangeToLinkedListHandler}>
//         {MODE.LINKED_LIST}
//       </button>
//       <NavBar
//         mode={mode}
//         onActionTypeClick={onClickHandler}
//         onActionClick={onActionClickHandler}
//         obj={obj}
//       ></NavBar>

//       <Visualization
//         arr={recordsArray}
//         delay={1000}
//         mode={mode}
//       ></Visualization>
//     </div>
//   );
// }

function App() {
  return (
    <div style={{ margin: "100px" }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="LinkedListMain" element={<LinkedListMain />} />
        <Route path="SortMain" element={<SortMain />} />
      </Routes>
    </div>
  );
}
export default App;
