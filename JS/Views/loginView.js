import * as User from "../Model/userModel.js"

let users=JSON.parse(localStorage.users)

document.querySelector("#login").addEventListener("click",() => {
    event.preventDefault();
     
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
