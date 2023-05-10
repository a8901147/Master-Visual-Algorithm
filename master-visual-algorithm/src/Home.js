import React from "react";
import { Link } from "react-router-dom";
import classes from "./Home.module.css";

function Home() {
  return (
    <div className={classes.background}>
      <div>
        <div className={classes.waviy}>
          <span style={{ "--i": 1 }}>L</span>
          <span style={{ "--i": 2 }}>A</span>
          <span style={{ "--i": 3, marginLeft: 20 }}>V</span>
          <span style={{ "--i": 4 }}>I</span>
          <span style={{ "--i": 5 }}>D</span>
          <span style={{ "--i": 6 }}>A</span>
          <span style={{ "--i": 7, marginLeft: 20 }}>...</span>

          <span style={{ "--i": 8, marginLeft: 40 }}>M</span>
          <span style={{ "--i": 9 }}>U</span>
          <span style={{ "--i": 10 }}>Y</span>
          <span style={{ "--i": 11, marginLeft: 20 }}>C</span>
          <span style={{ "--i": 12 }}>A</span>
          <span style={{ "--i": 13 }}>N</span>
          <span style={{ "--i": 14 }}>S</span>
          <span style={{ "--i": 15 }}>A</span>
          <span style={{ "--i": 16 }}>D</span>
          <span style={{ "--i": 17 }}>A</span>
          <span style={{ "--i": 18, marginLeft: 20 }}>...</span>
        </div>
        <div className={classes.title} style={{ display: "block" }}>
          <span>
            <Link
              to="SortMain"
              className={`${classes.title_word} ${classes.title_word_2}`}
              style={{ textDecoration: "none", display: "block" }}
            >
              Sort
            </Link>
          </span>
          <span>
            <Link
              to="LinkedListMain"
              className={`${classes.title_word} ${classes.title_word_1}`}
              style={{ textDecoration: "none", display: "block" }}
            >
              Linked List
            </Link>
          </span>

          <span>
            <Link
              to="StackMain"
              className={`${classes.title_word} ${classes.title_word_3}`}
              style={{ textDecoration: "none", display: "block" }}
            >
              Stack
            </Link>
          </span>
          <span>
            <Link
              to="BinarySearchTreeMain"
              className={`${classes.title_word} ${classes.title_word_4}`}
              style={{ textDecoration: "none", display: "block" }}
            >
              Binary Search Tree
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Home;
