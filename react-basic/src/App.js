import './style/App.css';
import React from 'react';
import Transaction from './component/Transaction';
import FormComponent from './component/FromComponent';
const Title =()=><h1>โปรแกรมบัญชีรายรับ รายจ่าย</h1>;
const Description =()=><p>บันทึกข้อมูลบัญชีในแต่ละวันๆ</p>;

function App() {
  const design = {color: "red",textAligh:"center",fontSize: '1.5rem'}
  const data =[
    {title:"ค่าอกไก่",amount:100},
    {title:"ค่าโปรตีน",amount:1500},
    {title:"ค่ารถ",amount:100}
  ]
  return ( 
    <div className='container'>
      <Title/>
      <FormComponent/>
      <Description/>
      <Transaction/>
       
      
      
    </div> //ถ้าไม่มี div หรือ root elementที่มาครอบ ส่วน html ที่แทรกใน retune จะเออเร่อ จะใช้ section/article ก็ได้หรือตัวไหนก็ได้ได้หมด <> ก็ได้
     
  );
}

export default App;
