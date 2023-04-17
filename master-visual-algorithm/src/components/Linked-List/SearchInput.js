import React from "react";
import { ActiveMode } from "../../function/common";

function InputBox({ activeMode }) {
  console.log(activeMode);
  if (activeMode == ActiveMode.SEARCH) {
    return (
      <input
        id="linkedList_searchValue"
        placeholder="linkedList_searchValue"
      ></input>
    );
  } else if (activeMode == ActiveMode.INSERT) {
    return (
      <React.Fragment>
        <input
          id="linkedList_insertValue"
          placeholder="linkedList_insertValue"
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
      ></input>
    );
  }
}

export default InputBox;
