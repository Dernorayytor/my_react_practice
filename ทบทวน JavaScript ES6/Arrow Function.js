// Arrow Function
// เป็นรูปแบบการเขียนประกาศฟังชั่นที่กระชับมากยิ่งขึ้น
// Arrow ก็จะเป็นรูปแบบลูกศร

// // แบบเดิม
// function fullname(fname,lname) {
//     return fname + lname
// }

// console.log(fullname("a","b"));

// แบบ Arrow Function ถ้าคำสั่งไม่เยอะไม่ต้องใส่ปีกกาก็ได้returnก็เหมือนกัน
fullname=(fname,lname)=>fname+lname
setage=(age)=>"อายุ ="+age

console.log(fullname("a","b"));
console.log(setage(30));
