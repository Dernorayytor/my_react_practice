//Rest Parameter
//จะคล้ายกับ Space Operator เลยใช้ ...
//แต่ว่าใช้ส่งค่าพารามิตเตอร์เข้าไปในฟังค์ชั่นโดยไม่จำกัดจำนวนครั้ง หาผลรวมของตัวเลข

// summation=(a, b)=>{
//     return a+b
// }
// summation=(a, b,c)=>{
//     return a+b+c
// }
// console.log(summation(50,100)) //NaN เพราะหาค่าหลายอันไม่ได้ถ้าหาค่าหลายอันต้องใช้ Rest Parameter
// console.log(summation(50,100,1000)) 

//Rest Parameter
summation=(...numberAr)=>{
    let total=0
    for(let number of numberAr) total+=number 
    return total
}
console.log(summation(50,100,1000,20000));
console.log(summation(500,100,2000)); //สามารถบวกตัวเลขกี่จำนวนก็ได้
