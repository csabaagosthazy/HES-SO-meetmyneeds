import react from 'react';

/*
    weight: essential = 1, important = 2, a bit important = 3
*/
const answers = [{
    question_id:1, 
    question:"Actually I need info about diagnostics",
    answer_id: 3,
    label:"a bit important",
    technicalKey: "medium"

}, 

{
    question_id: 2, 
    question:"Why?",
    answer_id : 1, 
    label : "essential", 
    weight: 1, 
    technicalKey: "essential"
}, 

{
    question_id: 3, 
    question:"Who?",
    answer_id : 1, 
    label : "essential", 
    technicalKey: "essential"
}
]

const Result = (props) =>{

    const json_toStr = JSON.stringify(answers);
    const obj = JSON.parse(json_toStr);

    console.log("Here",obj[0].label);

    let essential = new Set(); 
    let important = new Set(); 
    let less_important = new Set();

    obj.forEach(element => {
        if(element.technicalKey === "essential"){
            essential.add(element.question_id, element.question)
        }
    });

    console.log("Essentials", essential)

    //create empty dict or set ???
    /*const labels = [...new Set(obj.map(item => item.label))];
    console.log("Groupped", labels)*/

   /* labels.forEach(element => {
        const  = newSet();
    })

    for (let i = 0; i < cars.length; i++) {
        text += cars[i] + "<br>";
      }*/
    //if answer_id is not in the dict, add it as a key => or answer_label as a key? 
    //if it exists, add question_id as a value
    //return answer_id - a list of question_id's 

    return(
        <div>
           {
                answers.map((answer,index) => {
                    return(
                        <div key={index}>
                            {answer.label}
                        </div>
                    );
                })
            }
        </div>
    );
}

export default Result; 