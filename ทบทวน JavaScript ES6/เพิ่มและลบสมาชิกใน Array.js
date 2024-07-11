//เพิ่มและลบสมาชิกใน Array
//push , pop ด้านหลัง 
// shift , unshift ด้านหน้า
// ฟังชั่นทำงานในอาเร


//push ใส่เข้าไป
const data =[10,20,30]
// console.log(data)// [10, 20, 30]

// data.push(500)
// console.log(data) // [10, 20, 30, 500]

data.push(...[500,1000,2000])
console.log(data)

//pop ลบสมาชิกหลังสุด
data.pop()
data.pop()
data.shift()
data.unshift(999)
console.log(data)