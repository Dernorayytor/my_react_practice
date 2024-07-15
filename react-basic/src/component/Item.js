import React from 'react';
import "../style/item.css"
const Item =({title,amount})=>{
    // const {title,amount}= props //ไม่ต้องมา props.amount เก็บไว้ เพื่อเรียกใช้ amount
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