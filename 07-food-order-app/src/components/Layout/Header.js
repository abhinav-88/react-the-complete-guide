import React from "react";
import classes from "./Header.css.module.css";
import mealsImage from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";
const Header = props => {
  return (
  <React.Fragment>
    <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
    </header>
    <div className={classes['main-image']}>
        <img src={mealsImage} alt="Table full of declicious food" />
    </div>
  </React.Fragment>
  );
};
export default Header;
