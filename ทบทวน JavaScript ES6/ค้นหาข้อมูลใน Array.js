//ค้นหาข้อมูลใน Array
//indexOf(ข้อมูล) => ผลการค้นหาจะได้ตำแหน่ง Index ที่ค้นเจอถ้าค้นไม่เจอจะ -1
//find(ข้อมูล) => ผลการค้นหาจะได้ข้อมูลที่ค้นเจอ ถ้าค้นไม่เจอจะ undefined
//findIndex(ข้อมูล) => ผลการค้นหาจะได้ตำแหน่ง Index ที่ค้นเจอถ้าค้นไม่เจอจะ -1


// indexOf(ข้อมูล) =>
// const colors = ["แดง","เขียว","น้ำเงิน","ม่วง","ขาว"]
// console.log(colors.indexOf("แดง"))

// const index = colors.indexOf("แดง")
// console.log(index)


//find(ข้อมูล) =>
// const colors = ["แดง","เขียว","น้ำเงิน","ม่วง","ขาว"]
// const search = colors.find(element=>element==="เขียว")
// console.log(search);


//findIndex(ข้อมูล) =>
const colors = ["แดง","เขียว","น้ำเงิน","ม่วง","ขาว"]
const search = colors.findIndex(element=>element==="เขียว")
console.log(search);