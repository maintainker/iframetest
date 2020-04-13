import React from 'react';
import CartHead from './cart_head';
import Basket from './cart_basket';
import Calculator from './cart_calc';

const Cart = ({poster}) =>{
    return(<div className = "cart">
        <CartHead poster = {poster}/>
        <Basket poster={poster}/>
        <Calculator poster={poster}/>
    </div>);
}

export default Cart;