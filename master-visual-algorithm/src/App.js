/* eslint-disable default-case */

import { Routes, Route } from "react-router-dom";
import "./App.css";
import LinkedListMain from "./routes/LinkedListMain";
import Home from "./Home";
import SortMain from "./routes/SortMain";
import StackMain from "./routes/StackMain";
import BinarySearchTreeMain from "./routes/BinarySearchTreeMain";

function App() {
  return (
    <div style={{ margin: "100px" }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="LinkedListMain" element={<LinkedListMain />} />
        <Route path="SortMain" element={<SortMain />} />
        <Route path="StackMain" element={<StackMain />} />
        <Route path="BinarySearchTreeMain" element={<BinarySearchTreeMain />} />
      </Routes>
    </div>
  );
}
export default App;
