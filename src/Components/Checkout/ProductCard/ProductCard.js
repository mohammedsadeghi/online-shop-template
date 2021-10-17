import React from "react";
import Classes from './ProductCard.module.css'
import { useStateValue } from "../../../stateprovider";





const ProductCard=(props)=>{
    const [{basket},dispatch]=useStateValue();
    let rating_key=0;
    const removeItem=(e)=>{
        e.preventDefault();
        dispatch({
            type:'remove_from_cart',
            id:props.id
        })
    }

    return(
        <div className={Classes.ProductCard}>
            <img className={Classes.ProductCard_image} src={props.image} alt={'card'}/>
            <div className={Classes.ProductCard_info}>
                <p className={Classes.ProductCard_title}>
                    {props.title}
                </p>
                <p className={Classes.ProductCard_prics}>
                    ${props.price}
                </p>
            
            <div className={Classes.ProductCard_rating}>
                {
                    Array(props.rating).fill().map((_)=>{
                        return (<span key={rating_key++}>*</span>) 
                        
                    })
                }
            </div>
            <button onClick={removeItem}>Remove this ITEM</button>
            </div>
        </div>
    )
}


export default ProductCard;