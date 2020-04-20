import React,{useCallback} from 'react';
import './style.scss';


const PosterPage = ({changeBasket,poster}) =>{
    const onclick_add =  useCallback((v) =>{
        changeBasket("add",v);
    },[changeBasket]);
    const onclick_remove =  useCallback((v) =>{
        changeBasket("remove",v);
    },[changeBasket]);

    const Posters = () =>{ 
        const posters = poster.map((v)=>{
            return(
                <div className="poster" key={v.idx}>
                    <img src={`./img/poster${v.idx+1}.png`} alt={`poster${v.idx+1}`}/>
                    {v.count>0?(
                    <div className="mover basket">
                        <div className="mover_circle">
                            <span>${v.price}</span>
                        </div>
                        <div className="count">
                            <div className="minus">-</div>
                            <div className="plus">+</div>
                            <div className="countNum"><span>{v.count}</span></div>
                        </div>
                        <div className="mover_left" onClick={()=>onclick_remove(v.idx)}></div>
                        <div className="mover_right" onClick={()=>onclick_add(v.idx)}></div>
                    </div>
                    ):(
                    <div className="mover" onClick={()=>onclick_add(v.idx)}>
                        <div className="mover_circle">
                            <span>${v.price}</span>
                        </div>
                    </div>)}
                </div>
            );
        });
        return posters;
    }
    return(
    <div>
        <div className="title">
            <h1>NSHC Poster mall</h1>
            <ul>
                <li className="tit">Individual Posters</li>
                <li>
                    All posters are available and can be purchased as individuals or sets.<br/> Please email info@nshs.net for more information.<br/>
                    refer to https://posterworks.piscatello.com/#shop
                </li>
            </ul>
        </div>
        <div className="postersFrame"><Posters></Posters></div>
    </div>);
}

export default PosterPage;

