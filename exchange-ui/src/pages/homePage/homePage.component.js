import React, {useState,useEffect,Component } from "react";
import Send from "../../components/send/send.component";
import classes from '../homePage/homePage.module.css';
import {SiConvertio } from "react-icons/si";
import { FiSend} from "react-icons/fi";
import {GiChart} from "react-icons/gi"; 
import{ImBell} from "react-icons/im";
import Map from "../../components/map/map.component";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


const Home = () => {


  const[component,setComponent]=useState("send");
  


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
        
          <Link to="convert" className={(component==="convert") ? classes.componentItem2 :classes.componentItem } onClick={(event)=>{setComponent("convert"); }}> <SiConvertio/> Convert</Link>
          <Link to="/" className={(component==="send")?classes.componentItem2 :classes.componentItem }  onClick={()=>{setComponent("send")}}> <FiSend/> Send</Link>
         <Link  to="chart"className={(component==="chart")?classes.componentItem2 :classes.componentItem }  onClick={()=>{setComponent("chart")}}> <GiChart/> Chart</Link>
          <Link  to="chart"className={(component==="alert")?classes.componentItem2 :classes.componentItem }  onClick={()=>{setComponent("alert")}}> <GiChart/> Alert</Link>
         
          

        </div>
        
        <Routes>
      <Route path="/" element={ <Send/> }/>
      <Route path="convert" element={ <Send/> }/>
      <Route path="chart" element={ <Send/> }/>
      <Route path="alert" element={ <Send/> }/>
      
       
   
    </Routes>
   
             
               
                </div>



                </div>  

                
                
        <Routes>
      <Route path="/" element={ 
      <Map/>}/>
       <Route path="convert" element={ <Map/>}/>
      <Route path="chart" element={ <Map/> }/>
      <Route path="alert" element={ <Map/>}/>
       
   
    </Routes>
    
              

      </div>
    </div>
 
  );
}

export default Home;
