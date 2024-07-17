import React from 'react';
import "../style/item.css"
import PropTypes from 'prop-types'; // ES6

const Item =(props)=>{
    const {title,amount}= props //ไม่ต้องมา props.amount เก็บไว้ เพื่อเรียกใช้ amount
    const status = amount<0 ? 'expense' : 'income'
    const symbol = amount<0 ? '-' : '+' //หรือ amount<0 ? '' : '+' ถ้าไม่ใช้ Math.abs(amount)
    return (
        <li className={status}>{title}<span>{symbol}{Math.abs(amount)}</span></li>
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