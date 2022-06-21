let users= JSON.parse(localStorage.users)





export function addTutorial(name,category,levelId,videoLink, difficulty, description,tutorialImage){
    let tutorials = JSON.parse(localStorage.tutorials)
    
    let search = tutorials.find(tutorial => tutorial.name == name)
    let id=0
    if(JSON.parse(localStorage.tutorials)){
        id= tutorials[tutorials.length-1].id + 1
    }
    if (search == name){
        throw Error ("ERROR")
    }else{ 
        tutorials.push(new Tutorial(name,id,category,levelId,videoLink,difficulty,description,tutorialImage))
        localStorage.setItem("tutorials", JSON.stringify(tutorials));
    /* } */

}
}



//class do tutorial
export default class Tutorial{
    name=""
    id = 0
    levelId=0
    category = ""
    videolink = ""
    difficulty = ""
    description = ""
    likes = 0
    comments = []
    tutorialImage = ""
    


    constructor(name,id ,category, levelId,videolink, difficulty, description, tutorialImage ){
        this.name=name
        this.id = id
        this.category = category
        this.levelId = levelId
        this.videolink = videolink
        this.difficulty= difficulty
        this.description = description
        this.tutorialImage=tutorialImage
        

    }

    
}