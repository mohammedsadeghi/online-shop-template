import React from "react";
import { useStateValue } from "../../stateprovider";
import Classes from './product.module.css';



function Product ({id,title,image,price,rating}){
    const [{basket},dispatch]=useStateValue();
    const AddToBasket=()=>{
        console.log(basket)
        dispatch({
        type:'Add_To_Basket',
        item:{id:id,
            title:title,
            image:image,
            price:price,
            rating:rating

        }})
    }
    let x=0;
   
        
        
        
        return(
        <div className={Classes.product}>
            <div className={Classes.product_info}>
                <p>{title}</p>
                <p className={Classes.product_price}>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
            
                <div className={Classes.product_rating}>
                    {
                        Array(rating).fill().map((_)=>(<p key={x++}>*</p>))
                        
                    }
                </div>
            </div>
            <img src={image} alt={'product'}/>
            <button onClick={AddToBasket}>Add to basket</button>
        </div>
        )
    }

export default Product;