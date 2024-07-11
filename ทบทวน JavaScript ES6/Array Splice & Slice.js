//Array Splice & Slice 
//ลบข้อมูลหรือสมาชิกในอาเรแบบกำหนดที่กำหนดช่วง ช่วงไหนถึงไหน
// splice(ตำแหน่งที่จะลบ,จำนวนที่จะลบ,สมาชิกที่ต้องการเพิ่มหรือแทรกในตำแหน่งที่เราลบไป) 
// slice(ตำแหน่งที่เริ่มต้น,ตำแหน่งสุดท้าย-1)ดึงสมาชิกมาใช้งาน

// splice
const splicedata = [10,20,30,40,50]
splicedata.splice(1,3,999)
console.log(splicedata)

// slice
const slicedata = [10,20,30,40,50]
console.log(slicedata);

const lastdata = slicedata.slice(1,4)

console.log(lastdata)
