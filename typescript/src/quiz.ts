interface Quiz {
  question: string;
  answer: boolean;
}

let qNa: Quiz[] = [];
let attemp = 1;
let score = 0;

function randomGenerator(): number {
  return Math.floor(Math.random() * 10);
}

function addQuestionAndAns(question: string, answer: boolean): void {
  const data = {
    question,
    answer,
  };

  qNa.push(data);

  console.log("Question Added successfully");
}

function conductQuiz(answer: boolean): number | string {
  const selectedQuestion = qNa[randomGenerator()];

  if (attemp > 10) {
    return "Quiz is over";
  }

  if (selectedQuestion.answer === answer) {
    score++;
    attemp++;
  } else {
    attemp++;
  }

  return score;
}

addQuestionAndAns("TypeScript is superset of Javascript", true);
addQuestionAndAns("TypeScript is superset of Javascript", true);
addQuestionAndAns("TypeScript is superset of Javascript", true);
addQuestionAndAns("TypeScript is superset of Javascript", true);
addQuestionAndAns("TypeScript is superset of Javascript", true);
addQuestionAndAns("TypeScript is superset of Javascript", true);
addQuestionAndAns("TypeScript is superset of Javascript", true);
addQuestionAndAns("TypeScript is superset of Javascript", true);
addQuestionAndAns("TypeScript is superset of Javascript", true);
addQuestionAndAns("TypeScript is superset of Javascript", true);

conductQuiz(true);
conductQuiz(true);
conductQuiz(true);
conductQuiz(false);
conductQuiz(true);
conductQuiz(true);
conductQuiz(true);
conductQuiz(true);
conductQuiz(true);
console.log(conductQuiz(true));
console.log(conductQuiz(true));
