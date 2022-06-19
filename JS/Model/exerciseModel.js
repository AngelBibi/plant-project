let exs;

//ir buscar a info do ex
export function init(){
    exercises = localStorage.exercise ? JSON.parse(localStorage.exercise) : []
}

export default class Exercise{
    ID = 0
    question = ""
    answers = []
    correctAns = ""
    positions = []
    xp = 0
    type=0
    lessonID=0

    constructor(ID,question,answers,type,correctAns,lessonID){
        this.ID = ID
        this.question = question
        this.answers = answers
        this.type=type
        this.correctAns = correctAns
        this.lessonID = lessonID
        
        
    }
}

let a = Exercise(1,2,[3,3,3,3],1,4)

a.positions = 10
