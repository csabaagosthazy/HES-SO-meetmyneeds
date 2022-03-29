const answers = [{
    question_id: 1,
    question: "Actually I need info about diagnostics",
    answer_id: 3,
    label: "A bit important",
    technicalKey: "less_important"

},

    {
        question_id: 2,
        question: "Why?",
        answer_id: 1,
        label: "Essential",
        technicalKey: "essential"
    },

    {
        question_id: 3,
        question: "Who?",
        answer_id: 1,
        label: "Essential",
        technicalKey: "essential"
    },
    {
        question_id: 4,
        question: "This is a test?",
        answer_id: 2,
        label: "Important",
        technicalKey: "important"
    }
]

const Result = (props) => {

    const json_toStr = JSON.stringify(answers);
    const obj = JSON.parse(json_toStr);

    //sets to store questions grouped by importance of need 
    let essential = new Set();
    let important = new Set();
    let less_important = new Set();
    let already_filled = new Set();

    //grouping by importance of need 
    obj.forEach(element => {
        if (element.technicalKey === "essential") {
            essential.add([element.question_id, element.question]);
        } else if (element.technicalKey === "important") {
            important.add([element.question_id, element.question])
        } else if (element.technicalKey === "less_important") {
            less_important.add([element.question_id, element.question])
        } else if (element.technicalKey === "already_filled") {
            already_filled.add([element.question_id, element.question])
        }
    });

    //create a set of labels
    var labels = new Map();
    obj.map(item => labels.set(item.technicalKey, item.label));

    //function that displays questions in set under the certain label
    const displayQuestions = (questionSet, labelSet, label_tag) => {
        let questions_render = [...questionSet].map((item) => {return(<p key={item[0]}>{item[1]}</p>)});
        questions_render.unshift(<h3 key={label_tag}>{labelSet.get(label_tag)}</h3>); //prepending label 
        return questions_render;
    }

    return (
        <div> 
            {
                essential.size !== 0 ? displayQuestions(essential, labels, "essential") : ""

            }
                
            {
                important.size !== 0 ? displayQuestions(important, labels, "important") : ""

            }

            {
                less_important.size !== 0 ? displayQuestions(less_important, labels, "less_important") : ""

            }

            {
                already_filled.size !== 0 ? displayQuestions(already_filled, labels, "already_filled") : ""

            }
        </div>
    );
};

export default Result; 