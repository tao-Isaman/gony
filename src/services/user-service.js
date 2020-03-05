import axios from "../plugins/axios";
function getTotalLoan(){
   return axios.get("/finacials");
}

function getUserList(){

    return axios.get("/users");
}


export default{
    getTotalLoan,
    getUserList
}