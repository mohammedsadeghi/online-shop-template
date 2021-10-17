import Classes from './Checkout.module.css'
import React, { useState } from 'react';
import Subtotal from '../Subtotal/Subtotal';
import { useStateValue } from '../../stateprovider';
import ProductCard from './ProductCard/ProductCard';


const Cheackout=()=>{
    const[{basket}]=useStateValue();


    return(
        <div className={Classes.checkout}>
            <div className={Classes.checkout_left}>

                {
                    basket.length===0 ?(
                        <div>
                            <h2 className={Classes.checkout_title}>
                                your shopping basket is empty
                            </h2>
                            <p>
                                you have no chosen item here.Choose one!.
                            </p>
                        </div>
                    ):(
                        <div>
                            <h2 className={Classes.shopBasket}>
                               
                            </h2>
                            {
                                basket.map(i=>{
                                    return(<ProductCard
                                        id={i.id}
                                        title={i.title}
                                        image={i.image}
                                        price={i.price}
                                        rating={i.rating}
                                        key={i.id}/>)
                                })
                            }
                        </div>
                    )
                }
                
            </div>
            {
                basket.length>0 && (
                    <div className={Classes.checkout_right}>
                        <Subtotal/>
                    </div>
                )
            }
        </div>
    )
}
export default Cheackout;