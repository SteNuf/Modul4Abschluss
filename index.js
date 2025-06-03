//// TODO 10: Fragen Struktur:
const questions = [
  {
    id: 1,
    question: "Was ist die Hauptstadt von Deutschland?",
    answers: [
      {
        id: "a",
        text: "München",
        correct: false,
      },
      {
        id: "b",
        text: "Berlin",
        correct: true,
      },
      {
        id: "c",
        text: "Hamburg",
        correct: false,
      },
      {
        id: "d",
        text: "Hannover",
        correct: false,
      },
    ],
  },
  {
    id: 2,
    question: "Was ist die Hauptstadt von Frankreich?",
    answers: [
      {
        id: "a",
        text: "Paris",
        correct: true,
      },
      {
        id: "b",
        text: "Marseille",
        correct: false,
      },
      {
        id: "c",
        text: "Lyon",
        correct: false,
      },
      {
        id: "d",
        text: "Bordeaux",
        correct: false,
      },
    ],
  },
];

let currentQuestion;
let currentQuestionPointer = -1;

// TODO 11: Frage Rendern;

function renderQuestion(question) {
  const questionDiv = document.createElement("div");
  questionDiv.id = question.id;
  questionDiv.classList.add("full-container");

  const questionTitle = document.createElement("div");
  questionTitle.classList.add("title");

  questionTitle.appendChild(document.createTextNode(question.question));

  const questionAnswer = document.createElement("div");
  questionAnswer.classList.add("total-answer-container");

  question.answers.forEach((answer) => {
    const answerDiv = document.createElement("button");
    answerDiv.id = answer.id;
    answerDiv.setAttribute("onclick", `validate('${answer.id}')`);
    answerDiv.classList.add("answer");
    answerDiv.appendChild(document.createTextNode(answer.text));
    questionAnswer.appendChild(answerDiv);
  });

  questionDiv.appendChild(questionTitle);
  questionDiv.appendChild(questionAnswer);

  document
    .getElementById("display-question-container")
    .appendChild(questionDiv);
}

//TODO 12: "Next"Logik
function nextQuestion() {
  if (currentQuestion) {
    document.getElementById(String(currentQuestion.id)).remove();
  }

  if (currentQuestionPointer + 1 < questions.length) {
    currentQuestionPointer++;
    currentQuestion = questions[currentQuestionPointer];
  } else {
    currentQuestionPointer = 0;
    currentQuestion = questions[currentQuestionPointer];
  }
  renderQuestion(currentQuestion);
}

//TODO 13: Frage beantworten mit Logik
function validate(answerId) {
  const corretAnswer = currentQuestion.answers.find((answer) => {
    return answer.correct;
  });

  if (corretAnswer.id === answerId) {
    alert("Richtig");
    document.getElementById(answerId).classList.add("right");
  } else {
    alert("Falsch");
    document.getElementById(answerId).classList.add("wrong");
    document.getElementById(corretAnswer.id).classList.add("right");
  }
}

// TODO 14: Lösung anzeigen
function showSolution() {
  const corretAnswer = currentQuestion.answers.find((answer) => {
    return answer.correct;
  });
  document.getElementById(corretAnswer.id).classList.add("right");
}
