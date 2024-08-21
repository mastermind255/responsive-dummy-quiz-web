
const questions = [
    {
      question: "Who is the most powerfull God in hinduism ?",
      options: ["Hanuman", "Laxmi", "Krishna", "Durga"],
      answer: 2,
    },
    {
      question: "Who is the real father of Krishna ?",
      options: ["Vasudeva","Nanda","Brahma","Dasharath",],
      answer: 0,
    },
    {
      question: "Who is the wife of Krishna ?",
      options: ["Supanrekha", "Sita", "Radha", "Rukhimini"],
      answer: 2,
    },
    {
      question: "What is the dharma granth of Hinduism ?",
      options: ["Ramayan", "Gita", "Shivpuran", "Laxmipuran"],
      answer: 1,
    },
    {
      question: "How many bedas in hinduism ?",
      options: ["3", "6", "4", "2"],
      answer: 2,
    },
    {
      question: "Where did the Ravan took place to sita ?",
      options: ["Duha Aronya","KunjaBan","Ashok Batika","NidhiBan",],
      answer: 2,
    },
    {
      question: "Where did God Krishna  merry to Rani Radha?",
      options: ["Duha Aronya","KunjaBan","NidhiBan","Ashok Batika",],
      answer: 2,
    },
    {
      question: "How many yugas in hinduism ?",
      options: ["3", "2", "4", "5"],
      answer: 2,
    },
    {
      question: "Who is the father of Rani Radha?",
      options: ["Kansh", "brushbhan", "VasuDeva", "NandaRaj"],
      answer: 1,
    },
    {
      question: "Which is the first religion in World ?",
      options: ["Atheist", "Islam", "Christianity", "Hindusim"],
      answer: 3,
    },
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  function loadQuestion() {
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
    const nextBtn = document.getElementById("next-btn");
  
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.innerHTML = currentQuestion.question;
    optionsElement.innerHTML = "";
  
    currentQuestion.options.forEach((option, index) => {
      const button = document.createElement("button");
      button.classList.add("option");
      button.innerHTML = option;
      button.onclick = () => checkAnswer(button, index);
      optionsElement.appendChild(button);
    });
  
    nextBtn.style.display = "none";
  }
  
  function checkAnswer(button, selectedIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    const options = document.querySelectorAll(".option");
    if (selectedIndex === currentQuestion.answer) {
      button.classList.add("correct");
      score++;
      updateScore();
    } else {
      button.classList.add("wrong");
    }
  
    options.forEach((option, index) => {
      option.disabled = true;
      if (index === currentQuestion.answer) {
        option.classList.add("correct");
      }
    });
  
    document.getElementById("next-btn").style.display = "block";
  }
  
  function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      loadQuestion();
    } 
    else {
      showScore();
    }
  }
  
  function updateScore() {
    document.getElementById("current-score").innerText = score;
  }
  
  function showScore() {
    const quizContainer = document.querySelector(".quiz-container");
    const scoreContainer = document.getElementById("score-container");
    const scoreElement = document.getElementById("score");
  
    quizContainer.style.display = "block";
    scoreContainer.style.display = "block";
    scoreElement.innerHTML = score;
  }
  
  function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById("current-score").innerText = score;
    document.querySelector(".quiz-container").style.display = "block";
    document.getElementById("score-container").style.display = "none";
    loadQuestion();
  }
  
  window.onload = loadQuestion;
  