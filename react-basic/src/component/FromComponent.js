import "../style/FormComponent.css"
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const FormComponent =(props)=>{
    const [title,setTitle]= useState('') //รับค่าเริ่มต้นของ stategrเพื่อโชว์ Stateอยู่เบื่องหลังภายใน hooks ในส่วน components
    const [amount,setAmount]= useState(0)
    
    const inputTitle = (event)=>{
        setTitle(event.target.value) //หยุดการรีเฟรชหน้า เพราะปกติถ้าไม่ใส่เมื่อsubmidจะทำให้ต้องเริ่มต้นหน้าใหม่หรือคอยรีเฟชรตลอด*/
    }
    const inputAmount = (event)=>{
        setAmount(event.target.value)
    }
    const saveItem = (event)=>{
        event.preventDefault() 
        const itemData = {
            id:uuidv4(),
            title:title,
            amount:Number(amount)
        }
        props.onAddItem(itemData)
        setTitle('') 
        setAmount(0) //เก็บข้อมูล title,amountไว้เบื้องหลังที่กำหนดให้หลังกดจะรีเซตค่ากลับมาเริ่มต้น
    } 
    return(
        <div>
            <form onSubmit={saveItem}> {/*form ใช้ในการสร้างกล่อง form กล่องข้อความเพื่อกรอกข้อมูล ถ้าไม่กดในส่วนbutton ก็จะไม่ส่งค่าไปถึงแม้จะมีข้อมูลอยู่ตรง state ก็ตาม*/}
                <div className="form-control">
                    <label>ชื่อรายการ</label>
                    <input type="text" placeholder="ระบุชื่อรายการของคุณ" onChange={inputTitle} value={title}/> {/*กำหนดไทป์ให้รับค่าในฟอร์มแค่ข้อความ*/} {/*onChange ใช้จับเหตุการณ์เมื่อมีการเปลี่ยนแปลงค่าใน input field*/}
                </div>
                <div className="form-control">
                    <label>จำนวนเงิน</label>
                    <input type="number" placeholder="ระบุจำนวนเงิน +รายรับ -รายจ่าย" onChange={inputAmount} value={amount}/> {/*ตัวเลข*/}
                </div>
                <div>
                    <button type="submit" className="btn" >เพิ่มข้อมูลนี้</button> {/*การสร้างปุ่มเพื่อให้กดซับมิดได้*/}
                </div>
            </form>
        </div>
    )

}
export default FormComponent