import logo from './logo.svg';
import './App.css';
import React from 'react';
function App() {
  return ( 
    <div>
      <h1>โปรแกรมบัญชีรายรับ รายจ่าย</h1> 
      <p>บันทึกข้อมูลบัญชีในแต่ละวันๆ</p>
      <ul>
          <li>ค่าเดินทาง<spa>-200</spa></li>
          <li>เงินเดือน<spa>+20000</spa></li>
          <li>ค่าข้าว<spa>-500</spa></li>
      </ul>
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
