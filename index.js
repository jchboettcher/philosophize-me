const numQuestions = questions.length;

let currentQuestion = 0;
const progressEl = document.getElementById("progress-bar");
progressEl.style.width = "100%"
const scenarioEl = document.getElementById("scenario");
const questionEl = document.getElementById("question");

const setBtn = () => {
  document.getElementById("next-btn").addEventListener("click", () => {
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    if (!selectedOption) {
        return;
    }

    const answer = selectedOption.value;
    // const weights = questions[currentQuestion].weights[answer];


    currentQuestion++;
    if (currentQuestion == questions.length) {
        progressEl.style.width = `${currentQuestion/numQuestions*100}%`
        // alert("Thank you for completing the survey!");
        return;
    }
    showQuestion();
  });
}

const showQuestion = () => {
  progressEl.style.width = `${currentQuestion/numQuestions*100}%`
  scenarioEl.innerHTML = "Scenario "+(currentQuestion+1);
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
  answerContainer.innerHTML = s+`
    <div id="btn-div">
      <button id="next-btn">Next</button>
    </div>
  `
  for (let i = 1; i <= numOptions; i++) {
    const option = document.getElementById("option"+i+"-label");
    option.innerText = question.options[i-1];
  }
  setBtn();
}

showQuestion();

