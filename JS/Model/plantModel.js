

export function addPlant(name, category,difficulty,description,image){
    let plants = JSON.parse(localStorage.plants)
    let search = plants.find(plant => plant.name == name)
    let id = 0
    if (JSON.parse(localStorage.plants)){
        id = plants[plants.length-1].id + 1
    }
    
    if (search == name){
        throw Error ("ERROR")
    }else {
        plants.push(new Plant(name,id,category,difficulty,description,image))
        localStorage.setItem("plants", JSON.stringify(plants))
        console.log(plants);
    }
}







export default class Plant{
    name=""
    id=0
    category=""
    difficulty=""
    description=""
    image=""
    

    constructor(name,id,category,difficulty,description,image){
        this.name=name
        this.id=id
        this.category=category
        this.difficulty=difficulty
        this.description=description
        this.image=image
    }
}