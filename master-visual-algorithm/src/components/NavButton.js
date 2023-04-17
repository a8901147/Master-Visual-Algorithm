import { useState } from "react";
import classes from "./NavButton.module.scss";

function NavButton(props) {
  const navbuttonColor =
    props.activeMode == props.children ? "yellow" : "white";

  // const [isOpen, setIsOpen] = useState(false);
  // const handleDropdownToggle = () => {
  //   setIsOpen(!isOpen);
  // };
  return (
    <li className={classes.navButton}>
      <div onClick={props.onClick} style={{ color: navbuttonColor }}>
        {props.children}
      </div>
      {/* <div
        className="dropdown-toggle"
        onClick={handleDropdownToggle}
        style={{ color: navbuttonColor }}
      >
        Open Dropdown
      </div>
      {isOpen && (
        <div className={classes.dropdown_menu}>
          <input
            type="text"
            className="dropdown-input"
            placeholder="Enter value"
          />
          <button className="dropdown-button">Submit</button>
        </div>
      )} */}
    </li>
  );
}

export default NavButton;
