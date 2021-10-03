import React, { Component } from "react";
import Header from "../Component/Header/Header";
import Pics from "../Component/Body/Pics";
class Mainpage extends Component{

    render(){
        return(
            <div>
                <Header/>
                <Pics/>
            </div>
            
        )
    }
}
export default Mainpage;