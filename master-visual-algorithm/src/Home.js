import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <React.Fragment>
      <Link to="LinkedListMain">Link to LinkedListMain</Link>
      <Link to="SortMain">Link to SortMain</Link>
      <h1>This is Home page</h1>
    </React.Fragment>
  );
}

export default Home;
