currentUser=JSON.parse(localStorage.currentUser);

if(currentUser.image == undefined){
    currentUser.image ="../MEDIA/IMG/user.svg"   
}
if(currentUser.description == undefined){
    currentUser.description = "No description given."
}

document.querySelector("#userimage").src=`${currentUser.image}`
document.querySelector("#userDescription").innerHTML=`${currentUser.description}`
document.querySelector("#userCountry").innerHTML = `${currentUser.country}` 
document.querySelector("#userPoints").innerHTML=`${currentUser.points}`
document.querySelector("#userName").innerHTML=`${currentUser.firstName} ${currentUser.lastName}`


if(currentUser.points >= 1000){
    document.querySelector("#userAchievements").innerHTML += `<div class="ach"><img src="../MEDIA/IMG/trophy.svg"><p class="trophydesc">Reach 1000 points</p></img></div>
    `

}

if(currentUser.points >0){
    document.querySelector("#userAchievements").innerHTML += `<div class="ach"><img src="../MEDIA/IMG/trophy.svg"><p class="trophydesc">Congratulations! 1st Exercise completed</p></img></div>`
}