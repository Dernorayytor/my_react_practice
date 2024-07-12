//Array Map
//เป็นการเอาสมาชิกค่าในอาเรมาแมพค่า เปลี่ยนแปลงค่าแล้วก็สร้างเป็นอาเรก้อนใหม่ออกมาใช้งาน

//ข้อมูลที่เป็นตัวเลข
// const numbers = [1, 2, 3, 4, 5];
// const doubledNumbers = numbers.map(number =>{ 
//    const a = number * 2
//    return a
// });
// const doubled = numbers.map(number =>number * 2) 
// console.log(`numbers = ${numbers}`);
// console.log(`doubledNumbers = ${doubledNumbers}`);
// console.log(`numbers = ${doubled}`);

//ข้อมูลที่เป็นข้อความmapสภาพอากาศในแต่ละวันได้
const data = ["ฝนตก","แดดร้อน","ฝนฟ้าคะนอง","แดดร้อน","ฝนตก","อากาศดี","หมอก"]
const result = data.map((e,i)=>{
    return `วันที่ ${i+1}, สภาพอากาศ = ${e}`
})

console.log(result)

// ข้อมูลที่เป็น object
const datao =[
    {day:"01/06/2564",weather:"แดดร้อน",temp:27},
    {day:"03/06/2564",weather:"ฝนตก",temp:20},
    {day:"05/06/2564",weather:"หิมะตก",temp:-22}
]

const resulto = datao.map(e=>e.weather)
console.log(resulto);
