import React, { useState } from "react";
import { bubbleSort } from "../function/sort/bubbleSort";
import { selectionSort } from "../function/sort/selectionSort";
import { insertionSort } from "../function/sort/insertionSort";
import classes from "./NavBarTest.module.css";
import NavButtonTest from "./NavButtonTest";
import { mergeSort } from "../function/sort/mergeSort";
import { quickSort } from "../function/sort/quickSort";
import { MODE, ActiveMode } from "../function/common";

import { insert, remove, search } from "../function/linked-list/linked-list";
import InputBox from "./InputBox";
import { pop, push } from "../function/stack/stack";
import {
  insertBST,
  removeBST,
  searchBST,
} from "../function/binarySearchTree/binarySearchTree";

// import Slider from "../Slider/Slider";
// import NavNumber from "../NavNumber/NavNumber";

function NavBarTest({ mode, onActionTypeClick, onActionClick, obj }) {
  const [activeMode, setActiveMode] = useState("SEARCH");
  const [actionTypeFunc, setActionTypeFunc] = useState({
    actionTypeFunc: search,
  });

  // add there should be a default for each when change sort/linkedlist/stack

  // sort
  const onClickBubbleSortHandler = () => {
    setActiveMode(ActiveMode.BUBBLE_SORT);
    setActionTypeFunc({ actionTypeFunc: bubbleSort });
  };

  const onClickSelectionSortHandler = () => {
    setActiveMode(ActiveMode.SELECTION_SORT);
    setActionTypeFunc({ actionTypeFunc: selectionSort });
  };

  const onClickInsertionSortHandler = () => {
    setActiveMode(ActiveMode.INSERTION_SORT);
    setActionTypeFunc({ actionTypeFunc: insertionSort });
  };

  const onClickMergeSortHandler = () => {
    setActiveMode(ActiveMode.MERGE_SORT);
    setActionTypeFunc({ actionTypeFunc: mergeSort });
  };

  const onClickQuickSortHandler = () => {
    setActiveMode(ActiveMode.QUICK_SORT);
    setActionTypeFunc({ actionTypeFunc: quickSort });
  };

  // link list
  const onClickLinkedListSearchHandler = () => {
    setActiveMode(ActiveMode.SEARCH);
    setActionTypeFunc({ actionTypeFunc: search });
  };

  const onClickLinkedListInsertHandler = () => {
    setActiveMode(ActiveMode.INSERT);
    setActionTypeFunc({ actionTypeFunc: insert });
  };

  const onClickLinkedListRemoveHandler = () => {
    setActiveMode(ActiveMode.REMOVE);
    setActionTypeFunc({ actionTypeFunc: remove });
  };

  // stack
  const onClickStackPopHandler = () => {
    setActiveMode(ActiveMode.POP);
    setActionTypeFunc({ actionTypeFunc: pop });
  };

  const onClickStackPushHandler = () => {
    setActiveMode(ActiveMode.PUSH);
    setActionTypeFunc({ actionTypeFunc: push });
  };

  // BST
  const onClickSearchBSTHandler = () => {
    setActiveMode(ActiveMode.SEARCH_BST);
    setActionTypeFunc({ actionTypeFunc: searchBST });
  };

  const onClickInsertBSTHandler = () => {
    setActiveMode(ActiveMode.INSERT_BST);
    setActionTypeFunc({ actionTypeFunc: insertBST });
  };

  const onClickRemoveBSTHandler = () => {
    setActiveMode(ActiveMode.REMOVE_BST);
    setActionTypeFunc({ actionTypeFunc: removeBST });
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
    } else if (activeMode == ActiveMode.POP) {
      records = actionTypeFunc.actionTypeFunc(obj);
    } else if (activeMode == ActiveMode.PUSH) {
      const stack_pushValue = document.getElementById("stack_pushValue").value;
      const pushValue = parseInt(stack_pushValue);
      records = actionTypeFunc.actionTypeFunc(obj, pushValue);
    } else if (activeMode == ActiveMode.SEARCH_BST) {
      const BST_searchValue = document.getElementById("BST_searchValue").value;
      records = actionTypeFunc.actionTypeFunc(obj, BST_searchValue);
    } else if (activeMode == ActiveMode.INSERT_BST) {
      // if no duplicate
      const BST_insertValue = document.getElementById("BST_insertValue").value;
      const isDuplicated = obj.nodeArray.findIndex((element) => {
        return element.value == BST_insertValue;
      });

      if (isDuplicated != -1) {
        records = [obj];
      } else {
        records = actionTypeFunc.actionTypeFunc(obj, BST_insertValue);
      }
    } else if (activeMode == ActiveMode.REMOVE_BST) {
      // if no duplicate
      const BST_removeValue = document.getElementById("BST_removeValue").value;
      const isDuplicated = obj.nodeArray.findIndex((element) => {
        return element.value == BST_removeValue;
      });

      if (isDuplicated == -1) {
        console.log("cant find the remove value");
        records = [obj];
      } else {
        records = actionTypeFunc.actionTypeFunc(obj, BST_removeValue);
      }
    }
    onActionClick(records);
  };

  /* eslint-disable default-case */
  switch (mode) {
    case MODE.LINKED_LIST:
      return (
        <React.Fragment>
          <ul className={classes.navBar}>
            <NavButtonTest
              activeMode={activeMode}
              onClick={onClickLinkedListSearchHandler}
            >
              SEARCH
            </NavButtonTest>
            <NavButtonTest
              activeMode={activeMode}
              onClick={onClickLinkedListInsertHandler}
            >
              INSERT
            </NavButtonTest>
            <NavButtonTest
              activeMode={activeMode}
              onClick={onClickLinkedListRemoveHandler}
            >
              REMOVE
            </NavButtonTest>
            <NavButtonTest onClick={onStartClickHandler}>START!</NavButtonTest>
          </ul>
          <InputBox activeMode={activeMode}></InputBox>
        </React.Fragment>
      );
    case MODE.STACK:
      return (
        <React.Fragment>
          <ul className={classes.navBar}>
            <NavButtonTest
              activeMode={activeMode}
              onClick={onClickStackPopHandler}
            >
              POP
            </NavButtonTest>
            <NavButtonTest
              activeMode={activeMode}
              onClick={onClickStackPushHandler}
            >
              PUSH
            </NavButtonTest>

            <NavButtonTest onClick={onStartClickHandler}>START!</NavButtonTest>
          </ul>
          <InputBox activeMode={activeMode}></InputBox>
        </React.Fragment>
      );
    case MODE.BINARYSEARCHTREE:
      return (
        <React.Fragment>
          <div className={classes.navBar}>
            <NavButtonTest
              activeMode={activeMode}
              onClick={onClickSearchBSTHandler}
            >
              SEARCH_BST
            </NavButtonTest>
            <NavButtonTest
              activeMode={activeMode}
              onClick={onClickInsertBSTHandler}
            >
              INSERT_BST
            </NavButtonTest>
            <NavButtonTest
              activeMode={activeMode}
              onClick={onClickRemoveBSTHandler}
            >
              REMOVE_BST
            </NavButtonTest>
            <InputBox activeMode={activeMode}></InputBox>
            <NavButtonTest onClick={onStartClickHandler}>START!</NavButtonTest>
          </div>
        </React.Fragment>
      );
    case MODE.SORT:
      return (
        <ul className={classes.navBar}>
          <h1>2222</h1>
          <NavButtonTest
            activeMode={activeMode}
            onClick={onClickBubbleSortHandler}
          >
            BUBBLE_SORT
          </NavButtonTest>
          <NavButtonTest
            activeMode={activeMode}
            onClick={onClickSelectionSortHandler}
          >
            SELECTION_SORT
          </NavButtonTest>
          <NavButtonTest
            activeMode={activeMode}
            onClick={onClickInsertionSortHandler}
          >
            INSERTION_SORT
          </NavButtonTest>
          <NavButtonTest
            activeMode={activeMode}
            onClick={onClickMergeSortHandler}
          >
            MERGE_SORT
          </NavButtonTest>
          <NavButtonTest
            activeMode={activeMode}
            onClick={onClickQuickSortHandler}
          >
            QUICK_SORT
          </NavButtonTest>
          <NavButtonTest onClick={onStartClickHandler}>START!</NavButtonTest>
        </ul>
      );
  }
}
export default NavBarTest;
