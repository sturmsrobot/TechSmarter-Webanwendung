const progressBar = document.querySelector(".progress-bar"),
  progressText = document.querySelector(".progress-text");

const progress = (value) => {
  const percentage = (value / time) * 100;
  progressBar.style.width = `${percentage}%`;
  progressText.innerHTML = `${value}`;
};

const startBtn = document.querySelector(".start"),
  numQuestions = document.querySelector("#numquestions"),
  category = document.querySelector("#category"),
  difficulty = document.querySelector("#difficulty"),
  timePerQuestion = document.querySelector("#time"),
  quiz = document.querySelector(".quiz"),
  startScreen = document.querySelector(".start-screen");
// progress(1);

let questions = [],
  time = 30,
  score = 0,
  currentQuestion,
  timer;

const startQuiz = () => {
  const num = numQuestions.value,
    cat = category.value,
    diff = difficulty.value;
  //api
  const url = `https://opentdb.com/api.php?amount=${num}&category=${cat}&difficulty=${diff}&type=multiple`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      questions = data.results;
      startScreen.classList.add("hide");
      quiz.classList.remove("hide");
      currentQuestion = 1;
      showQuestion(questions[0]);
    });
};

startBtn.addEventListener("click", startQuiz);
const submitBtn = document.querySelector(".submit");
const nextBtn = document.querySelector(".next");

const showQuestion = (question) => {
  const questionText = document.querySelector(".question");
  const answersWrapper = document.querySelector(".answer-wrapper");
  const questionNumber = document.querySelector(".number");

  questionText.innerHTML = question.question;

  const answers = [
    ...question.incorrect_answers,
    question.correct_answer.toString(),
  ];
  answersWrapper.innerHTML = "";
  answers.sort(() => Math.random() - 0.5);
  answers.forEach((answer) => {
    answersWrapper.innerHTML += `
                  <div class="answer ">
            <span class="text">${answer}</span>
            <span class="checkbox">
              <i class="fas fa-check"></i>
            </span>
          </div>
        `;
  });

  questionNumber.innerHTML = `
Frage <span class="current">${
    questions.indexOf(question) + 1
  }</span><span class="total">/${questions.lenght}</span>
`;

  const answersDiv = document.querySelectorAll(".answer");
  answersDiv.forEach((answer) => {
    answer.addEventListener("click", () => {
      if (!answer.classList.contains("checked")) {
        answersDiv.forEach((answer) => {
          answer.classList.remove("selected");
        });
        answer.classList.add("selected");
        submitBtn.disabled = false;
      }
    });
  });

  time = timePerQuestion.value;
  startTimer(time);
};

const startTimer = (time) => {
  timer = setInterval(() => {
    if (time === 3) {
      // playAdudio("countdown.mp3");
    }
    if (time >= 0) {
      progress(time);
      time--;
    } else {
      checkAnswer();
    }
  }, 1000);
};

submitBtn.addEventListener("click", () => {
  checkAnswer();
});

const checkAnswer = () => {
  clearInterval(timer);

  const selectedAnswer = document.querySelector(".answer.selected");

  if (selectedAnswer) {
    const answer = selectedAnswer.querySelector(".text");
    if(answer === question[currentQuestion -1].correct_answer) {
      score++;
      selectedAnswer.classList.add("corret");
    } else{
      const correctAnswer = document.querySelector(".answer").forEach((answer)=>{
        if(answer.q)
      })
    }
  }
};
