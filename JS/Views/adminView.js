import * as Plant from "../Model/plantModel.js";
import * as Tutorial from "../Model/tutorialModel.js";

let users = JSON.parse(localStorage.users);
let tutorials = JSON.parse(localStorage.tutorials);
let categories = JSON.parse(localStorage.categories);
let plants = JSON.parse(localStorage.plants);
let blocked= JSON.parse(localStorage.blocked)



/* EVENT LISTENER PARA BOTAO USERS */
document.getElementById("users").addEventListener("click", () =>{
    document.getElementById(
        `change`
      ).innerHTML = `<div class="table-responsive-md">
                              <table id="tableChange" class="table table-striped mt-5">
                                  <thead class="table-dark">
                                      <tr>
                                          <th>Username</th>
                                          <th>First Name</th>
                                          <th>Last Name</th>
                                          <th>Email</th>
                                          <th>Points</th>
                                          <th>Actions</th>
                                      </tr>
                                  </thead>
                                  
                              </table>
                              </div>`;
    
    for (let i = 0; i < users.length; i++) {
        console.log(users[i].points);
        document.getElementById(
            `tableChange`
        ).innerHTML += `<table><tbody><tr><td>${users[i].username}</td>
                                                <td>${users[i].firstName}</td>
                                                <td>${users[i].lastName}</td>
                                                <td>${users[i].email}</td>
                                                <td>${users[i].points}</td>
                                                <td>
                                                    <div class="changeIcon">
                                                        <img id="${users[i].username}" class="click actions" width="30px" height="30px" src="/MEDIA/IMG/plus.svg"></img>
                                            
                                                        <img id="blockUser" class="block" width="30px" height="30px" src="/MEDIA/IMG/blockWhite.svg"></img>
                                                        <img id="removeUser" class="delete" width="30px" height="30px" src="/MEDIA/IMG/trash.svg"></img>
                                                    </div>
        
        
        
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>`;
    }
    document.querySelectorAll(".click").forEach(btn => {
        btn.addEventListener("click", iconAdmin);
    })
    
    document.querySelectorAll(".block").forEach((btn) => {
        btn.addEventListener("click", iconAdmin2);
    });
      
    document.querySelectorAll(".delete").forEach((btn) => {
        btn.addEventListener("click", iconAdmin3);
    }); 
})

/* EVENT LISTENER PARA O BOTAO DE TUTORIALS */
document.getElementById("tutorials").addEventListener("click", () => {
    tutorials = JSON.parse(localStorage.tutorials);
    categories = JSON.parse(localStorage.categories)
       

    document.getElementById(
        `change`
    ).innerHTML = `<button type="button" class="btn btn-success mt-5" data-bs-toggle="modal" data-bs-target="#addTutorial">Add Tutorial</button>
                        <div class="table-responsive-md">
                            <table id="tableChange" class="table table-striped mt-3">
                                
                                
                            </table>
                        </div>`;

    document.querySelector(".form-select").innerHTML = 0; 
    for (let i = 0; i < categories.length; i++) {

        document.querySelector(".form-select").innerHTML += `
          
          <option value="${categories[i].name}">${categories[i].name}</option>`; 
    }
    
    document.getElementById("tableChange").innerHTML = ``;
    document.getElementById(
        "tableChange"
    ).innerHTML = `<thead class="table-dark">
                        <tr><th>Name</th><th>ID</th><th>Categories</th>
                            <th>Video</th>
                            <th>Dificulty</th>
                            <th>Description</th>
                            <th>Rewards</th>
                            <th>Likes</th>
                            <th>Exercises</th>
                            <th>Actions</th>

                        </tr>
                    </thead>`;
    console.log(tutorials.length);
    for (let i = 0; i < tutorials.length; i++) {
        document.getElementById(
        `tableChange`
        ).innerHTML += `<table> <tbody>  <tr>  <td>${tutorials[i].name}</td>
                                            <td>${tutorials[i].id}</td>
                                            <td>${tutorials[i].category}</td>
                                            <td>${tutorials[i].videolink}</td>
                                            <td>${tutorials[i].difficulty}</td>
                                            <td>${tutorials[i].description}</td>
                                            <td>${tutorials[i].reward}</td>
                                            <td>${tutorials[i].likes}</td>
                                            <td>${tutorials[i].exercises}</td>
                                            <td>
                                                <div class="changeIcon">
                                                    
                                                    <img class="delete removeTutorial" width="30px" height="30px" src="/MEDIA/IMG/trash.svg"></img>
                                                </div>
    
    
    
                                            </td>
                                        </tr>
                                </tbody>
                        </table>`;
  }
  document.querySelectorAll(".removeTutorial").forEach(btn =>{
    console.log('yau')
    btn.addEventListener("click", deleteTutorial)
})
})

/* EVENT LISTERNER PARA O BOTAO CATEGORIAS */
document.getElementById("categories").addEventListener("click", () =>{
    categories = JSON.parse(localStorage.categories);


    document.getElementById(
        `change`
    ).innerHTML = `<button type="button" class="btn btn-success mt-5" data-bs-toggle="modal" data-bs-target="#addCategory">Add Category</button>
                        <div class="table-responsive-md">
                            <table id="tableChange" class="table table-striped mt-3">
                                
                                
                            </table>
                        </div>`;
    document.getElementById("tableChange").innerHTML = ``;
    document.getElementById(
        "tableChange"
    ).innerHTML = `<thead class="table-dark">
                    <tr><th>Category</th>
                    <th>Actions</th>

                    </tr>
                    </thead>`;
    for (let i = 0; i < categories.length; i++) {
        document.getElementById(
        `tableChange`
        ).innerHTML += `<table><tbody><tr><td>${categories[i].name}</td>
                                            
                                            <td>
                                                <div class="changeIcon">
                                                    
                                                    <img id="removeCat" class="deleteCat" width="30px" height="30px" src="/MEDIA/IMG/trash.svg"></img>
                                                </div>



                                            </td>
                                        </tr>
                                    </tbody>
                                </table>`;    

}
document.querySelectorAll(".deleteCat").forEach(btn =>{
    btn.addEventListener("click", deleteCategory)
})
})


/* EVENT LISTENER PARA O BOTAO PLANTS */

document.getElementById("plants").addEventListener("click",() =>{
    plants= JSON.parse(localStorage.plants);
    categories = JSON.parse(localStorage.categories);

    document.getElementById(
        "change"
    ).innerHTML = `<button type="button" class="btn btn-success mt-5" data-bs-toggle="modal" data-bs-target="#addPlant">Add Plant</button>
            <div class="table-responsive-md">
                                  <table id="tableChange" class="table table-striped mt-3">
                                  
                                      
                                    </table>
                                    </div>`;

    document.getElementById("plantCategory").innerHTML = 0;
    for (let i = 0; i < categories.length; i++) {

        document.getElementById("plantCategory").innerHTML += `
            
        <option value="${categories[i].name}">${categories[i].name}</option>`;
    }                                
    document.getElementById("tableChange").innerHTML = ``;
    document.getElementById(
        "tableChange"
    ).innerHTML = `<thead class="table-dark">
                    <tr><th>Name</th>
                    <th>ID</th>
                    <th>Category</th>
                    <th>Difficulty</th>
                    <th>Description</th>
                    <th>Image</th>
                    <th>Actions</th>

                    </tr>
                    </thead>`;
    for (let i = 0; i < plants.length; i++) {
        document.getElementById(
        `tableChange`
        ).innerHTML += `<table><tbody><tr><td>${plants[i].name}</td>
                                            <td>${plants[i].id}</td>
                                            <td>${plants[i].category}</td>
                                            <td>${plants[i].difficulty}</td>
                                            <td>${plants[i].description.substr(0,30)}...</td>
                                            <td>${plants[i].img}</td>
                                            
                                            <td>
                                                <div class="changeIcon">
                                                    
                                                    <img id="removePlant" class="click removePlant" width="30px" height="30px" src="/MEDIA/IMG/trash.svg"></img>
                                                </div>



                                            </td>
                                        </tr>
                                    </tbody>
                                </table>`;
    }
    document.querySelectorAll(".removePlant").forEach(btn => {
        btn.addEventListener("click",removePlant);
    })


})



























/* EVENT LISTENERS */


document.getElementById("createTutorial").addEventListener("click", () => {
    let name = document.getElementById("tutorialName").value;
    let id
    let category = document.getElementById("tutorialCategory").value;
    let videoLink = document.getElementById("videoLink").value;
    let difficulty = document.getElementById("difficulty").value;
    let description = document.getElementById("description").value;
    let flower = document.getElementById("flowerSubmit").value;
    let ex1 = document.getElementById("exercise1").value;
    let ex2 = document.getElementById("exercise2").value;
    let ex3 = document.getElementById("exercise3").value;
    
    /* try{ */
    Tutorial.addTutorial(
      name,
      id,
      category,
      videoLink,
      difficulty,
      description,
      flower,
      ex1,
      ex2,
      ex3
    );
    /* } /* catch(error){
    alert(error.message)
  } */
    refreshTutorials();
});

document.getElementById("submitCategory").addEventListener("click", () => {
    
    let categories = JSON.parse(localStorage.categories);
    categories.push({
      name: document.getElementById(`insertCategory`).value,
      id: categories[categories.length-1].id+1,
    });
    localStorage.setItem("categories", JSON.stringify(categories));
    refreshCategories();
});


document.getElementById("createPlant").addEventListener("click",() =>{
    let name= document.getElementById("addName").value
    let id
    let category=document.getElementById("plantCategory").value 
    let difficulty = document.getElementById("addDifficulty").value 
    let description =document.getElementById("addDescription").value   
    let image= document.getElementById("addImage").value
    Plant.addPlant(name,category, difficulty, description, image)

    console.log('yau')
    refreshPlants()
})



/* FUNCTIONS */


/* FUNÇAO PARA DAR ADMIN A USER */
function iconAdmin() {
    if (this.className == "click actions") {
        this.src = `/MEDIA/IMG/removeAdmin.svg`;
        this.className = "clickoff actions";
        this.parentNode.parentNode.parentNode.parentNode.className = "bg-success";
        console.log(this.parentNode.parentNode.parentNode.parentNode.className)
        let admins = JSON.parse(localStorage.admins),
        newUsers = [];
        users.forEach((user) => {
            if (user.username == this.id) admins.push(user);
            else newUsers.push(user);
        });
         
        users = newUsers; 
        localStorage.setItem("admins", JSON.stringify(admins));
        localStorage.setItem("users", JSON.stringify(users));
    } else {
        this.src = `/MEDIA/IMG/plus.svg`;
        this.className = "click actions";
        this.parentNode.parentNode.parentNode.parentNode.className = "";
        let admins = JSON.parse(localStorage.admins),
        newAdmin = [];
        admins.forEach((admin) => {
          if (admin.username == this.id) users.push(admin);
          else newAdmin.push(admin);
        });
        admins= newAdmin;
        localStorage.setItem("admins", JSON.stringify(admins));
        localStorage.setItem("users", JSON.stringify(users));
    }
}





/* FUNÇAO PARA BLOQUEAR USERS */
function iconAdmin2(){

    if(blocked == JSON.parse(localStorage.blocked)) blocked = JSON.parse(localStorage.blocked)
    let updateBlocked=[]
    let users= JSON.parse(localStorage.users)
        
        
    if (this.className == "block") {
        this.src = "/MEDIA/IMG/blockBlack.svg";
        this.className = "block actions";
         this.parentNode.parentNode.parentNode.className = "bg-danger";
        
         users.forEach(user =>{
        
        
            if(this.parentNode.parentNode.parentNode.querySelector("td").innerHTML == user.username && !((blocked.find( element => element == this.parentNode.parentNode.parentNode.querySelector("td").innerHTML) ) == user.username)){
                blocked.push(user.username)
              
            }
  
        })
          
          localStorage.setItem("blocked", JSON.stringify(blocked))
    } else {
        this.src = `/MEDIA/IMG/blockWhite.svg`;
        this.className = "block";
        this.parentNode.parentNode.parentNode.className = "";
        let quem = this.parentNode.parentNode.parentNode.querySelector("td").innerHTML
        blocked.forEach(user =>{
        
            if(user != quem) {
              updateBlocked.push(user)
            }
          })
          blocked = updateBlocked
          localStorage.setItem("blocked", JSON.stringify(blocked))
        }

}


/* FUNÇAO QUE REMOVE USER */
function iconAdmin3(){
    // VÊ o user que quer apagar a partir do nome na tabela
    let deleteUser = this.parentNode.parentNode.parentNode.firstChild.innerText;

    // Vê as listas da localStorage
    let usersList = JSON.parse(localStorage.users);
    let adminsList = JSON.parse(localStorage.admins);

    // A nova lista que vai ser adicionada ao localStorage
    let attList = [];

    // Verifica se o user que vai ser apagado está na lista de user, caso n esteja tem de estar na lista de admin
    if (usersList.find((user) => user.username == deleteUser)) {
        // O for da lista de user q vai dar push apenas aos user apenas se tiver o nome diferente do q foi deletado
        usersList.forEach((user) => {
        if (user.username != deleteUser) attList.push(user);
        });

        // Adiciona a nova lista
        localStorage.setItem("users", JSON.stringify(attList));

        // Verificado anteriormente, se n estava em user, vai estar em admin (por logica (eu espero '-.-))
    } else {
        // Mesma coisas q aconteceram no user, só q dessa vez para o admin
        adminsList.forEach((admin) => {
        if (admin.username != deleteUser) attList.push(admin);
        });
        localStorage.setItem("admins", JSON.stringify(attList));
    }

    //Deleta a linha da tabela
    this.parentNode.parentNode.parentNode.remove();
}



function deleteTutorial(){
    console.log(this)
    let deleteTutorial = this.parentNode.parentNode.parentNode.querySelector("td").innerText
    let tutorialsList = JSON.parse(localStorage.tutorials)



    let attTutorials=[];

    if(tutorialsList.find(tutorial => tutorial.name == deleteTutorial)){
        tutorialsList.forEach(tutorial =>{
            if(tutorial.name != deleteTutorial) attTutorials.push(tutorial)
        })
        localStorage.setItem('tutorials', JSON.stringify(attTutorials))
    }
    this.parentNode.parentNode.parentNode.remove();
}

function refreshTutorials(){
    tutorials= JSON.parse(localStorage.tutorials)


    document.getElementById(
        `change`
    ).innerHTML = `<button type="button" class="btn btn-success mt-5" data-bs-toggle="modal" data-bs-target="#addTutorial">Add Tutorial</button>
                        <div class="table-responsive-md">
                            <table id="tableChange" class="table table-striped mt-3">
                                
                                
                            </table>
                        </div>`;

    document.getElementById("tableChange").innerHTML = ``;
    document.getElementById(
                            "tableChange"
    ).innerHTML = `<thead class="table-dark">
                                            <tr><th>Name</th><th>ID</th><th>Categories</th>
                                                <th>Video</th>
                                                <th>Dificulty</th>
                                                <th>Description</th>
                                                <th>Rewards</th>
                                                <th>Likes</th>
                                                <th>Exercises</th>
                                                <th>Actions</th>
                    
                                            </tr>
                                        </thead>`;   
    for (let i = 0; i < tutorials.length; i++) {
        document.getElementById(
        `tableChange`
        ).innerHTML += `<table> <tbody>  <tr>  <td>${tutorials[i].name}</td>
                                            <td>${tutorials[i].id}</td>
                                            <td>${tutorials[i].category}</td>
                                            <td>${tutorials[i].videolink}</td>
                                            <td>${tutorials[i].difficulty}</td>
                                            <td>${tutorials[i].description}</td>
                                            <td>${tutorials[i].reward}</td>
                                            <td>${tutorials[i].likes}</td>
                                            <td>${tutorials[i].exercises}</td>
                                            <td>
                                                <div class="changeIcon">
                                                    
                                                    <img class="delete removeTutorial" width="30px" height="30px" src="/MEDIA/IMG/trash.svg"></img>
                                                </div>
    
    
    
                                            </td>
                                        </tr>
                                </tbody>
                        </table>`;                                                         
 }
 document.querySelectorAll(".removeTutorial").forEach(btn =>{
    console.log('yau')
    btn.addEventListener("click", deleteTutorial)
})
}



function deleteCategory(){
    let deleteCategory = this.parentNode.parentNode.parentNode.firstChild.innerText

    let categoriesList = JSON.parse(localStorage.categories)


    let attCat=[];

    if(categoriesList.find(category => category.name == deleteCategory)){
        categoriesList.forEach(category =>{
            if(category.name != deleteCategory) attCat.push(category)
        })
        localStorage.setItem("categories", JSON.stringify(attCat))
    }
    this.parentNode.parentNode.parentNode.remove();
    /* refreshCategories() */
}



function refreshCategories(){
    categories= JSON.parse(localStorage.categories)

    document.getElementById(
        `change`
    ).innerHTML = `<button type="button" class="btn btn-success mt-5" data-bs-toggle="modal" data-bs-target="#addTutorial">Add Tutorial</button>
                        <div class="table-responsive-md">
                            <table id="tableChange" class="table table-striped mt-3">
                                
                                
                            </table>
                        </div>`;
                        document.getElementById("tableChange").innerHTML = ``;
    document.getElementById(
        "tableChange"
    ).innerHTML = `<thead class="table-dark">
                    <tr><th>Category</th>
                    <th>Actions</th>

                    </tr>
                    </thead>`;
    for (let i = 0; i < categories.length; i++) {
        document.getElementById(
        `tableChange`
        ).innerHTML += `<table><tbody><tr><td>${categories[i].name}</td>
                                            
                                            <td>
                                                <div class="changeIcon">
                                                    
                                                    <img id="removeCat" class="deleteCat" width="30px" height="30px" src="/MEDIA/IMG/trash.svg"></img>
                                                </div>



                                            </td>
                                        </tr>
                                    </tbody>
                                </table>`;

    }
    document.querySelectorAll(".deleteCat").forEach(btn =>{
    btn.addEventListener("click", deleteCategory)
    })
}



function removePlant(){
    plants= JSON.parse(localStorage.plants);
    let deletePlant = this.parentNode.parentNode.parentNode.querySelector("td").innerText
    console.log(this.parentNode.parentNode.parentNode.querySelector("td").innerText)
    let attPlants= [];

    if(plants.find(plant => plant.name == deletePlant)){
        plants.forEach(plant =>{
            if(plant.name!=deletePlant) attPlants.push(plant)
        })
        localStorage.setItem("plants", JSON.stringify(attPlants))
    }
    this.parentNode.parentNode.parentNode.remove();
}


function refreshPlants(){
    plants= JSON.parse(localStorage.plants)
    console.log(plants)
    
    document.getElementById(
        "change"
    ).innerHTML = `<button type="button" class="btn btn-success mt-5" data-bs-toggle="modal" data-bs-target="#addPlant">Add Plant</button>
            <div class="table-responsive-md">
                                  <table id="tableChange" class="table table-striped mt-3">
                                  
                                      
                                    </table>
                                    </div>`;
    document.getElementById("tableChange").innerHTML = ``;
    document.getElementById(
        "tableChange"
    ).innerHTML = `<thead class="table-dark">
                    <tr><th>Name</th>
                    <th>ID</th>
                    <th>Category</th>
                    <th>Difficulty</th>
                    <th>Description</th>
                    <th>Image</th>
                    <th>Actions</th>

                    </tr>
                    </thead>`;
    for (let i = 0; i < plants.length; i++) {
        document.getElementById(
        `tableChange`
        ).innerHTML += `<tr><td>${plants[i].name}</td>
                                            <td>${plants[i].id}</td>
                                            <td>${plants[i].category}</td>
                                            <td>${plants[i].difficulty}</td>
                                            <td>${plants[i].description.substr(0,30)}...</td>
                                            <td>${plants[i].img}</td>
                                            
                                            <td>
                                                <div class="changeIcon">
                                                    
                                                    <img id="removePlant" class="click removePlant" width="30px" height="30px" src="/MEDIA/IMG/trash.svg"></img>
                                                </div>



                                            </td>
                                        </tr>`;

}}