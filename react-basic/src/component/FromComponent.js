import "../style/FormComponent.css"

const FormComponent =()=>{
    const inputTitle = (event)=>{
        console.log(event.target.value) //หยุดการรีเฟรชหน้า เพราะปกติถ้าไม่ใส่เมื่อsubmidจะทำให้ต้องเริ่มต้นหน้าใหม่หรือคอยรีเฟชรตลอด*/
    }
    const inputAmount = (event)=>{
        console.log(event.target.value)
    }
    const saveItem = (event)=>{
        event.preventDefault() 
        console.log("บันทึกข้อมูลเรียบร้อยแล้ว") 
    } 
    return(
        <div>
            <form onSubmit={saveItem}> {/*form ใช้ในการสร้างกล่อง form กล่องข้อความเพื่อกรอกข้อมูล*/}
                <div className="form-control">
                    <label>ชื่อรายการ</label>
                    <input type="text" placeholder="ระบุชื่อรายการของคุณ" onChange={inputTitle}/> {/*กำหนดไทป์ให้รับค่าในฟอร์มแค่ข้อความ*/} {/*onChange ใช้จับเหตุการณ์เมื่อมีการเปลี่ยนแปลงค่าใน input field*/}
                </div>
                <div className="form-control">
                    <label>จำนวนเงิน</label>
                    <input type="number" placeholder="ระบุจำนวนเงิน +รายรับ -รายจ่าย" onChange={inputAmount}/> {/*ตัวเลข*/}
                </div>
                <div>
                    <button type="submit" className="btn" >เพิ่มข้อมูลนี้</button> {/*การสร้างปุ่มเพื่อให้กดซับมิดได้*/}
                </div>
            </form>
        </div>
    )

}
export default FormComponent