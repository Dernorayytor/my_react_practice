import './style/App.css';
import React from 'react';
import Transaction from './component/Transaction';
import FormComponent from './component/FromComponent';
import { useState } from 'react';
import DataContext from './data/DataContext';
import ReportComponent from './component/ReportComponent';

const Title =()=><h1>โปรแกรมบัญชีรายรับ รายจ่าย</h1>;

function App() {
  const design = {color: "red",textAligh:"center",fontSize: '1.5rem'}
  const [items,setItems] = useState([]) //ค่าเริ่มต้นตาม initData ตามอาเรนั้นๆเพื่อให้บันทึก newItem id:,title:,amount:
  const onAddNewItem = (newItem) => {
    setItems((prevItem) => {
      return [newItem, ...prevItem]
      })
  }
  return ( 
    <DataContext.Provider value={
      {
        income: 50000,
        expense:8000
      }
    }>  {/*เป็นข้อมูลกลางที่สามารถดึงไปใช้ได้กัน*/}
      <div className='container'>
        <Title/>
        <ReportComponent/>
        <FormComponent onAddItem = {onAddNewItem}/> {/*สร้างฟังก์ชั่นเพื่อรอรับค้าที่จะส่งมาจาก FromComponent.js*/}
        <Transaction items = {items}/>
      </div> {/*ถ้าไม่มี div หรือ root elementที่มาครอบ ส่วน html ที่แทรกใน retune จะเออเร่อ จะใช้ section/article ก็ได้หรือตัวไหนก็ได้ได้หมด <> ก็ได้*/}
    </DataContext.Provider>
     
  );
}

export default App;
