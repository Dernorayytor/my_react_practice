import React from 'react';
import "../style/item.css"
const Item =({title,amount})=>{
    return (
        <li >{title}<span>{amount}</span></li>
);
}

const Item2 =()=>{
    return (
        <li className='item'>เงินเดือน<span>+20000</span></li>
);
}

export { Item, Item2 };