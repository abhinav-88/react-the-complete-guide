import React,{ useContext, useEffect, useState } from "react";
import classes from "./HeaderCartButton.module.css"
import CartIcon from "./CartIcon";
import CartContext from "../../components/store/cart-context";
const HeaderCartButton = props => {
  const cartctx = useContext(CartContext);
  const { items } = cartctx;
  const numberOfCartItems = items.reduce((curNumber, item) => {
    return (
      curNumber+item.amount
    );
  }, 0);
  const [btnIsHighlighted, setBtnIsHighlighted] = useState();
  const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;
  useEffect(() => {
    if (items.length === 0) {
      return;
    } 
    setBtnIsHighlighted(true);
    //Removes animation class after timeout
    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    },300);
    // Clean up function
    return () => {
      clearTimeout(timer);
    };
  }, [items]);
  return (
    <button className={btnClasses} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon></CartIcon>
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>
            {numberOfCartItems}
        </span>
    </button>
  );
};
export default HeaderCartButton;
