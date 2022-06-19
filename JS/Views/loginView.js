import * as User from "../Model/userModel.js"

document.querySelector("#login").addEventListener("click",() => {
    event.preventDefault();
    console.log("yau")
    let username= document.querySelector("#username").value;
    let password= document.querySelector("#password").value;

    
    
    
    
    
    try{
        User.userLogin(username,password)
    }catch(error){
        alert(error.message)
    }
})


document.querySelector("#register").addEventListener("click",()=>{
    
    window.location.href="HTML/register.html"



})
