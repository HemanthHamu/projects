const calculateAge = document.getElementById("calculateAge");
const dob = document.getElementById("DOB");
const result = document.getElementById("result");

function checkAge(){
    const yourdob = dob.value;
    if(yourdob===""){
        alert("Please enter your date of birth")
    }
    else{
        const age = findAge(yourdob);
        result.innerText = `You are ${age} ${age>1 ? "years" : "year"}  old `
    }
}
function findAge(yourdob){
    const today = new Date();
    const mydob = new Date(yourdob)
    let age = today.getFullYear() - mydob.getFullYear();
    const month = today.getMonth() - mydob.getMonth();
    if(month < 0 || (month===0 && today.getDate() < mydob.getDate())){
        age--
    }
    return age
}
calculateAge.addEventListener("click",checkAge);