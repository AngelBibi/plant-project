let exercises = JSON.parse(localStorage.exercises)
let exerciseArray=[]    
let exercisesA = []    
let currentUser= JSON.parse(localStorage.currentUser)
let currentExercise= JSON.parse(localStorage.currentExercise)






if(currentExercise.rightAnswer){
    let answers=[currentExercise.wrongAnswer2,currentExercise.rightAnswer,currentExercise.wrongAnswer1,currentExercise.wrongAnswer3];
    answers=shuffle(answers)
    console.log(answers)
    document.querySelector(".exercise").innerHTML = `
    <div><h1>${currentExercise.question}</h1></div>
    <div><button class="answer">${answers[0]}</button>
    <button class="answer">${answers[1]}</button>
    <button class="answer">${answers[2]}</button>
    <button class="answer">${answers[3]}</button></div>
    `
    let userAnswer = document.querySelectorAll(".answer")
    
    userAnswer.forEach(answer =>{
        if(answer.innerText == currentExercise.rightAnswer){
            answer.addEventListener("click", () =>{
                alert("Resposta Certa")
            })
            if(count=0){
                currentUser.points +=500
                count +=1 
            }else{
                currentUser.points +=100
            }
        }else{
            answer.addEventListener("click", () =>{
                alert("Resposta Errada")
            })
        }
    })


}else{
    document.querySelector(".exercise").innerHTML = `
    
    <div><h1>${currentExercise.questionTF}</h1></div>
    <div><button class="answer">True</button>
    
    <button class="answer">False</button></div>
    
    `
    let userAnswer = document.querySelectorAll(".answer")
    userAnswer.forEach(answer =>{
        if(answer.innerText.toLowerCase() == currentExercise.rightAnswerTF.toLowerCase()){
            answer.addEventListener("click", () =>{
                alert("Resposta Certa")
            })

            if(count=0){
                currentUser.points +=500
                count +=1 
            }else{
                currentUser.points +=100
            }
        
        }else{
            answer.addEventListener("click", () =>{
                alert("Resposta Errada")
            })
        }
    })
}



function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
}