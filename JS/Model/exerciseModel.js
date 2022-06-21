

export function addExercise(question,rightAnswer,wrongAnswer1,wrongAnswer2,wrongAnswer3,questionTF,rightAnswerTF) {
    let exercises=JSON.parse(localStorage.exercises);
    
    let id=0
    let lessonId=0
    
    


    id=exercises[exercises.length-1].id + 1
    lessonId=document.querySelector(".tutorialsChoose").value
    
    exercises.push(new Exercise(id,lessonId,question,rightAnswer,wrongAnswer1,wrongAnswer2,wrongAnswer3,questionTF,rightAnswerTF))
    localStorage.setItem("exercises", JSON.stringify(exercises))
    
}


export default class Exercise{
    id = 0
    lessonId=0
    question = ""
    questionTF=""
    rightAnswer
    rightAnswerTF
    wrongAnswer1
    wrongAnswer2
    wrongAnswer3
    


    constructor(id,lessonId,question,questionTF,rightAnswer,rightAnswerTF,wrongAnswer1,wrongAnswer2,wrongAnswer3) {
        this.id=id
        this.lessonId= lessonId
        this.question=question
        this.questionTF=questionTF
        this.rightAnswer=rightAnswer
        this.rightAnswerTF=rightAnswerTF
        this.wrongAnswer1=wrongAnswer1
        this.wrongAnswer2=wrongAnswer2
        this.wrongAnswer3=wrongAnswer3
        
    }
}

