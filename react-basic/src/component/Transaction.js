import { Item,Item2 } from "./Item";
import "../style/Transaction.css"
const Transaction =()=>{
    return (  
        <ul className="item-list">
            <Item/>
            <Item2/>
            <Item/>
        </ul>
    );
  }

export default Transaction; //export เพื่อเอาออกไปใช้งานหน้าอื่นๆ