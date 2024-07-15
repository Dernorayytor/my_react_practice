import React from 'react';
import "../style/item.css"
const Item =(props)=>{
    
    return (
        <li >{props.title}<span>{props.amount}</span></li>
);
}

const Item2 =()=>{
    return (
        <li className='item'>เงินเดือน<span>+20000</span></li>
);
}

export { Item, Item2 };