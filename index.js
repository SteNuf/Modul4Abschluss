//// TODO: Fragen Struktur:
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

// TODO 11: Frage Rendern;

function renderQuestion() {
  const question = questions[0];

  const questionDiv = document.createElement("div");
  questionDiv.classList.add("full-container");

  const questionTitle = document.createElement("div");
  questionTitle.classList.add("title");

  questionTitle.appendChild(document.createTextNode(question.question));

  const questionAnswer = document.createElement("div");
  questionAnswer.classList.add("total-answer-container");

  question.answers.forEach((answer) => {
    const answerDiv = document.createElement("button");
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
//
// //TODO Frage beantworten mit Logik

// TODO 14: Lösung anzeigen
//
//
//  TODO 10: Fragen
