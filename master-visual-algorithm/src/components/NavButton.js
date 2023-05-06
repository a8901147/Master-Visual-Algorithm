import classes from "./NavButton.module.scss";

function NavButton(props) {
  const navbuttonColor =
    props.activeMode == props.children ? "yellow" : "white";

  const isHomePage =
    props.children == "Home" ? { float: "right" } : { float: "left" };

  return (
    <li className={classes.navButton} style={isHomePage}>
      <div onClick={props.onClick} style={{ color: navbuttonColor }}>
        {props.children}
      </div>
    </li>
  );
}

export default NavButton;
