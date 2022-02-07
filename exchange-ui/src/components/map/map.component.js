import classes from"../map/map.module.css";
import map from '../../img/map.gif';

const Map=()=>{


    return<div  className={classes.map}>
    <h2 className={classes.h2}>Send money to 130+ countries</h2>
         
         <img src={map} width='70%' hight="400px" />
         <div className={classes.spans}>
           <span><b>130+ </b>Countries</span>
           <span><b>98+</b> Currencies</span>
           <span><b>Fast</b> delivery</span>
         </div>

    </div>;
}
export default  Map;