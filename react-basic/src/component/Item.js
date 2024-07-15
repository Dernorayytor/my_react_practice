import React from 'react';
import "../style/item.css"
const Item =()=>{
    const name = 'ค่ารถ';
    const amount = - 300;
    return (
        <li className='item2'>{name}<span>{amount}</span></li>
);
}

const Item2 =()=>{
    return (
        <li className='item'>เงินเดือน<span>+20000</span></li>
);
}

export { Item, Item2 };