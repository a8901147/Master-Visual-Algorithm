import React from "react";
import { ActiveMode } from "../function/common";
import classes from "./InputBox.module.css";
function InputBox({ activeMode }) {
  if (activeMode == ActiveMode.SEARCH) {
    return (
      <input
        id="linkedList_searchValue"
        placeholder="linkedList_searchValue"
        className={classes.input__field}
      ></input>
    );
  } else if (activeMode == ActiveMode.INSERT) {
    return (
      <React.Fragment>
        <input
          id="linkedList_insertValue"
          placeholder="linkedList_insertValue"
          className={classes.input__field}
        ></input>
        <input
          id="linkedList_insertIndex"
          placeholder="linkedList_insertIndex"
        ></input>
      </React.Fragment>
    );
  } else if (activeMode == ActiveMode.REMOVE) {
    return (
      <input
        id="linkedList_removeIndex"
        placeholder="linkedList_removeIndex"
        className={classes.input__field}
      ></input>
    );
  } else if (activeMode == ActiveMode.PUSH) {
    return (
      <input
        id="stack_pushValue"
        placeholder="stack_pushValue"
        className={classes.input__field}
      ></input>
    );
  } else if (activeMode == ActiveMode.SEARCH_BST) {
    return (
      <input
        id="BST_searchValue"
        placeholder="BST_searchValue"
        className={classes.input__field}
      ></input>
    );
  } else if (activeMode == ActiveMode.INSERT_BST) {
    return (
      <input
        id="BST_insertValue"
        placeholder="BST_insertValue"
        className={classes.input__field}
      ></input>
    );
  } else if (activeMode == ActiveMode.REMOVE_BST) {
    return (
      <input
        id="BST_removeValue"
        placeholder="BST_removeValue"
        className={classes.input__field}
      ></input>
    );
  }
}

export default InputBox;
