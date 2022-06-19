let users= JSON.parse(localStorage.users)





export function addTutorial(name,category,videoLink, difficulty, description, flower,ex1,ex2,ex3){
    let tutorials = JSON.parse(localStorage.tutorials)
    
    let search = tutorials.find(tutorial => tutorial.name == name)
    let id=0
    if(JSON.parse(localStorage.tutorials)){
        id= tutorials[tutorials.length-1].id + 1
    }
    if (search == name){
        throw Error ("ERROR")
    }else{ 
        tutorials.push(new Tutorial(name,id,category,videoLink,difficulty,description,flower,ex1,ex2,ex3))
        localStorage.setItem("tutorials", JSON.stringify(tutorials));
    /* } */

}
}



//class do tutorial
export default class Tutorial{
    name=""
    id = 0
    category = ""
    videolink = ""
    difficulty = ""
    description = ""
    reward = false
    likes = 0
    comments = []
    ex1=""
    ex2=""
    ex3=""

    constructor(name,id ,category, videolink, difficulty, description, reward,ex1,ex2,ex3){
        this.name=name
        this.id = id
        this.category = category
        this.videolink = videolink
        this.difficulty= difficulty
        this.description = description
        this.reward = reward
        this.ex1=ex1
        this.ex2=ex2
        this.ex3=ex3
    }

    
}