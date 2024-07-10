//String
//นอกจากทำงานกับ objectได้แล้วยังทำกับ str ได้ด้วย

// multiline string ทำงานกับข้อความยาวๆ โดยขึ้นบรรทัดใหม่แล้วจะไม่มีข้อผิดพลาด โดยใช้ ` แบลคทิค
// interpolation ใช้แทรกตัวแปรลงใน string ได้โดยใช้ ${ชื่อตัวแปร}ร่วมกับ `

//multiline
// const address = `ชื่อลูกค้า : ภัทราวดี 
// ที่อยู่ 555/555 ถนนตลก อำเภอตลก จังหวัดตลก 
// เบอร์โทร 0001-111`
// console.log(address)  

//interpolation แทรกตัวแปรในชุดข้อความยาวๆ

let customerName = "เด็กชายไม่ตลก"
let tel = 55555555
const address = `ชื่อลูกค้า : ${customerName} 
ที่อยู่ 555/555 ถนนตลก อำเภอตลก จังหวัดตลก 
เบอร์โทร ${tel}`
console.log(address)  
