import React, {useState,useEffect,Component } from "react";
import Send from "../../components/send/send.component";
import Alert from "../../components/Alert/alert.component"
import classes from '../homePage/homePage.module.css';
import {SiConvertio } from "react-icons/si";
import { FiSend} from "react-icons/fi";
import {GiChart} from "react-icons/gi"; 
import{ImBell} from "react-icons/im";
import Map from "../../components/map/map.component";
import ConvertSection from '../../components/convert/convert-section.component';
import LiveExhnage from "../../components/live-exhange/live-exchange-component";
import {
  BrowserRouter ,
  Routes,
  Route,
  Link
} from "react-router-dom";
import AlertStep from "../../components/alertStep/alertStep.component";


const Home = () => {


  const[component,setComponent]=useState("convert");
  


  return (
    <div className={classes.homeSection}>
      <div
        className={classes.bgimg}
      >
        <div className={classes.row }  className={classes.center}>
          <div className={classes.homeContent}>
            <h1  style={{ color:'rgb(19 22 33)'  }} className={classes.h }>The World's Trusted Currency Authority</h1>
            <p className={classes.p}>
              Check exchange rates, send money internationally, and free
              currency tools
            </p>
          </div>
        </div>
      
      <div className={classes.components}>
        <div className={classes.div}>
        <div className={classes.componentHeader} >
        
          <Link to="/" className={(component==="convert") ? classes.componentItem2 :classes.componentItem } onClick={(event)=>{setComponent("convert"); }}> <SiConvertio/> Convert</Link>
          <Link to="send" className={(component==="send")?classes.componentItem2 :classes.componentItem }  onClick={()=>{setComponent("send")}}> <FiSend/> Send</Link>
         <Link  to="chart"className={(component==="chart")?classes.componentItem2 :classes.componentItem }  onClick={()=>{setComponent("chart")}}> <GiChart/> Chart</Link>
          <Link  to="alert"className={(component==="alert")?classes.componentItem2 :classes.componentItem }  onClick={()=>{setComponent("alert")}}> <ImBell/> Alert</Link>
         
          

        </div>
        
        <Routes>
      <Route path="/" element={  <ConvertSection></ConvertSection> }/>
      <Route path="send" element={ <Send/> }/>
      <Route path="chart" element={ <Send/> }/>
      <Route path="alert" element={ <Alert/> }/>
      
       
   
    </Routes>
   
             
               
                </div>



                </div>  

                
                
        <Routes>
      <Route path="/" element={ <LiveExhnage/>
     }/>
       <Route path="send" element={ <Map/> }/>
      <Route path="chart" element={ <Map/> }/>
      <Route path="alert" element={ <AlertStep/>}/>
       
   
    </Routes>
    
              

      </div>
    </div>
 
  );
}

export default Home;

