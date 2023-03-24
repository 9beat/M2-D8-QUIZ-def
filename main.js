


const questions = [
    {
      category: 'Science: Computers',
      type: 'multiple',
      difficulty: 'easy',
      question: 'What does CPU stand for?',
      correct_answer: 'Central Processing Unit',
      incorrect_answers: [
        'Central Process Unit',
        'Computer Personal Unit',
        'Central Processor Unit',
      ],
    },
    {
      category: 'Science: Computers',
      type: 'multiple',
      difficulty: 'easy',
      question:
        'In the programming language Java, which of these keywords would you put on a variable to make sure it doesn\'t get modified?',
      correct_answer: 'Final',
      incorrect_answers: ['Static', 'Private', 'Public'],
    },
    {
      category: 'Science: Computers',
      type: 'boolean',
      difficulty: 'easy',
      question: 'The logo for Snapchat is a Bell.',
      correct_answer: 'False',
      incorrect_answers: ['True'],
    },
    {
      category: 'Science: Computers',
      type: 'boolean',
      difficulty: 'easy',
      question:
        'Pointers were not used in the original C programming language; they were added later on in C++.',
      correct_answer: 'False',
      incorrect_answers: ['True'],
    },
    {
      category: 'Science: Computers',
      type: 'multiple',
      difficulty: 'easy',
      question:
        'What is the most preferred image format used for logos in the Wikimedia database?',
      correct_answer: '.svg',
      incorrect_answers: ['.png', '.jpeg', '.gif'],
    },
    {
      category: 'Science: Computers',
      type: 'multiple',
      difficulty: 'easy',
      question: 'In web design, what does CSS stand for?',
      correct_answer: 'Cascading Style Sheet',
      incorrect_answers: [
        'Counter Strike: Source',
        'Corrective Style Sheet',
        'Computer Style Sheet',
      ],
    },
    {
      category: 'Science: Computers',
      type: 'multiple',
      difficulty: 'easy',
      question:
        'What is the code name for the mobile operating system Android 7.0?',
      correct_answer: 'Nougat',
      incorrect_answers: [
        'Ice Cream Sandwich',
        'Jelly Bean',
        'Marshmallow',
      ],
    },
    {
      category: 'Science: Computers',
      type: 'multiple',
      difficulty: 'easy',
      question: 'On Twitter, what is the character limit for a Tweet?',
      correct_answer: '140',
      incorrect_answers: ['120', '160', '100'],
    },
    {
      category: 'Science: Computers',
      type: 'boolean',
      difficulty: 'easy',
      question: 'Linux was first created as an alternative to Windows XP.',
      correct_answer: 'False',
      incorrect_answers: ['True'],
    },
    {
      category: 'Science: Computers',
      type: 'multiple',
      difficulty: 'easy',
      question:
        'Which programming language shares its name with an island in Indonesia?',
      correct_answer: 'Java',
      incorrect_answers: ['Python', 'C', 'Jakarta'],
    },
  ]


let nQuestion = 0

let score = 0

function showQuest() {
  let newQuest = questions[nQuestion];
  let stampaDomande = nQuestion + 1;
  let totDomande = questions.length;
      
  let q = document.createElement('h3')
  q.innerText = newQuest.question
  
  let risp = [newQuest.correct_answer, ...newQuest.incorrect_answers] // [...] unisce 2 obj dentro array
shuffleArray(risp)

  let rispList = document.createElement('ul')
  for (const risposta of risp) {
    let li = document.createElement('li')
    let radio = document.createElement('input')
    radio.type = 'radio'
    radio.name = 'risposta'
    radio.value = risposta
    radio.className = 'lista'
    li.appendChild(radio)
    let rispText = document.createElement('span')
    rispText.innerText = risposta
    li.appendChild(rispText)
    rispList.appendChild(li)
  }
  let btn = document.createElement('button')
  btn.addEventListener('click', clickBtn)

  btn.innerText = 'Conferma'
  
  let sectionQ = document.getElementById('q')
  sectionQ.innerHTML = ""
  sectionQ.appendChild(q)
  sectionQ.appendChild(rispList)
  sectionQ.appendChild(btn)
}

  function shuffleArray(array) {
    for (let i = array.length -1;  i > 0; i--) {
      let x = Math.floor(Math.random() * (i + 1)); // array random
      [array[i],array[x]] = [array[x], array[i]]
    }
  }
  function clickBtn() {
    let rispCheck = document.querySelector("input[name='risposta']:checked");
    if (!rispCheck) {
      alert('Seleziona una risposta!');
      return
    }
    let rispScelta = questions[nQuestion];
    if (rispCheck.value === rispScelta.correct_answer) {
      score++
    }
    nQuestion++
    if (nQuestion >= questions.length) {
      risultato()
    }else{
      showQuest()
    }
  }

  function risultato() {
    let sectionResult = document.getElementById('q');
    let textResult = document.createElement('h3');
    let paragrafo = "Hai risposto correttamente a " + score + " domande su " + questions.length;
    textResult.innerText = paragrafo
    sectionResult.innerHTML = ""
    sectionResult.appendChild(textResult)
  }



 
window.onload = function() {
  showQuest()
}


