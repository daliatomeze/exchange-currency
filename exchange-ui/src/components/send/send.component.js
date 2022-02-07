import classes from '../send/send.module.css';
import {FaRegCheckCircle , FaCcVisa} from "react-icons/fa";
import { BsBank } from "react-icons/bs";
import { FcMoneyTransfer } from "react-icons/fc";
import masterCard from '../../img/masterCard.png';
import { useState } from 'react';


const Send=()=>{
   
const[method,setMethod]=useState(false);

  const chose=(bool)=>{
setMethod(bool);
  }
    return<div>
    <div className={classes.container}>
<div className={classes.leftDiv}>
  <div className={classes.content}>
      <h2>Payment information</h2>
<form>
    
<fieldset className={classes.field}>
        <legend>
        Receiver Name
        </legend>

        <input type='text'  className={classes.input} placeholder='Receiver Full Name'></input>
      
    </fieldset>


    <fieldset className={classes.field}>
        <legend>
        amount
        </legend>

        <input type='number'  className={classes.input} placeholder='maximum 2000$'></input>
        <select>
            <option>USD</option>
        </select>
    </fieldset>

    <h3>How does your receiver want the money?</h3>
    
    <div className={classes.paymentContainer}>
    <button className={ method ?classes.paymentMethod :classes.paymentMethod2} onClick={ (e)=>{e.preventDefault();
        chose(false)}
   }>
   <FcMoneyTransfer size={'30px'}/>
   <h4>Cash pick up</h4>
    </button>

    <button className={ method ?classes.paymentMethod2 :classes.paymentMethod} onClick={(e)=>{e.preventDefault();
        chose(true)}}>
    <BsBank size={'30px'} color='#e4d300'/>
   <h4>Bank account</h4>
    </button>

    </div>
    <fieldset className={classes.field}>
    <legend>{method ? "Account Number" : " Reference number"}
    
   
    </legend>

    <input type='text'  className={classes.input}></input>
</fieldset>

        
    <button  className={classes.sendButton} >Send</button>

        
    

    </form>
    </div>
</div>
<div className={classes.rightDiv}>
    <h2>The fast & trusted way to send money</h2>
    <p>  Millions of people check our rates and send money with us every day.</p>
    
    <ul>
        <li><FaRegCheckCircle className={classes.icon}/>   our low fees and exchange rates in real-time</li>
        <li><FaRegCheckCircle  className={classes.icon}/> Transparent delivery times so you can move money fast</li>
        <li><FaRegCheckCircle  className={classes.icon}/> Sign up for a free personal or business account in minutes</li>
    </ul>
    <div className={classes.iconsRow}>
    <FaCcVisa color= 'rgb(20 26 91)' size={'35px'}  className={classes.iconItem}/>
    <img src={masterCard} width={'40px'} height='45px' className={classes.iconItem}/>
    <button className={classes.iconItem}>EFT</button>
    <button className={classes.iconItem}>ACH</button>
    <button className={classes.iconItem}>WIRE</button>
    <button className={classes.iconItem}> <BsBank/></button>
   

    </div>
</div>

</div>


    
    </div>

}
export default Send;