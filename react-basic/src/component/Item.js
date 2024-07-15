import React from 'react';

const Item =()=>{
    const name = 'ค่ารถ';
    const amount = 300;
    return (
        <li>{name}<span>{amount}</span></li>
);
}

const Item2 =()=>{
    return (
        <li>เงินเดือน<span>+20000</span></li>
);
}

export { Item, Item2 };