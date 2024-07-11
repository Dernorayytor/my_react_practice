//Destructuring 
//การสลายโครงสร้าง ที่กำหนดค่าที่อยู่ภายใน array หรือ object ให้กับตัวแปร
// โดยใช้วิธีการจับคู่ตัวแปรกับค่าในอาเรหรือobjectเช่น

// const colors = ["เขียว","แดง","เหลือง"]
// const green = colors[0]
// const red = colors[1]
// const yellow = colors[2]
// console.log(green, red, yellow)

// const colors = ["เขียว","แดง","เหลือง"]
// const [green,red,yellow] = colors
// console.log(green, red, yellow)

//การทำกับ object

const product ={
    productname : "computer",
    price : 5000,
    color : "blue",
    stock : 10
}

const { productname:productname, price: price, color:color,stock:stock } = product //ชื่อproperty:ชื่อตัวแปร

console.log(productname, price, color, stock)