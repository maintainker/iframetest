import React from 'react';

const Basket = ({poster}) =>{
    
    const List = ()=>{ 
        const List = poster.map((v)=>{
            if(v.count>0){
            return (<li className="list" key = {v.idx}>
                <div className="author">{v.name}</div>
                <div className="counter">x{v.count}</div>
                <div className="price">${v.price}</div>
            </li>)}else{
                return "";
            }
        })
        return List;
    }
    return(<div className="basket">
        <List/>
    </div>);
}

export default Basket;