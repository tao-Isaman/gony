//import axios from "axios";
function getTotalLoan(){
    let loan ={ 
        totalDdebt:120000 ,
        totalPaidAmount:3000,
        totalRemainingAmount:120000
    }
    return loan ;
}

function getUserList(){
    let list = [
      {
        firstName: "somename",
        lastName: "somelast",
        nickName: "somenick",
        email: "test@gmail.com",
        phone: "0942257558",
        totalLone: 100000,
        paidAmount: 20000,
        remainingAmount: 80000
      },
      {
        firstName: "somename2",
        lastName: "somelast",
        nickName: "somenick",
        email: "test@gmail.com",
        phone: "0942257558",
        totalLone: 100000,
        paidAmount: 20000,
        remainingAmount: 80000
      },
      {
        firstName:"somename3",
        lastName:"somelast",
        nickName:"somenick",
        email:"test@gmail.com",
        phone:"0942257558",
        totalLone:100000,
        paidAmount:20000,
        remainingAmount:80000
        },
    ];

    return list;
}


export default{
    getTotalLoan,
    getUserList
}