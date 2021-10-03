import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Classes from "./Body.module.css";
import Pic from'../../Assets/images/product/1.png'

const Body = (props)=>{



return(
    <div className={Classes.backgroundimg} >
        {props.children}
        
    </div>
)




}
export default Body;