//การ Loop ข้อมูลใน Array 
//For Loop , ForEach , ForOf


//For Loop
// const data = [10,20,30,40,50]

// for(let i = 0; i<data.length;i++){
//     if (data[i]>=30) break
//     console.log(`ลำดับที่ ${i}= ${data[i]}`);
// }


// ForEach
// const data = [10,20,30,40,50]
// data.forEach(e => {
//     console.log(`สมาชิกในอาเรดาต้า = ${e}`); //console.log(element) or console.log(e) when e=>
// });

// const data = [10,20,30,40,50]
// let sum=0
// data.forEach(e=>{
//     sum+=e
//     console.log(`ผลรวม = ${sum}`);
// });


//ForOf
const data = [10,20,30,40,50]
for(const element of data){
    if(element>=30) break
    console.log(`สมาชิกอาเรดาต้า คือ ${element}`);
}
