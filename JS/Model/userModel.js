let users= JSON.parse(localStorage.users)
let admins = JSON.parse(localStorage.admins)





export function userAdd(username,password, email, firstName,lastName, country,confirmPassword){
    
    let search= users.find(user => user.username == username)
    if (search == username){
        throw Error("ERROR")
    }else {
        
        if(password != confirmPassword){
            throw Error("Passwords don't match")
        }
        users.push(new User(username, password, email, firstName, lastName, country));
        localStorage.setItem("users", JSON.stringify(users));
        
        
        
    }


    

}


export function userLogin(username,password){
    
    let search= users.find(user => user.username == username && user.password == password);
    

    localStorage.setItem("currentUser", JSON.stringify(search))
    
    if (search.block){
        alert("Vc está bloqueado")
        return
    }
    if(search != undefined){

        sessionStorage.setItem("currentUser", JSON.stringify(search))
    }

    let searchAdmin= admins.find(admin => admin.username == username && admin.password ==password);
    if(searchAdmin != undefined){
        window.location.href="admin.html"
        sessionStorage.setItem("currentUser", JSON.stringify(searchAdmin))
    }
    
    


}






export default class User {
    username="";
    password="";
    email="";
    /* garden=""; */
    firstName="";
    lastName="";
    image="";
    
 /*    currentProgress=0;
    description="";
    collections=[]; */
    country="";
    /* achievements=[]
    badges=[];
    searches=[];
    reminders=[]; */
    type="";
    points=0;
    block = false
   /*  favorites=[]; */


    constructor(username, password, email, firstName, lastName, image,country,type,points=0){
    this.username=username;
    this.password=password;
    this.email=email;
    this.firstName=firstName;
    this.lastName=lastName;
    this.image=image;
    
    this.country=country;
    this.type=type;
    this.points=points;
    
    
    
    
}




}