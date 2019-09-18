$(document).ready(function () {
    var myQuestions = [
        {
            question: "Which NBA franchise has the most championships?",
            answers: [
                "Lakers",
                "Jazz",
                "Celtics",
                "Wizards",

            ],
            correctAnswer: "Celtics"
        },

        {
            question: "Who has scored the most points in a game in NBA history?",
            answers: [
                "Devin Booker",
                "Kobe Bryant",
                "Wilt Chamberlain",
                "Michael Jordan",

            ],
            correctAnswer: "Wilt Chamberlain"
        },

        {
            question: "What team did Magic Johnson play for?",
            answers: [
                "The Bucks",
                "The jazz",
                "The Lakers",
                "The suns",

            ],
            correctAnswer: "The Lakers"
        },

        {
            question: "How many points is the most Kobe Bryant scored in a game?",
            answers: [
                "77",
                "65",
                "80",
                "81",


            ],
            correctAnswer: "81"
        }



    ]
    var counter = 35;
    var currentQuestion = 0;
    var score = 0;
    var losses = 0;
    var timer;





    function makeQuiz() {
        document.getElementById("start").addEventListener("click", function () {



          

            displayButton();
            

        })



    }
    makeQuiz();
    function displayButton() {
    
        
        $("#timer").append(counter);
        $("#gameContainer").empty();
        var question = myQuestions[currentQuestion].question;
        $("#gameContainer").append("<div>" + question + "</div>");
        for (i = 0; i < myQuestions[currentQuestion].answers.length; i++) {
            
                $("#gameContainer").append("<button id='answerButton'>"+ myQuestions[currentQuestion].answers[i] + "</button>");
            }
            currentQuestion++;
    }
    document.getElementById("gameContainer").addEventListener("click", function (event) {
        if(event.target.id === "answerButton") {
            if (event.target.innerText === myQuestions[currentQuestion-1].correctAnswer) {
                score++;
                if (currentQuestion < 4){
                displayButton();
                }
            } 
            else {
                losses++;
                if(currentQuestion < 4) {

                
                displayButton();
                }
            }      
        } 
           
  

    })

})

