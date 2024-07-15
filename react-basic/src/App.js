import logo from './logo.svg';
import './App.css';
import React from 'react';

const Title =()=><h1>โปรแกรมบัญชีรายรับ รายจ่าย</h1>;
const Description =()=><p>บันทึกข้อมูลบัญชีในแต่ละวันๆ</p>;
const Item =()=><li>ค่าเดินทาง<spa>-200</spa></li>
const Item2 =()=><li>เงินเดือน<spa>+20000</spa></li>
const Transaction =()=>{
  return (  
      <ul>
          <Item/>
          <Item2/>
          <Item/>
      </ul>
  );
}
function App() {
  return ( 
    <div>
      <Title/>
      <Description/>
      <Transaction/>
       
      
      
    </div> //ถ้าไม่มี div หรือ root elementที่มาครอบ ส่วน html ที่แทรกใน retune จะเออเร่อ จะใช้ section/article ก็ได้หรือตัวไหนก็ได้ได้หมด <> ก็ได้
    
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    
  );
}

export default App;
