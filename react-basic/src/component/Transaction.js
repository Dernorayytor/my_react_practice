import { Item,Item2 } from "./Item";
import "../style/Transaction.css"
import DataContext from "../data/DataContext";

const Transaction =(props)=>{
    const {items} = props 
   
    return (  
        <div>
            <DataContext.Consumer>
               {value=><p>{value}</p>}  
            </DataContext.Consumer>
            
            <ul className="item-list">
            {/* แบบloopไม่ต้องมาคอยกำหนดเวลาเพิ่มข้อมูล*/}
            {items.map((element)=>{
                return <Item {...element} key={element.id}/> //แบบใช้Spread Operator ในการลดรูป
                
                // <Item title={element.title} amount={element.amount}/> //แบบปกติ
})} 

            {/* <Item title={data[0].title} amount={data[0].amount}/>
            <Item title={data[1].title} amount={data[1].amount}/>
            <Item title={data[2].title} amount={data[2].amount}/>
            <Item2/> //แบบไม่loop */} 
            </ul>
            
        </div>
    );
  }

export default Transaction; //export เพื่อเอาออกไปใช้งานหน้าอื่นๆ