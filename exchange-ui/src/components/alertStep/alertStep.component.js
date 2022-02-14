import classes from "./alertStep.module.css";
import { RiUserAddFill } from 'react-icons/ri';
import {Icon,Button}  from 'semantic-ui-react';

const AlertStep=()=>{

    return<div  className={classes.component}>
        <h2>How Xe Rate Alerts work</h2>
        <div className={classes.container}>
        <div className={classes.div}>
            <div>
            <Icon  color='blue' circular size='big' name="add user"/>
            </div>
            <h2>1. Create account</h2>
            <p className={classes.p}>One free account for all your foreign currency needs.</p>
        </div>
        <div className={classes.div}>
        <div>
            <Icon  color='blue' circular size='big' name="chart bar outline"/>
            </div>
       <h2> 2. Set desired rate</h2>
       <p className={classes.p}> Create multiple alerts to keep track of your chosen currencies</p>
        </div>
        <div className={classes.div}>
        <div>
            <Icon  color='blue' circular size='big' name="alarm"/>
            </div>
           
        <h2>3. Get notified</h2>
        <p className={classes.p}> We'll let you know when your desired rate is triggered</p>
        </div>
        </div>
        <div  className={classes.button}><Button size='large' color='blue'>Open free account</Button></div>
    </div>;
}

export default AlertStep;