//Space Operator
// ใช้ในการกระจายสมาชิกใน array โดยใช้เครื่องหมาย ... ใส่หน้า array

const newAr =[100,200,300]
const data = [10,20,...newAr]

const color =["เขียว","น้ำเงิน","ขาว"]
const allcolor =["แดง","เหลือง",...color]
const newcolor =["ดำ","เทา"]
allcolor.push(...newcolor)
console.log(data,allcolor)