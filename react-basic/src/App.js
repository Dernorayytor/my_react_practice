import './style/App.css';
import React, { useEffect } from 'react';
import Transaction from './component/Transaction';
import FormComponent from './component/FromComponent';
import { useState } from 'react';
import DataContext from './data/DataContext';
import ReportComponent from './component/ReportComponent';
import { element } from 'prop-types';

const Title =()=><h1>โปรแกรมบัญชีรายรับ รายจ่าย</h1>;

function App() {
  const design = {color: "red",textAligh:"center",fontSize: '1.5rem'}
  
  const initState = [
    {id:1,title:"ค่าเช่ารถ",amount:-2000},
    {id:1,title:"ค่าน้ำมัน",amount:-500},
    {id:1,title:"ค่าไก่ไม้",amount:-20},
    {id:1,title:"ขายส้มตำ",amount:2000},
  ]

  const [items,setItems] = useState(initState) //ค่าเริ่มต้นตาม initData ตามอาเรนั้นๆเพื่อให้บันทึก newItem id:,title:,amount:
  
  const [ReportIncome,setReportIncome] = useState(0)
  const [ReportExpense,setReportExpense] = useState(0)
  const onAddNewItem = (newItem) => {
    setItems((prevItem) => {
      return [newItem, ...prevItem]
      })
  }
  useEffect(()=>{
    const amounts = items.map(items => items.amount)
    const income = amounts.filter(element=>element>0).reduce((total,element)=>total+=element,0)
    const expense = amounts.filter(element=>element<0).reduce((total,element)=>total-=element,0)
    console.log('ยอดรายได้',income)
    console.log('ยอดจ่ายได้',expense)
  },[items])
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
