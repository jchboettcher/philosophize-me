const philosophers = ["Plato","Confucius","Han Fei","Machiavelli","Marcus Aurelius","Thomas More","Voltaire"];
const numQuestions = questions.length;
let winner = "";

for (let i = 0; i < numQuestions; i++) {
  questions[i].weights = weights[i];
}

// shuffle answers
const perms = [
  [1,2,3,4],[1,2,4,3],[1,3,2,4],[1,3,4,2],[1,4,2,3],[1,4,3,2],
  [2,1,3,4],[2,1,4,3],[2,3,1,4],[2,3,4,1],[2,4,1,3],[2,4,3,1],
  [3,1,2,4],[3,1,4,2],[3,2,1,4],[3,2,4,1],[3,4,1,2],[3,4,2,1],
  [4,1,2,3],[4,1,3,2],[4,2,1,3],[4,2,3,1],[4,3,1,2],[4,3,2,1],
]
for (let i = 0; i < numQuestions; i++) {
  const r = Math.floor(Math.random()*24);
  const perm = perms[r];
  questions[i].options = perm.map(j=>questions[i].options[j-1]);
  questions[i].weights = perm.map(j=>questions[i].weights[j-1]);
}

// shuffle questions
questions = questions
  .map(value => ({ value, sort: Math.random() }))
  .sort((a, b) => a.sort - b.sort)
  .map(({ value }) => value)

let currentQuestion = 0;
const progressEl = document.getElementById("progress-bar");
progressEl.style.width = "100%"
const scenarioEl = document.getElementById("scenario");
const questionEl = document.getElementById("question");
const totalWeights = [0,0,0,0,0,0,0];

// Test winners
const winners = [0,0,0,0,0,0,0];
for (let i = 0; i < 10000; i++) {
  const totWeight = [0,0,0,0,0,0,0];
  for (let j = 0; j < numQuestions; j++) {
    const newWeights = questions[j].weights[Math.floor(Math.random()*4)];
    for (let i = 0; i < 7; i++) {
      totWeight[i] += newWeights[i];
    }
  }
  winners[totWeight.map((x, i) => [x, i]).reduce((r, a) => (a[0] > r[0] ? a : r))[1]] += 1;
}

const setBtn = () => {
  document.getElementById("next-btn").addEventListener("click", () => {
    if (currentQuestion == numQuestions) {
      location.reload();
      return;
    }
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    if (!selectedOption) {
        return;
    }

    const answer = selectedOption.value;
    const newWeights = questions[currentQuestion].weights[answer];
    for (let i = 0; i < 7; i++) {
      totalWeights[i] += newWeights[i];
    }

    currentQuestion++;
    if (currentQuestion == questions.length) {
        progressEl.style.width = `${currentQuestion/numQuestions*100}%`
        winner = philosophers[totalWeights.map((x, i) => [x, i]).reduce((r, a) => (a[0] > r[0] ? a : r))[1]];
        questions.push(results[winner]);
    }
    showQuestion();
  });
}

const showQuestion = () => {
  progressEl.style.width = `${currentQuestion/numQuestions*100}%`
  if (currentQuestion < numQuestions) {
    scenarioEl.innerHTML = "Scenario "+(currentQuestion+1);
  } else {
    scenarioEl.innerHTML = "Your Philosopher: "+winner+"!";
  }
  const question = questions[currentQuestion];
  questionEl.innerText = question.question;
  const answerContainer = document.getElementById("answer-container");
  const numOptions = question.options.length;
  let s = ""
  for (let i = 1; i <= numOptions; i++) {
    s += `
      <div class="option-div">
        <input type="radio" name="answer" value="${i-1}" id="option${i}"/>
        <label for="option${i}" id="option${i}-label"></label>
      </div>`;
  }
  const btnText = currentQuestion < numQuestions ? "Next" : "Again?"
  answerContainer.innerHTML = s+`
    <div id="btn-div">
      <button id="next-btn">${btnText}</button>
    </div>
  `
  for (let i = 1; i <= numOptions; i++) {
    const option = document.getElementById("option"+i+"-label");
    option.innerText = question.options[i-1];
  }
  setBtn();
}

showQuestion();

setTimeout( () =>
alert("Welcome to Philosophize Me! We'll present you with a number of ethically strenuous \
situations with a set of possible responses for each. For each one, select the option you \
would most likely follow. Once you complete all the questions, we'll let you know which \
philosopher your views align best with!"),1000);
