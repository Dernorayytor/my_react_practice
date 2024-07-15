import { Item,Item2 } from "./Item";
import "../style/Transaction.css"
import { v4 as uuidv4 } from 'uuid';

const Transaction =()=>{
    const data =[
        {title:"ค่าอกไก่",amount:100},
        {title:"ค่าโปรตีน",amount:1500},
        {title:"ค่ารถ",amount:100}
    ]
    return (  
        <ul className="item-list">
            {/* แบบloopไม่ต้องมาคอยกำหนดเวลาเพิ่มข้อมูล*/}
            {data.map((element)=>{
                return <Item {...element} key={uuidv4()}/> //แบบใช้Spread Operator ในการลดรูป
                
                // <Item title={element.title} amount={element.amount}/> //แบบปกติ
})} 

            {/* <Item title={data[0].title} amount={data[0].amount}/>
            <Item title={data[1].title} amount={data[1].amount}/>
            <Item title={data[2].title} amount={data[2].amount}/>
            <Item2/> //แบบไม่loop */} 
        </ul>
    );
  }

export default Transaction; //export เพื่อเอาออกไปใช้งานหน้าอื่นๆ