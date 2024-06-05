import React from 'react';
import CartStyle from './cartStyle';
import Payment from './payment';
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function ShowCart() {
    const cart = useSelector((state) => state.cartReducer)
    const navigate = useNavigate()
    return (
        <>
        <button onClick={()=>navigate("/showProducts")}>continue shopping</button>
        <button onClick={()=>navigate("/payment")}>go to payment</button>
        <CartStyle></CartStyle>
        
        </>
        
    )
   
}








