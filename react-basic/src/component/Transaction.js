import { Item,Item2 } from "./Item";
import "../style/Transaction.css"
const Transaction =()=>{
    const data =[
        {title:"ค่าอกไก่",amount:100},
        {title:"ค่าโปรตีน",amount:1500},
        {title:"ค่ารถ",amount:100}
    ]
    return (  
        <ul className="item-list">
            <Item title={data[0].title} amount={data[0].amount}/>
            <Item title={data[1].title} amount={data[1].amount}/>
            <Item title={data[2].title} amount={data[2].amount}/>
            <Item2/>
        </ul>
    );
  }

export default Transaction; //export เพื่อเอาออกไปใช้งานหน้าอื่นๆ