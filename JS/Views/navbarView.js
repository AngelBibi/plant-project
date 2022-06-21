let currentUser = JSON.parse(localStorage.currentUser)
let users= JSON.parse(localStorage.users)
let check= users.find(user => user.username == currentUser.username)
console.log(currentUser)
console.log(check)
if (check == undefined) {
    
    document.querySelector("#navv").innerHTML = `
    
    <div class="sticky-top nbar">
    <div class="container-fluid">
    <nav class="navbar navbar-expand-lg navbar-light container">
    <div class="container-fluid">
    <a class="navbar-brand" href="#">LOGO</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
    aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#">Tutorials</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#">Garden</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#">Reminder</a>
            </li>
            
            </ul>
            <div class="search-box">
            <button class="btn-search"><img width="90%" src="../MEDIA/IMG/search.svg" alt=""></button>
            <input type="text" class="input-search" placeholder="Type to Search...">
            </div>
            <div>
            <a class="navIcons" href="login.html">
            <img src="/MEDIA/IMG/user.svg" alt="User Icon">
            </a>
            </div>
            
            <div>
            </nav>
            </div>
            </div>
            `
}else{
    document.querySelector("#navv").innerHTML= `

    <div class="sticky-top nbar">
    <div class="container-fluid">
    <nav class="navbar navbar-expand-lg navbar-light container">
    <div class="container-fluid">
    <a class="navbar-brand" href="#">LOGO</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
    aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#">Tutorials</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#">Garden</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#">Reminder</a>
            </li>
            
            </ul>
            <div class="search-box">
            <button class="btn-search"><img width="90%" src="../MEDIA/IMG/search.svg" alt=""></button>
            <input type="text" class="input-search" placeholder="Type to Search...">
            </div>
            <div>
            <a class="navIcons" href="">
            <img src="${check.image}" alt="User Icon">
            </a>
            </div>
            
            <div>
            </nav>
            </div>
            </div>
    `

}