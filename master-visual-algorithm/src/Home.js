import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <React.Fragment>
      <h1>This is Home page</h1>
      <ul>
        <li>
          <Link to="LinkedListMain">Link to LinkedListMain</Link>
        </li>
        <li>
          <Link to="SortMain">Link to SortMain</Link>
        </li>
        <li>
          <Link to="StackMain">Link to StackMain</Link>
        </li>
        <li>
          <Link to="BinarySearchTreeMain">Link to BinarySearchTreeMain</Link>
        </li>
      </ul>
    </React.Fragment>
  );
}

export default Home;
