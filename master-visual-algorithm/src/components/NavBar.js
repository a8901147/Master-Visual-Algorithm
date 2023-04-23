import React, { useState } from "react";
import { bubbleSort } from "../function/sort/bubbleSort";
import { selectionSort } from "../function/sort/selectionSort";
import { insertionSort } from "../function/sort/insertionSort";
import classes from "./NavBar.module.css";
import NavButton from "./NavButton";
import { mergeSort } from "../function/sort/mergeSort";
import { quickSort } from "../function/sort/quickSort";
import { MODE, ActiveMode } from "../function/common";

import { insert, remove, search } from "../function/linked-list/linked-list";
import InputBox from "./Linked-List/SearchInput";
import { pop } from "../function/stack/constant";

// import Slider from "../Slider/Slider";
// import NavNumber from "../NavNumber/NavNumber";

function NavBar({ mode, onActionTypeClick, onActionClick, obj }) {
  const [activeMode, setActiveMode] = useState("SEARCH");
  const [actionTypeFunc, setActionTypeFunc] = useState({
    actionTypeFunc: search,
  });

  // add there should be a default for each when change sort/linkedlist/stack

  const onClickBubbleSortHandler = () => {
    setActiveMode(ActiveMode.BUBBLE_SORT);
    // onActionTypeClick();
    setActionTypeFunc({ actionTypeFunc: bubbleSort });
  };

  const onClickSelectionSortHandler = () => {
    setActiveMode(ActiveMode.SELECTION_SORT);
    // onActionTypeClick();
    setActionTypeFunc({ actionTypeFunc: selectionSort });
  };

  const onClickInsertionSortHandler = () => {
    setActiveMode(ActiveMode.INSERTION_SORT);
    // onActionTypeClick();
    setActionTypeFunc({ actionTypeFunc: insertionSort });
  };

  const onClickMergeSortHandler = () => {
    setActiveMode(ActiveMode.MERGE_SORT);
    // onActionTypeClick();
    setActionTypeFunc({ actionTypeFunc: mergeSort });
  };

  const onClickQuickSortHandler = () => {
    setActiveMode(ActiveMode.QUICK_SORT);
    // onActionTypeClick();
    setActionTypeFunc({ actionTypeFunc: quickSort });
  };

  const onClickLinkedListSearchHandler = () => {
    setActiveMode(ActiveMode.SEARCH);
    // onActionTypeClick();
    setActionTypeFunc({ actionTypeFunc: search });
  };

  const onClickLinkedListInsertHandler = () => {
    setActiveMode(ActiveMode.INSERT);
    // onActionTypeClick();
    setActionTypeFunc({ actionTypeFunc: insert });
  };

  const onClickLinkedListRemoveHandler = () => {
    setActiveMode(ActiveMode.REMOVE);
    // onActionTypeClick();
    setActionTypeFunc({ actionTypeFunc: remove });
  };
  const onClickStackPopHandler = () => {
    setActiveMode(ActiveMode.POP);
    // onActionTypeClick();
    setActionTypeFunc({ actionTypeFunc: pop });
  };

  const onStartClickHandler = () => {
    let records = [];
    if (activeMode == ActiveMode.SEARCH) {
      const linkedList_searchValue = document.getElementById(
        "linkedList_searchValue"
      ).value;
      records = actionTypeFunc.actionTypeFunc(obj, linkedList_searchValue);
    } else if (activeMode == ActiveMode.INSERT) {
      const linkedList_insertValue = document.getElementById(
        "linkedList_insertValue"
      ).value;
      const linkedList_insertIndex = document.getElementById(
        "linkedList_insertIndex"
      ).value;
      const insertIndex = parseInt(linkedList_insertIndex);
      records = actionTypeFunc.actionTypeFunc(
        obj,
        linkedList_insertValue,
        insertIndex
      );
    } else if (activeMode == ActiveMode.REMOVE) {
      const linkedList_removeIndex = document.getElementById(
        "linkedList_removeIndex"
      ).value;
      const removeIndex = parseInt(linkedList_removeIndex);
      records = actionTypeFunc.actionTypeFunc(obj, removeIndex);
    } else if (activeMode == ActiveMode.BUBBLE_SORT) {
      records = actionTypeFunc.actionTypeFunc(obj);
    }

    onActionClick(records);
    // onActionClick(actionTypeFunc);
  };

  /* eslint-disable default-case */
  switch (mode) {
    case MODE.LINKED_LIST:
      return (
        <React.Fragment>
          <ul className={classes.navBar}>
            <NavButton
              activeMode={activeMode}
              onClick={onClickLinkedListSearchHandler}
            >
              SEARCH
            </NavButton>
            <NavButton
              activeMode={activeMode}
              onClick={onClickLinkedListInsertHandler}
            >
              INSERT
            </NavButton>
            <NavButton
              activeMode={activeMode}
              onClick={onClickLinkedListRemoveHandler}
            >
              REMOVE
            </NavButton>
            <NavButton onClick={onStartClickHandler}>START!</NavButton>
          </ul>
          <InputBox activeMode={activeMode}></InputBox>
        </React.Fragment>
      );
    case MODE.STACK:
      return (
        <React.Fragment>
          <ul className={classes.navBar}>
            <NavButton activeMode={activeMode} onClick={onClickStackPopHandler}>
              POP
            </NavButton>
            {/* <NavButton
              activeMode={activeMode}
              onClick={onClickLinkedListInsertHandler}
            >
              INSERT
            </NavButton>
            <NavButton
              activeMode={activeMode}
              onClick={onClickLinkedListRemoveHandler}
            >
              REMOVE
            </NavButton> */}
            <NavButton onClick={onStartClickHandler}>START!</NavButton>
          </ul>
          <InputBox activeMode={activeMode}></InputBox>
        </React.Fragment>
      );
    case MODE.SORT:
      return (
        <ul className={classes.navBar}>
          <NavButton activeMode={activeMode} onClick={onClickBubbleSortHandler}>
            BUBBLE_SORT
          </NavButton>
          <NavButton
            activeMode={activeMode}
            onClick={onClickSelectionSortHandler}
          >
            SELECTION_SORT
          </NavButton>
          <NavButton
            activeMode={activeMode}
            onClick={onClickInsertionSortHandler}
          >
            INSERTION_SORT
          </NavButton>
          <NavButton activeMode={activeMode} onClick={onClickMergeSortHandler}>
            MERGE_SORT
          </NavButton>
          <NavButton activeMode={activeMode} onClick={onClickQuickSortHandler}>
            QUICK_SORT
          </NavButton>
          <NavButton onClick={onStartClickHandler}>START!</NavButton>
        </ul>
      );
  }
}

export default NavBar;
