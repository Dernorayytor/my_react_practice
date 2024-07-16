const FormComponent =()=>{
    return(
        <div>
            <form> //form ใช้ในการสร้างกล่อง form กล่องข้อความเพื่อกรอกข้อมูล
                <ฟdiv className="form-control">
                    <label>ชื่อรายการ</label>
                    <input type="text" placeholder="ระบุชื่อรายการของคุณ"/> //กำหนดไทป์ให้รับค่าในฟอร์มแค่ข้อความ
                </ฟdiv>
                <div className="form-control">
                    <label>จำนวนเงิน</label>
                    <input type="number" placeholder="ระบุจำนวนเงิน"/> //ตัวเลข
                </div>
                <div>
                    <button type="submit">เพิ่มข้อมูลนี้</button> //การสร้างปุ่มเพื่อให้กดซับมิดได้
                </div>
            </form>
        </div>
    )

}
export default FormComponent