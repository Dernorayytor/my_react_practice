import React from 'react';
import "../style/item.css"
import PropTypes from 'prop-types'; // ES6

const Item =(props)=>{
    const {title,amount}= props //ไม่ต้องมา props.amount เก็บไว้ เพื่อเรียกใช้ amount
    const status = amount<0 ? 'รายจ่าย' : 'รายรับ'
    return (
        <li >{status}{title}<span>{amount}</span></li>
);
}

const Item2 =()=>{
    return (
        <li className='item'>เงินเดือน<span>+20000</span></li>
);
}
Item.prototype={
    title:PropTypes.string.isRequired,
    amount:PropTypes.number.isRequired
}

export { Item, Item2 };