import './style/App.css';
import React, { useEffect,useState} from 'react';
import Transaction from './component/Transaction';
import FormComponent from './component/FromComponent';
import DataContext from './data/DataContext';
import ReportComponent from './component/ReportComponent';
import { element } from 'prop-types';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom"
const Title =()=><h1>โปรแกรมบัญชีรายรับ รายจ่าย</h1>;

function App() {
  const design = {color: "red",textAligh:"center",fontSize: '1.5rem'}
  

  const [items,setItems] = useState([]) //ค่าเริ่มต้นตาม initData ตามอาเรนั้นๆเพื่อให้บันทึก newItem id:,title:,amount:
  
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
    setReportExpense(expense)
    setReportIncome(income)
  },[items,ReportIncome,ReportExpense]) //ทุกครั้งที่ items มีการเปลี่ยนแปลงให้ทำงานใน useEffect ด้านล่า��
  
  
  return ( 
    <DataContext.Provider value={{income: ReportIncome,expense:ReportExpense}}>  {/*เป็นข้อมูลกลางที่สามารถดึงไปใช้ได้กัน*/}
      <div className='container'>
        <Title/>
        <Router>
        <div>
            <div>
              <ul className='holizontal-menu'>
                <li>
                  <Link to="">ข้อมูลบัญชี</Link>
                </li>
                <li>
                  <Link to="">บันทึกข้อมูลบัญชี</Link>
                </li>
              </ul>
            </div>
        </div>
        </Router>
        <ReportComponent/>
        <FormComponent onAddItem = {onAddNewItem}/> {/*สร้างฟังก์ชั่นเพื่อรอรับค้าที่จะส่งมาจาก FromComponent.js*/}
        <Transaction items = {items}/>
      </div> {/*ถ้าไม่มี div หรือ root elementที่มาครอบ ส่วน html ที่แทรกใน retune จะเออเร่อ จะใช้ section/article ก็ได้หรือตัวไหนก็ได้ได้หมด <> ก็ได้*/}
    </DataContext.Provider>
  
      
  );
}

export default App;
