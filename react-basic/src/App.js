import './style/App.css';
import React from 'react';
import Transaction from './component/Transaction';
import FormComponent from './component/FromComponent';
import { v4 as uuidv4 } from 'uuid';
const Title =()=><h1>โปรแกรมบัญชีรายรับ รายจ่าย</h1>;
const Description =()=><p>บันทึกข้อมูลบัญชีในแต่ละวันๆ</p>;

function App() {
  const design = {color: "red",textAligh:"center",fontSize: '1.5rem'}
  const initData =[
    {id:1,title:"ค่าอกไก่",amount:100},
    {id:2,title:"ค่าโปรตีน",amount:1500},
    {id:3,title:"ค่ารถ",amount:100}
  ]
  return ( 
    <div className='container'>
      <Title/>
      <FormComponent/>
      <Description/>
      <Transaction items = {initData}/>
       
      
      
    </div> //ถ้าไม่มี div หรือ root elementที่มาครอบ ส่วน html ที่แทรกใน retune จะเออเร่อ จะใช้ section/article ก็ได้หรือตัวไหนก็ได้ได้หมด <> ก็ได้
     
  );
}

export default App;
