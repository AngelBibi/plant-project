import * as User from "../Model/userModel.js"

document.querySelector("#register").addEventListener("click",()=>{
    event.preventDefault();
    let email= document.querySelector("#email").value;
    let username= document.querySelector("#username").value;
    let firstName= document.querySelector("#firstName").value;
    let lastName=document.querySelector("#lastName").value;
    let country=document.querySelector("#country").value;
    let password= document.querySelector("#password").value;
    let confirmPassword= document.querySelector("#confirmPassword").value;
    
    try {
        console.log("prima")
        User.userAdd(username,password, email, firstName,lastName, country, confirmPassword);

    }catch(error){
        alert(error.message)
    }

})



document.querySelector("#login").addEventListener("click",()=>{
    window.location.href="HTML/login.html"

})









