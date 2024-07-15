// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Transaction from './component/Transaction';
const Title =()=><h1>โปรแกรมบัญชีรายรับ รายจ่าย</h1>;
const Description =()=><p>บันทึกข้อมูลบัญชีในแต่ละวันๆ</p>;

function App() {
  return ( 
    <div>
      <Title/>
      <Description/>
      <Transaction/>
       
      
      
    </div> //ถ้าไม่มี div หรือ root elementที่มาครอบ ส่วน html ที่แทรกใน retune จะเออเร่อ จะใช้ section/article ก็ได้หรือตัวไหนก็ได้ได้หมด <> ก็ได้
     
  );
}

export default App;
