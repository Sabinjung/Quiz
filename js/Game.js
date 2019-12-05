let question = document.getElementById('question');
let nextBtn = document.getElementById('next-btn');
let option1 = document.getElementById('option-1');
let option2 = document.getElementById('option-2');
let option3 = document.getElementById('option-3');
let option4 = document.getElementById('option-4');
let result = document.getElementById('score');

let score = 0;
let right = ' &#10003';
let wrong = ' &#10005';
let questionIndex = 0;
let submittedAnswer = [];
let answers = ['Football', 'Car', 'Apple', 'Computer'];
let questionList = ['Which one of these is a Vehicle?', 'Which one of these is a Food?', 'Which one of these is a Device?'];
let optionList = [
  {
    data1: 'Football',
    data2: 'Orange',
    data3: 'Book',
    data4: 'Mouse'
  },
  {
    data1: 'Table',
    data2: 'Car',
    data3: 'Mobile',
    data4: 'Chair'
  },
  {
    data1: 'Book',
    data2: 'Mouse',
    data3: 'Apple',
    data4: 'Laptop'
  },
  {
    data1: 'House',
    data2: 'Cloth',
    data3: 'Pillow',
    data4: 'Computer'
  }
]

// const evaluateScore = () => {
//   for (i = 0; i < answers.length; i++) {
//     if (submittedAnswer[i] === answers[i]) {
//       score++;
//     }
//   }
//   console.log(score);
// }

const handleRight = () => {
  if (option1.innerHTML === answers[questionIndex]) {
    option1.style.background = '#28a745';
    option1.innerHTML = option1.innerText + right;
    nextBtn.innerHTML = 'Next';

  } else if (option2.innerHTML === answers[questionIndex]) {
    option2.style.background = '#28a745';
    option2.innerHTML = option2.innerText + right;
    nextBtn.innerHTML = 'Next';

  } else if (option3.innerHTML === answers[questionIndex]) {
    option3.style.background = '#28a745';
    option3.innerHTML = option3.innerText + right;
    nextBtn.innerHTML = 'Next';

  } else {
    option4.style.background = '#28a745';
    option4.innerHTML = option4.innerText + right;
    nextBtn.innerHTML = 'Next';

  }
}

const handleWrong = () => {
  if (option1.innerHTML === submittedAnswer[questionIndex]) {
    option1.style.background = '#dc3545';
    option1.innerHTML = option1.innerText + wrong;
    nextBtn.innerHTML = 'Next';
    score++;
  } else if (option2.innerHTML === submittedAnswer[questionIndex]) {
    option2.style.background = '#dc3545';
    option2.innerHTML = option2.innerText + wrong;
    nextBtn.innerHTML = 'Next';
    score++;
  } else if (option3.innerHTML === submittedAnswer[questionIndex]) {
    option3.style.background = '#dc3545';
    option3.innerHTML = option3.innerText + wrong;
    nextBtn.innerHTML = 'Next';
    score++;
  } else {
    option4.style.background = '#dc3545';
    option4.innerHTML = option4.innerText + wrong;
    nextBtn.innerHTML = 'Next';
    score++;
  }
}

const handleClear = () => {
  option1.style.background = '#86b3d1';
  option1.addEventListener('focus', (e) => {
    e.target.style.background = '#365074'
  })
  option1.addEventListener('blur', (e) => {
    e.target.style.background = '#86b3d1'
  })
  option2.style.background = '#86b3d1';
  option2.addEventListener('focus', (e) => {
    e.target.style.background = '#365074'
  })
  option2.addEventListener('blur', (e) => {
    e.target.style.background = '#86b3d1'
  })
  option3.style.background = '#86b3d1';
  option3.addEventListener('focus', (e) => {
    e.target.style.background = '#365074'
  })
  option3.addEventListener('blur', (e) => {
    e.target.style.background = '#86b3d1'
  })
  option4.style.background = '#86b3d1';
  option4.addEventListener('focus', (e) => {
    e.target.style.background = '#365074'
  })
  option4.addEventListener('blur', (e) => {
    e.target.style.background = '#86b3d1'
  })
}

option1.addEventListener('click', (e) => {
  e.preventDefault();
  submittedAnswer[questionIndex] = optionList[questionIndex].data1;
  nextBtn.disabled = false;
  nextBtn.style.background = '#4c6d56'
  nextBtn.style.cursor = 'pointer'
})

option2.addEventListener('click', (e) => {
  e.preventDefault();
  submittedAnswer[questionIndex] = optionList[questionIndex].data2;
  nextBtn.disabled = false;
  nextBtn.style.background = '#4c6d56'
  nextBtn.style.cursor = 'pointer'
})

option3.addEventListener('click', (e) => {
  e.preventDefault();
  submittedAnswer[questionIndex] = optionList[questionIndex].data3;
  nextBtn.disabled = false;
  nextBtn.style.background = '#4c6d56'
  nextBtn.style.cursor = 'pointer'
})

option4.addEventListener('click', (e) => {
  e.preventDefault();
  submittedAnswer[questionIndex] = optionList[questionIndex].data4;
  nextBtn.disabled = false;
  nextBtn.style.background = '#4c6d56'
  nextBtn.style.cursor = 'pointer'

})

nextBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if (nextBtn.innerHTML === 'Submit') {
    if (submittedAnswer[questionIndex] === answers[questionIndex]) {
      handleRight();
    } else {
      handleRight();
      handleWrong();
    }
  }
  else {
    if (questionIndex < (answers.length - 1)) {
      handleClear();
      question.innerHTML = questionList[questionIndex];
      option1.innerHTML = optionList[questionIndex + 1].data1;
      option2.innerHTML = optionList[questionIndex + 1].data2;
      option3.innerHTML = optionList[questionIndex + 1].data3;
      option4.innerHTML = optionList[questionIndex + 1].data4;
      nextBtn.innerHTML = 'Submit';
      nextBtn.disabled = true;
      nextBtn.style.background = '#5fa476';
      nextBtn.style.cursor = 'not-allowed';
      questionIndex++;
    } else {
      localStorage.setItem('score',score);
      window.location = 'Score.html'
    }
  }
})



