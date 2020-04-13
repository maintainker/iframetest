import React,{useState,useCallback} from 'react';
import PosterPage from './poster';
import Cart from "./cart";

function App() {
  const [poster,setPoster] =useState([{ // 포스터 리스트 전역적 관리
      idx : 0,
      name:"Milton Glaser",
      price: 275,
      count : 1
  },{
      idx : 1,
      name:"Glen Cummings",
      price: 150,
      count : 0
  },{
      idx : 2,
      name:"Jessica Walsh",
      price: 150,
      count : 0
  },{
      idx : 3,
      name:"Jake Barton",
      price: 175,
      count : 0
  },{
      idx : 4,
      name:"Julia Hoffmann",
      price: 150,
      count : 0
  },{
      idx : 5,
      name:"Jessica Hische",
      price: 150,
      count : 0
  },{
      idx : 6,
      name:"Matteo Bologna",
      price: 115,
      count : 0
  },{
      idx : 7,
      name:"David Gibson",
      price: 175,
      count : 0
  },{
      idx : 8,
      name:"David Carson",
      price: 225,
      count : 0
  },{
      idx : 9,
      name:"Stefan Sagmeister",
      price: 150,
      count : 0
  },{
      idx : 10,
      name:"Paula Scher",
      price: 150,
      count : 0
  },{
      idx : 11,
      name:"Paula Scher",
      price: 150,
      count : 0
  }]);
    const changeBasket = useCallback( (fnName,value) =>{
      let newBasket=[];
      let item;
      if(fnName==='add'){
        for(let i = 0 ; i< poster.length;i++){
          if(poster[i].idx === value){
            item = {...poster[i], count: poster[i].count+1}
            newBasket = newBasket.concat(item);
          }else{
            newBasket = newBasket.concat(poster[i]);
          }
        }
        setPoster(newBasket);
      }else if(fnName==='remove'){
        for(let i = 0 ; i< poster.length;i++){
          if(poster[i].idx === value){
            
              item = {...poster[i], count: poster[i].count-1}
              newBasket = newBasket.concat(item);
            
          }else{
            newBasket = newBasket.concat(poster[i]);
          }
        }
        setPoster(newBasket);
      }
      console.log(poster)
    },[poster]);
  return (
    
    <div>
      <PosterPage changeBasket={changeBasket} poster={poster}/>
      <Cart poster={poster}/>
    </div>
  );
}

export default App;
