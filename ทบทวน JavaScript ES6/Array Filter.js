//Array Filter (การกำหนดเงื่อนไขและคัดกรอง)
//การคัดกรองสมาชิกในอาเรตามเงื่อนไขที่เรากำหนดขึ้นมา
// const data = [10,20,30,40]

// // const result = data.filter(e=>{
// //     return e>20
// // })
// const result = data.filter(e=>e>20) 

// console.log(result);

//เก็บข้อมูลแบบobject ชื่อพนักงาน

const employees = [
    {name: 'John', age: 30,salary:250000, department: 'IT'},
    {name: 'Alice', age: 25,salary:50000, department: 'HR'},
    {name: 'Bob', age: 35,salary:200000, department: 'Finance'},
    {name: 'Emily', age: 28,salary:250000, department: 'IT'}
]

// const result = employees.filter(e=>{
//     return e.salary>=200000
// })
const result = employees.filter(e=>e.salary>=200000).filter(e=>e.department==="IT")
console.log(result);