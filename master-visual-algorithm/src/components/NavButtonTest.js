import { useState } from "react";
import classes from "./NavButtonTest.module.scss";

function NavButtonTest(props) {
  const [show, setShow] = useState("");
  const navbuttonColor =
    props.activeMode == props.children ? "yellow" : "white";
  const dropdownlistHandler = () => {
    props.onClick();
    setShow((show) => {
      if (show == "") {
        return classes.show;
      } else {
        return "";
      }
    });
  };

  return (
    <div className={classes.dropdown}>
      <button
        className={classes.dropbtn}
        onClick={dropdownlistHandler}
        style={{ color: navbuttonColor }}
      >
        {props.children}
      </button>
      <div className={`${show} ${classes.dropdown_content}`} id="myDropdown">
        {/* <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a> */}
        <input className={classes.input__field}></input>
        <button className={classes.button__field}>GO!</button>
      </div>
    </div>
  );
}

export default NavButtonTest;
