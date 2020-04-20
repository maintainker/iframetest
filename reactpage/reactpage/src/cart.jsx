import React from 'react';
import CartHead from './cart_head';
import Basket from './cart_basket';
import Calculator from './cart_calc';
import styled,{keyframes} from 'styled-components';
import { useState,useCallback } from 'react';

const Cart = ({poster}) =>{
    const [finOn,setFinON] = useState(false);//state로 해보고 그냥도 해보자
    const move = keyframes`
        0% {top:100%;}
        100% {top:0;}
    `;
    const CartFin = styled.section`
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background-color: rgba(0,0,0,0.7);
        animation: ${move} 0.5s ease-in-out;
        div{
            width: 369px;
            height: 611px;
            position : absolute;
            top:50%;
            left:50%; 
            transform: translate(-50%,-50%);
            iframe {
                width:100%;
                height:100%;
            }
        }
    `;
    const changeFin = useCallback( () =>{
          setFinON(!finOn);
          console.log(finOn);
      },[finOn]);
    return(<div className = "cart">
        <CartHead poster = {poster}/>
        <Basket poster={poster}/>
        <Calculator poster={poster} changeFin={changeFin}/>
        {finOn? <CartFin>
            <div>
                <iframe src="./popup.html"></iframe>
            </div>
        </CartFin>:(<></>)}
    </div>);
}

export default Cart;