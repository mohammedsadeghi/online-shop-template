
import React from "react";
import { useStateValue } from "../../stateprovider";


const Subtotal = () =>{
    const cardTotal=(basket)=>basket?.reduce((amount,item)=>item.price+amount,0)
    const [{basket},dispatch]=useStateValue();
    console.log(cardTotal)

    return(
        <div style={{display:"block"}}>
            <p>TOTAL PRICE:<strong>${cardTotal(basket)}</strong></p>
            <button>proceed to checkout</button>
        </div>
    )
}
export default Subtotal;