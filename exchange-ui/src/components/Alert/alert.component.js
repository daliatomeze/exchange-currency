import classes from "./alert.module.css";
import alert from "../../img/alert.png";
import CurrencyDropdown from '../currency-dropdown/currency-dropdown-component';
import { useState } from "react";
import {Button} from 'semantic-ui-react'

const Alert = () => {
const[currency,setCurrency]=useState();
const[email,setEmail]=useState("");

    return <div className={classes.container} >
        <div className={classes.leftDiv}>
        <h2>Let us watch the market for you</h2>
        <p  className={classes.p}>Currency markets are always moving. Set an alert so you never miss your desired rate.</p>
        
        <div className={classes.currencyDropdown}>
        <CurrencyDropdown  setvalue={setCurrency} value={currency}></CurrencyDropdown>
        </div>
        
        <fieldset className={classes.field}>
        <legend>
        Email
        </legend>
        <input   className={classes.email} type="email" placeholder="your Email"  value={email} onChange={(e)=>{setEmail(e.target.value)}}></input>
        </fieldset>
        <div  className={classes.button}>
        <Button size='large' color='blue'>Get Rate Alerts</Button>
        </div>
        
        </div>

        <div className={classes.rightDiv}>
            <img   src={alert}   className={classes.img}  />
        </div>
    </div>;
}
export default Alert;