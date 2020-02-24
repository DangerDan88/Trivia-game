$(document).ready(function() {
  const myQuestions = [
    {
      question: "Which NBA franchise has the most championships?",
      answers: ["Lakers", "Jazz", "Celtics", "Wizards"],
      correctAnswer: "Celtics"
    },

    {
      question: "Who has scored the most points in a game in NBA history?",
      answers: [
        "Devin Booker",
        "Kobe Bryant",
        "Wilt Chamberlain",
        "Michael Jordan"
      ],
      correctAnswer: "Wilt Chamberlain"
    },

    {
      question: "What team did Magic Johnson play for?",
      answers: ["The Bucks", "The jazz", "The Lakers", "The suns"],
      correctAnswer: "The Lakers"
    },

    {
      question: "How many points is the most Kobe Bryant scored in a game?",
      answers: ["77", "65", "80", "81"],
      correctAnswer: "81"
    },
    //
    {
      question: "Who has the most rushing yards in a game in NFL history?",
      answers: [
        "Adrian Peterson",
        "Walter Payton",
        "Zeke Elliot",
        "Corey Dillon"
      ],
      correctAnswer: "Adrian Peterson"
    },

    {
      question: "Most passing yards in a season NFL history?",
      answers: ["Tom Brady", "Drew Brees", "Peyton Manning", "Kurt Warner"],
      correctAnswer: "Peyton Manning"
    },

    {
      question: "What team did Andrew Luck play for?",
      answers: ["The Colts", "The Ravens", "The Jets", "The Cardinals"],
      correctAnswer: "The Colts"
    },

    {
      question: "How many points is the most Kobe Bryant scored in a game?",
      answers: ["77", "65", "80", "81"],
      correctAnswer: "81"
    }
  ];
  // question list for game above
  let counter = 30;
  let currentQuestion = 0;
  let score = 0;
  let losses = 0;
  let timer = $("#timer");
  const button = document.querySelector(".toggle-button");
  const content = document.querySelector('.toggle-content');

button.addEventListener('click', () => {
  console.log("event listneer for button");
})


  function submitButton() {
    const showSubmitButton = document.getElementById("buttonDiv");
    if (showSubmitButton.style.display === "none") {
      showSubmitButton.style.display = "block";
    } else {
      showSubmitButton.style.display = "none";
    }
  }

  function makeQuiz() {
    document.getElementById("start").addEventListener("click", function() {
      function myTimer() {
        counter--;
        $("#timer").empty();
        $("#timer").text(counter);
        if (counter <= 0) {
          clearInterval(clock);
          alert("Times up");
        }
      }
      let clock = setInterval(myTimer, 1000);

      displayButton();
      myTimer();
      submitButton();
    });
  }
  makeQuiz();
  function displayButton() {
    $("#gameContainer").empty();
    let question = myQuestions[currentQuestion].question;
    $("#gameContainer").append("<div>" + question + "</div>");
    for (i = 0; i < myQuestions[currentQuestion].answers.length; i++) {
      $("#gameContainer").append(
        "<button id='answerButton'>" +
          myQuestions[currentQuestion].answers[i] +
          "</button>"
      );
    }
    currentQuestion++;
  }
  document
    .getElementById("gameContainer")
    .addEventListener("click", function(event) {
      if (event.target.id === "answerButton") {
        if (
          event.target.innerText ===
          myQuestions[currentQuestion - 1].correctAnswer
        ) {
          score++;
          if (currentQuestion < 9) {
            displayButton();
          }
        } else {
          losses++;
          if (currentQuestion < 9) {
            displayButton();
          }
        }
      }
    });
  document.getElementById("submit").addEventListener("click", function(event) {
    $("#results").text("This is how many you had right  " + score);
    $("#results").append("  This is how many you had wrong  " + losses);
  });
});
