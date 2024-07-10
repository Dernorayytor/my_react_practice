// ทำงานกับ Object
// ในปีกกากำหนด ค่าที่ต้องการเก็บ ชื่อกำหนดค่า properties
// const customer = {
//     customerName: "ชื่อลูกค้า",
//     age:20,
//     adress:"กรุงเทพ"
// }

// console.log(customer)

// หรือกำหนด
// ถ้าชื่อpropertiesกับตัวแปรเหมือนกันไม่ต้องกำหนดpropertiesก็ได้

// const customerName = "ภัทราวดี"
// const age = 21
// const adress = "กรุงเทพมหานคร"

// const customer = {
//     customerName,
//     age,
//     adress
//     }
// }

// console.log(customer);

//หรือใช้ metod showData
const customerName = "ภัทราวดี"
const age = 21
const adress = "กรุงเทพมหานคร"

const customer = {
    showData(){
        console.log("ข้อมูลลูกค้าชื่อว่า ="+customerName ,"อายุลูกค้า ="+age); 
    }
}

customer.showData()
