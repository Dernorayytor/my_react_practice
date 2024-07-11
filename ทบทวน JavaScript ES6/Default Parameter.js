// Default Parameter 
// การกำหนดค่าเริ่มต้นให้กับพารามิตเตอร์ที่อยู่ในฟังชั่นของเรา

getDataCustomer =(customername,customeraddress="ไม่ระบุที่อยู่")=>{ //customeraddress="ไม่ระบุที่อยู่" is Default Parameter
    // if(!customeraddress){
    //     customeraddress = "ไม่ระบุที่อยู่"
    // }
    const adress = `ชื่อลูกค้า : ${customername}
    ที่อยู่ : ${customeraddress}`
    return adress
}

console.log(getDataCustomer("ภัทราวดี","ชลบุรี"));
console.log(getDataCustomer("muwahahaha"));
