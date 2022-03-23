import react from 'react';

/*
    weight: essential = 1, important = 2, a bit important = 3
*/
const answers = [{
    question_id:1, 
    question:"Actually I need info about diagnostics",
    answer_id: 3,
    label:"a bit important",
    technicalKey: "less_important"

}, 

{
    question_id: 2, 
    question:"Why?",
    answer_id : 1, 
    label : "essential", 
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

    //sets to store questions grouped by importance of need 
    let essential = new Set(); 
    let important = new Set(); 
    let less_important = new Set();
    let already_filled = new Set();

    //grouping by importance of need 
    obj.forEach(element => {
        if(element.technicalKey === "essential"){
            essential.add([element.question_id, element.question]);
        }else if(element.technicalKey === "important"){
            important.add([element.question_id, element.question])
        }else if(element.technicalKey === "less_important"){
            less_important.add([element.question_id, element.question])
        }else if(element.technicalKey === "already_filled"){
            already_filled.add([element.question_id, element.question])
        }
    });

    console.log("Essentials", essential);
    console.log("Important", important);
    console.log("Less important", less_important);
    console.log("Already filled", already_filled);

    //create empty dict or set ???
    /*const labels = [...new Set(obj.map(item => item.label))];
    console.log("Groupped", labels)*/

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