const quizData = [
    {
        question:'What is my name?',
        a:'Rupesh',
        b:'Rahul',
        c:'Ayush',
        d:'Anurag',
        correct:'a'
    },
    {
        question:'What is my age?',
        a:'22',
        b:'21',
        c:'23',
        d:'24',
        correct:'21'
    },
    {
        question:'who is the Prime minister of India?',
        a:'Rupesh',
        b:'modi',
        c:'modi-sarkar',
        d:'baigan',
        correct:'d'
    },
    {
        question:'Aree prabhan mantri ka namm?',
        a:'lalu Yadav',
        b:'baigan',
        c:'nitish',
        d:'relando',
        correct:'relando'
    }



];

const questionEl = document.getElementById("question");

const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');


let currentQuiz = 0;


loadQuiz();

function loadQuiz(){

    

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;

    
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

    

}

submitBtn.addEventListener('click',()=>{
    currentQuiz++;
    loadQuiz();
});







    


