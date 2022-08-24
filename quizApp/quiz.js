//Question bank
var questionBank= [
    {
        question: 'Who was the first prime minister of the INDIA?',
        option: ['Atal Bihari', 'Indira Gandhi', 'Jawaharlal Nehru', 'Narendra Modi'],
        answer: 'Jawaharlal Nehru'
    },
    {
        question: 'How many Harry Potter books are there?',
        option: ['5', '6', '7', '8'],
        answer: '7'
    },
    {
        question: 'What is the boiling point temperature (water)?',
        option: ['50 °C', '100 °C', '150 °C', 'All of the above'],
        answer: '100 °C'
    },
    {
        question: 'Which fruit is associated with Isaac Newton?',
        option: ['Banana', 'Apple', 'Berry', 'Strawberry'],
        answer: 'Apple'
    },
    {
        question: 'Which building was not attacked on 9/11?',
        option: ['The Pentagon', 'Statue of Liberty', 'World Trade Center North Tower', 'World Trade Center South Tower'],
        answer: 'Statue of Liberty'
    }
]

var question= document.getElementById('question');
var quizContainer= document.getElementById('quiz-container');
var scorecard= document.getElementById('scorecard');
var option0= document.getElementById('option0');
var option1= document.getElementById('option1');
var option2= document.getElementById('option2');
var option3= document.getElementById('option3');
var next= document.querySelector('.next');
var points= document.getElementById('score');
var span= document.querySelectorAll('span');
var i=0;
var score= 0;

//function to display questions
function displayQuestion(){
    for(var a=0;a<span.length;a++){
        span[a].style.background='none';
    }
    question.innerHTML= 'Q.'+(i+1)+' '+questionBank[i].question;
    option0.innerHTML= questionBank[i].option[0];
    option1.innerHTML= questionBank[i].option[1];
    option2.innerHTML= questionBank[i].option[2];
    option3.innerHTML= questionBank[i].option[3];
    stat.innerHTML= "Question"+' '+(i+1)+' '+'of'+' '+questionBank.length;
}

//function to calculate scores
function calcScore(e){
    if(e.innerHTML===questionBank[i].answer && score<questionBank.length)
    {
        score= score+1;
        document.getElementById(e.id).style.background= 'limegreen';
    }
    else{
        document.getElementById(e.id).style.background= 'tomato';
        score = score - 1;
    }
    setTimeout(nextQuestion,300);
}

//function to display next question
function nextQuestion(){
    if(i<questionBank.length-1)
    {
        i=i+1;
        displayQuestion();
    }
    else{
        points.innerHTML= score+ '/'+ questionBank.length;
        quizContainer.style.display= 'none';
        scoreboard.style.display= 'block'
    }
}

//click events to next button
next.addEventListener('click',nextQuestion);

//Back to Quiz button event
function backToQuiz(){
    location.reload();
}

//function to check Answers
function checkAnswer(){
    var answerBank= document.getElementById('answerBank');
    var answers= document.getElementById('answers');
    answerBank.style.display= 'block';
    scoreboard.style.display= 'none';
    for(var a=0;a<questionBank.length;a++)
    {
        var list= document.createElement('li');
        list.innerHTML= questionBank[a].answer;
        answers.appendChild(list);
    }
}


displayQuestion();