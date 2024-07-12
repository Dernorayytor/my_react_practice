//Array Reduce
//อยู่ในหมวดหมู่เดียวกันกับพวกอาเรแมพอาเรฟิลเตอร์


// const data =[10,20,30,40]

// // const mapData = data.map(e=>100)
// // console.log(mapData);
// const summation = data.reduce((value,e)=>e+value,0)
// console.log(summation);
//มีสมาชิกอาเรเท่าต้นแบบตัวที่เราแมพค่า

//หาผลรวมสินค้า

const products = [
  { id: 1, name: 'Product A', price: 100 },
  { id: 2, name: 'Product B', price: 200 },
  { id: 3, name: 'Product C', price: 300 },
];

const sum = products.reduce((value,e)=>{
    const total = e.price+value
    return total
},0)

console.log(sum);