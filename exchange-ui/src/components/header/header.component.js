import React from "react";
import classes from './header.module.css'


const Header = () => {
  return (
    <header className={classes.header}>

      <div className={classes.nav } className={classes.center}>
        <img src={require("../../img/money-transfer-logo.png")} className={classes.imageLogo} alt="logo"/>
        
        <div className={classes.rightSide}>
          <li className={classes.active}>
            <a href="#" className={classes.list}>
              Converter
            </a>
          </li>
          <li className={classes.list}>Send money</li>
          <li className={classes.list}>Business & Api</li>
          <li className={classes.list}>Tools</li>
          <li className={classes.list}>Resources</li>
          
        </div>
      </div>

      <div className={classes.btns}>
        <li id="sign-in" className={classes.headerBtn}>
          <a href="#">Sign in</a>
        </li>
        <li id="get-app" className={classes.headerBtn}>
          <a href="#">Get the App</a>
        </li>
      </div>
    </header>
  );
};

export default Header;
