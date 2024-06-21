const questions = [
    {
        'que': 'Which of the following is a markup language?',
        'a': 'HTML',
        'b': 'CSS',
        'c': 'JS',
        'd': 'PHP',
        'correct': 'a',
    },
    {
        'que': 'What year was javascript launched?',
        'a': '1996',
        'b': '1995',
        'c': '1994',
        'd': 'None of the above',
        'correct': 'b',
    },
    {
        'que': 'What does CSS stands for?',
        'a': 'Hypertext markup language',
        'b': 'Cascading style sheet',
        'c': 'Js Object Notation',
        'd': 'None eof the above',
        'correct': 'b',
    }
]

let index = 0;
let total = questions.length;
let right = 0, wrong = 0;
const quesBox = document.getElementById("quesBox");
const optionsInput = document.querySelectorAll(".options");

const loadQuestions = () => {
    if(index == total){
        return endQuiz();
    }
    reset();
    const data = questions[index];
    quesBox.innerText = `${index + 1}) ${data.que}`;
    optionsInput[0].nextElementSibling.innerText = data.a;
    optionsInput[1].nextElementSibling.innerText = data.b;
    optionsInput[2].nextElementSibling.innerText = data.c;
    optionsInput[3].nextElementSibling.innerText = data.d;
}

const submitQuiz = () => {
    let ans = getAns();
    reset();
    const data = questions[index];
    if(ans == data.correct){
        right++;
    }else{
        wrong++;
    }
    index++;
    loadQuestions();
    return;
}

const getAns = () => {
    let answer;
    optionsInput.forEach((input) => {
        if(input.checked){
            answer = input.value;
        }
    });
    return answer;
}

const reset = () => {
    optionsInput.forEach((input) => {
        if(input.checked){
            input.checked = false;
        }
    })
}

const endQuiz = () => {
    document.getElementById("box").innerHTML = `
    <h3> Thank you for playing the quiz </h3>
    <h2>${right} / ${total}</h2>
    `
}


// initial load
loadQuestions();