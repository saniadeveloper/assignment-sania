import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {Button} from '@mui/material'

import "./project.css"

export const ProductsChild = ({item}) => {
    console.log(item,"check")
    const dispatch=useDispatch()
    return (
        <div className='card' >
            <img className='image' src={item.image} alt="" />
            <h3>{item.productName}</h3>
            <h3>Model: {item.sku}</h3>
            <h4>Price: Rs: {item.price}</h4>
            <Button sx={{marginBottom:"15px"}} variant='contained' onClick={()=>dispatch({type:"Add-cart",data:item})} >Add to Cart</Button>
            <Link to="/details" >
            <Button sx={{marginLeft:"15px" ,marginBottom: "15px", textDecoration:"none"}} variant='contained' onClick={()=>dispatch({type:"Selected-Product",data:item })} >View Details</Button>
            </Link>
        </div>
    );
};

