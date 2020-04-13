import React from 'react';

const CartHead =({poster}) =>{
    let count = 0 ; 
    for(let i = 0 ; i < poster.length; i++){
        if(poster[i].count !==0){count+=poster[i].count};
    }
    return(<div className="carthead">
        <span>shop({count})</span>
    </div>)
}

export default CartHead;