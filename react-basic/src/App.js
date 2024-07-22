import './style/App.css';
import React, { useEffect,useState ,useReducer} from 'react';
import Transaction from './component/Transaction';
import FormComponent from './component/FromComponent';
import DataContext from './data/DataContext';
import ReportComponent from './component/ReportComponent';
import { element } from 'prop-types';

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
  
  //reducer state
  const [count,setCount] = useState(0)
  const reducer = (state,action)=>{
        switch(action.type){
          case 'ADD' :
            return state+action.payload
          case 'SUB' :
            return state-action.payload
          case 'CLEAR' :
              return 0
        }
  }
  const [result,dispatch] = useReducer(reducer,count)
  return ( 
    // <DataContext.Provider value={
    //   {
    //     income: ReportIncome,
    //     expense:ReportExpense
    //   }
    // }>  {/*เป็นข้อมูลกลางที่สามารถดึงไปใช้ได้กัน*/}
    //   <div className='container'>
    //     <Title/>
    //     <ReportComponent/>
    //     <FormComponent onAddItem = {onAddNewItem}/> {/*สร้างฟังก์ชั่นเพื่อรอรับค้าที่จะส่งมาจาก FromComponent.js*/}
    //     <Transaction items = {items}/>
    //   </div> {/*ถ้าไม่มี div หรือ root elementที่มาครอบ ส่วน html ที่แทรกใน retune จะเออเร่อ จะใช้ section/article ก็ได้หรือตัวไหนก็ได้ได้หมด <> ก็ได้*/}
    // </DataContext.Provider>
     <div align = "center">
      <h1>{result}</h1>
      <button onClick={()=>dispatch({type:"ADD",payload:10})}>เพิ่ม</button>
      <button onClick={()=>dispatch({type:"SUB",payload:5})}>ลด</button>
      <button onClick={()=>dispatch({type:"CLEAR"})}>ล้าง</button>
     </div>
  );
}

export default App;
