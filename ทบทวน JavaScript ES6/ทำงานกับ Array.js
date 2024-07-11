//ทำงานกับ Array
// join แปลงอาเรชุดนั้นๆให้เป็นstrแปลงแล้วเก็บใส่ตัวแปรหรือแปลงแล้วแสดงผลได้เลยโดยไม่กระทบกับอาเรเดิม
// concat รวมอาเรสองชุดมาต่อกัน

// join
const data =[100,200,300]
console.log(data)

// เก็บผลลัพธ์จากการแปลงอาเรชุดนั้นๆให้เป็นstr
const result = data.join() // join .join("ตัวที่เราอยากให้ขั้นด้วย")
console.log(result)//หรือ
console.log(data.join())

// concat
const data1 = [100,200,300]
const data2 = [400,500]

const alldata = data1.concat(data2)
console.log(alldata)