import { Item,Item2 } from "./Item";
import "../style/Transaction.css"
const Transaction =()=>{
    return (  
        <ul className="item-list">
            <Item title="ค่าข้าว" amount="70"/>
            <Item title="ค่ารถ" amount="15"/>
            <Item title="ค่าเสื้อผ้า" amount="1500"/>
            <Item2/>
        </ul>
    );
  }

export default Transaction; //export เพื่อเอาออกไปใช้งานหน้าอื่นๆ