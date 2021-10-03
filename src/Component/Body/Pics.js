import React from "react";
import Body from "./Body";
import Classes from './Body.module.css'
import Pic1 from "../../Assets/images/product/1.png"
import Pic2 from "../../Assets/images/product/2.png"
import Pic4 from "../../Assets/images/product/4.png"
import Pic5 from "../../Assets/images/product/5.png"
import Pic12 from "../../Assets/images/product/12.png"
import Pic10 from "../../Assets/images/product/10.png"

const Pics = ()=>{
    const url={
        pic1:Pic1,
        pic2:Pic2,
        pic3:Pic4,
        pic4:Pic5,
        pic5:Pic12,
        pic6:Pic10
    }
    let images=Object.keys(url).map(ikey=>{
        return <img src={url[ikey]} className={Classes.griditem} key={ikey}/>
    })

return(
    <Body>
        <div className={Classes.context}>    
            <div className={Classes.gridcontainer}>
                {images}
            </div>
        </div>
    </Body>

)
}
export default Pics;