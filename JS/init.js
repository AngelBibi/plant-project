initdata();

function initdata(){
    
    if (!localStorage.users){
        let users = [
            {
                username:`joao_2003`,
                password:`pass`,
                email:`joao@gmail.com`,
                firstName:`João`,
                lastName:`Pais`,
                image:`https://mundoconectado.com.br/uploads/chamadas/rickastley.jpg`,
                country:`Portugal`,
                type:`user`,
                points:0,
                block:false,

                
            },
            {
                username:`xxx_alves_xxx`,
                password:`passalves`,
                email:`alves@gmail.com`,
                firstName:`Eduardo`,
                lastName:`Alves`,
                image:`https://volsiz.ru/wp-content/uploads/2022/03/what-are-rare-stones-used-for-in-kirby-and-the-forgotten-land_623e26a77697a.jpeg`,
                country:`Portugal`,
                type:`user`,
                points:0,
                block: true,
            }
        ];
        localStorage.setItem('users', JSON.stringify(users));
    }


    if (!localStorage.admins) {
        let admins = [
            {
                username:`gaspar_2003`,
                password:`passgaspar`,
                email:`gaspar@gmail.com`,
                firstName:`Gaspar`,
                lastName:`Vieira`,
                image:`https://mundoconectado.com.br/uploads/chamadas/rickastley.jpg`,
                country:`Portugal`,
                type:`admin`,
                points:0,
                block: false,
            },
            
            {

                username:`jonas`,
                password:`passjonas`,
                email:`pais@gmail.com`,
                firstName:`João`,
                lastName:`Pais`,
                image:`https://mundoconectado.com.br/uploads/chamadas/rickastley.jpg`,
                country:`Portugal`,
                type:`admin`,
                points:0,
                block: false,
            },
        ];
        localStorage.setItem("admins", JSON.stringify(admins))
        }


     /*    if (!localStorage.exercises) {
            let exercises = [
                {
                    ID:1,
                    question:`What type of plant is this?`,
                    answers:["plant1","plant2","plant3","plant4"],
                    type:1,
                    correctAns:0,
                    lesosonID:1
                },
                
                {
                    ID:2,
                    question:`What type of plant is this? 2`,
                    answers:["plant1","plant2","plant3","plant4"],
                    type:1,
                    correctAns:0,
                    lessonID:1
                    
                },
            ];
            exercises[0].correctAns=exercises[0].answers[0]
            exercises[1].correctAns=exercises[1].answers[1]
            localStorage.setItem("exercises", JSON.stringify(exercises))
            } */

        if(!localStorage.tutorials){
            let tutorials= [
                {
                    name:"Rose",
                    id:1,
                    category:"Azul",
                    videolink:"/MEDIA/VIDEOS/timHenson.mp4",
                    difficulty:"Easy",
                    description:"sssssssssssss",
                    reward:false,
                    likes:0,
                    exercises:[]
                },

                {
                    name:"Tree",
                    id:2,
                    category:"Vermelho",
                    videolink:"/MEDIA/VIDEOS/timHenson.mp4",
                    difficulty:"Hard",
                    description:"SSSSS",
                    reward:false,
                    likes:10,
                    exercises:[]
                }
            ];
            localStorage.setItem("tutorials",JSON.stringify(tutorials))
        }  
        
        if(!localStorage.categories){
            let categories =[
                {
                    name:"Azul",
                    id:1,  
                },
                {
                    name:"Vermelho",
                    id:2,
                }
            ];
            localStorage.setItem("categories", JSON.stringify(categories))
        }


        if(!localStorage.plants){
            let plants= [
                {
                    name:"Orchid",
                    id:1,
                    category:"Azul",
                    difficulty:"Easy",
                    description:"Orchids are easily distinguished from other plants, as they share some very evident derived characteristics or synapomorphies. Among these are: bilateral symmetry of the flower (zygomorphism), many resupinate flowers, a nearly always highly modified petal (labellum), fused stamens and carpels, and extremely small seeds.",
                    img:"/MEDIA/IMG/orchid.jpg"
                },

                {
                    name:"Rose",
                    id:2,
                    category:"Vermelho",
                    difficulty:"Hard",
                    description:"The name rose comes from Latin rosa, which was perhaps borrowed from Oscan, from Greek ῥόδον rhódon (Aeolic βρόδον wródon), itself borrowed from Old Persian wrd- (wurdi), related to Avestan varəδa, Sogdian ward, Parthian wâr.",
                    img:"/MEDIA/IMG/rose.jpg"
                }
            ];
            localStorage.setItem("plants", JSON.stringify(plants))
        }

        if(!localStorage.blocked){
            let blocked= [];
            localStorage.setItem("blocked", JSON.stringify(blocked))
        }
}