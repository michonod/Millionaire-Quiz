const data = [
  {
    id: 1,
    question: "Inside which HTML element do we put the JavaScript?",
    answers: [
      { text: "<js>", correct: false },
      { text: "<scripting>", correct: false },
      { text: "<javascript>", correct: false },
      { text: "<script>", correct: true },
    ],
  },
  {
    id: 2,
    question: "How do you write 'Hello World' in an alert box?",
    answers: [
      { text: "msgBox('Hello World')", correct: false },
      { text: "alert('Hello World')", correct: true },
      { text: "alertBox('Hello World')", correct: false },
      { text: "msg('Hello World')", correct: false },
    ],
  },
  {
    id: 3,
    question: "How do you create a function in JavaScript?",
    answers: [
      { text: "function myFunction()", correct: true },
      { text: "function:myFunction()", correct: false },
      { text: "function= myFunction()", correct: false },
      { text: "function-MyFunction", correct: false },
    ],
  },
  {
    id: 4,
    question: " How to write an IF statement in JavaScript?",
    answers: [
      { text: "if i == 5 then", correct: false },
      { text: "if(i === 5)", correct: true },
      { text: "if i = 5 then", correct: false },
      { text: "if i = 5", correct: false },
    ],
  },
  {
    id: 5,
    question: "How can you add a comment in a JavaScript?",
    answers: [
      { text: "'This is a comment'", correct: false },
      { text: "//This is a comment", correct: true },
      { text: "<!== This is a comment -->", correct: false },
      { text: "////Comment", correct: false },
    ],
  },
  {
    id: 6,
    question: "Which company developed JavaScript?",
    answers: [
      { text: "Google", correct: false },
      { text: "Microsoft", correct: false },
      { text: "Netscape", correct: true },
      { text: "Java", correct: false },
    ],
  },
  {
    id: 7,
    question: "What is the correct way to write a JavaScript array?",
    answers: [
      { text: "var color = 'red','blue','green'", correct: false },
      { text: "var color = {'red','blue','green'}", correct: false },
      { text: "var color = ['red','blue','green']", correct: true },
      { text: "var color = [{'red','blue','green'}]", correct: false },
    ],
  },
  {
    id: 8,
    question: "Which event occurs when the user clicks on an HTML element?",
    answers: [
      { text: "onmouseover", correct: false },
      { text: "onclick", correct: true },
      { text: "onchange", correct: false },
      { text: "onmouseclick", correct: false },
    ],
  },
  {
    id: 9,
    question: "How do you declare a JavaScript variable?",
    answers: [
      { text: "v CarName;", correct: false },
      { text: "variable CarName;", correct: false },
      { text: "var Carname;", correct: true },
      { text: "variable is CarName;", correct: false },
    ],
  },
  {
    id: 10,
    question: " Which operator is used to assign a value to a variable?",
    answers: [
      { text: "=", correct: true },
      { text: "*", correct: false },
      { text: "-", correct: false },
      { text: "x", correct: false },
    ],
  },
  {
    id: 11,
    question: "What will the following code return: Boolean(10 > 9)",
    answers: [
      { text: "NaN", correct: false },
      { text: "True", correct: true },
      { text: "False", correct: false },
      { text: "Symbol", correct: false },
    ],
  },
  {
    id: 12,
    question:
      "What is the correct JavaScript syntax to change the content of the HTML element below? <p id='demo'>This is a demonstration.</p>",
    answers: [
      {
        text: " document.getElementById('demo').innerHTML = 'Hello World!'",
        correct: true,
      },
      {
        text: " document.getElementByName(`p`).innerHTML = `Hello World!`",
        correct: false,
      },
      {
        text: "document.getElement(`p`).innerHTML = `Hello World!`",
        correct: false,
      },
      { text: " #demo.innerHTML = `Hello World!`", correct: false },
    ],
  },
  {
    id: 13,
    question:
      " What is the correct syntax for referring to an external script called `xxx.js`?",
    answers: [
      { text: "<script src=`xxx.js`>", correct: true },
      { text: "<script name=`xxx.js`>", correct: false },
      { text: "<script href=`xxx.js`>", correct: false },
      { text: "<script source=`xxx.js`>", correct: false },
    ],
  },
  {
    id: 14,
    question: "How to insert a comment that has more than one line?",
    answers: [
      { text: " //This comment//", correct: false },
      { text: "$$This comment$$", correct: false },
      { text: "(This comment)", correct: false },
      { text: "/*This comment*/", correct: true },
    ],
  },
  {
    id: 15,
    question: "How did you know the answers to this questions?",
    answers: [
      { text: "W3School", correct: false },
      { text: "MDN", correct: false },
      { text: "Google", correct: true },
      { text: "From the Book", correct: false },
    ],
  },
];

export default data;
