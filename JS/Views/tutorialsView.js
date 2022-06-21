let levels= JSON.parse(localStorage.levels);
let tutorials= JSON.parse(localStorage.tutorials)
let exercises= JSON.parse(localStorage.exercises)


console.log(levels)
levels.forEach(level =>{
    document.querySelector(".tutorials").innerHTML += ` 
    
    <div class="accordion" id="accordionExample">
    <div class="accordion-item">
    <h2 class="accordion-header" id="${level.id}">
      <button class="accordion-button collapsed type="button" data-bs-toggle="collapse" data-bs-target="#level${level.id}" aria-expanded="false" aria-controls="level${level.id}">
        Level ${level.id} - ${level.name}
      </button>
    </h2>
    <div id="level${level.id}" class="accordion-collapse collapse" aria-labelledby="${level.id}" data-bs-parent="#level${level.id}">
      <div class="accordion-body">
        <strong id="ttt${level.id}"></strong>
      </div>
    </div>
  </div>
    
     ` 
    tutorials.forEach(tutorial => {
      if(tutorial.levelId == level.id){
        document.querySelector(`#ttt${level.id}`).innerHTML += `<a href="tutorial.html" class="tutorial" id="${tutorial.id}"> I am tutorial ${tutorial.id}</a>`
        exercises.forEach(exercise =>{
          if(exercise.lessonId == tutorial.id){
            document.querySelector(`#ttt${level.id}`).innerHTML += `<a href="../HTML/exercise.html" class="exercise" id="${exercise.id}"> I am exercise ${exercise.id}</a>`
          }
        })
      }
    
    }) 
     
    

})

document.querySelectorAll(`.tutorial`).forEach(tutorial =>{
    tutorial.addEventListener("click", ()=> {
        let currentTutorial= tutorials.find(searchTutorial => searchTutorial.id == document.getElementById(`${tutorial.id}`).id)
            localStorage.setItem("currentTutorial", JSON.stringify(currentTutorial)) 

    })
})

document.querySelectorAll(".exercise").forEach(exercise =>{
    exercise.addEventListener("click", () =>{
    let currentExercise = exercises.find(searchExercise => searchExercise.id == document.getElementById(`${exercise.id}`).id)
    localStorage.setItem("currentExercise", JSON.stringify(currentExercise))
    })
})