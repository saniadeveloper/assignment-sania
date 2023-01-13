import React from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { Link } from 'react-router-dom';
import {Button} from '@mui/material'



export const ProductsCart = () => {
    const dispatch=useDispatch()
    const cartItems=useSelector((state)=>state.productReducer.cart)

    return (
        <div>
                <h1>Order Summary</h1>
            <div className='parent' >
                {cartItems.map((item)=>{
                    return(
                        <div>
                            <div className='card' >
                              <img className='image' src={item.image} alt="" />
                             <h3>{item.productName}</h3>
                             <h4>Price: ${item.price}</h4>
                             <Button variant='contained' onClick={()=>dispatch({type:"Remove-Product",data:item})} >Remove</Button>
                             <Link to="/details" >
                             <Button sx={{marginLeft:"15px"}} variant='contained' onClick={()=>dispatch({type:"Selected-Product",data:item })} >View Details</Button>
                             </Link>
                             
                           
                        </div>
                        <div> <h2>
                Subtotal ({cartItems.reduce((acc, item) => acc + item.price, 0)})
                items
              </h2>
              </div>
                        </div>


                    )
                })}
            </div>
                <Button sx={{marginLeft:"15px"}} variant='contained' >Checkout</Button>
        </div>
    );
};

