import React from 'react';

const Calculator = ({poster}) =>{
    let totalPrice = 0,totalposter=0 ; 
    let tax ;
    for(let i = 0 ; i < poster.length ; i++){
        totalposter += poster[i].count*poster[i].price;
    }
    tax = Math.round(totalposter*8.875);
    totalPrice = totalposter + tax*0.01 +14.5
    const win_open = ()=>{
        window.open('./popup.html ', 'newWindow','left=300, top=50, width=369, height=611');
    };
    return(<div className="cal">
        <ul>
            <li><div>shipping (international) :</div><div>$14.50</div></li>
            <li><div>Tax (8.875%) :</div><div>${tax*0.01}</div></li>
            <li className ="total"><div>TOTAL : </div><div>${totalPrice}</div></li>
        </ul>
        <a className="finish" href="javascript:" onClick={()=>win_open()}>PayPal 결제</a>
    </div>);
}


export default Calculator;