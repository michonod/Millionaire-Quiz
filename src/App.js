import "./App.css";
import React, { useState, useEffect, useMemo } from "react";
import Quiz from "./components/Quiz";
import Timer from "./components/Timer";
import Login from "./components/Login";

function App() {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  const [earnedMoney, setEarnedMoney] = useState("$ 0");
  const [username, setUsername] = useState(null);

  const data = [
    {
      id: 1,
      question: " What is negative Infinity?",
      answers: [
        { text: "Number", correct: true },
        { text: "Loop", correct: false },
        { text: "NaN", correct: false },
        { text: "Symbol", correct: false },
      ],
    },
    {
      id: 2,
      question: " Which company developed JavaScript?",
      answers: [
        { text: "Google", correct: false },
        { text: "Microsoft", correct: false },
        { text: "Netscape", correct: true },
        { text: "Java", correct: false },
      ],
    },
    {
      id: 3,
      question:
        " What of the following are not the looping structures in JavaScript?",
      answers: [
        { text: "For", correct: false },
        { text: "While", correct: false },
        { text: "Loop", correct: true },
        { text: "Do-while", correct: false },
      ],
    },
  ];

  const moneyList = useMemo(
    () => [
      { id: 15, amount: "$1000000" },
      { id: 14, amount: "$850000" },
      { id: 13, amount: "$720000" },
      { id: 12, amount: "$360000" },
      { id: 11, amount: "$18000" },
      { id: 10, amount: "$90000" },
      { id: 9, amount: "$60000" },
      { id: 8, amount: "$30000" },
      { id: 7, amount: "$25000" },
      { id: 6, amount: "$18000" },
      { id: 5, amount: "$9000" },
      { id: 4, amount: "$6000" },
      { id: 3, amount: "$3000" },
      { id: 2, amount: "$2000" },
      { id: 1, amount: "$1000" },
    ],
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarnedMoney(moneyList.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber, moneyList]);
  return (
    <div className="app">
      {!username && <Login setUsername={setUsername} />}
      {username && (
        <>
          {stop && (
            <h1 className="earnedMoneyBox">
              {username} you earned {earnedMoney}
            </h1>
          )}
          <div className="main">
            <div className="top">
              <div className="timer">
                <Timer setStop={setStop} questionNumber={questionNumber} />
              </div>
            </div>
            <div className="bottom">
              {!stop && (
                <Quiz
                  data={data}
                  setStop={setStop}
                  questionNumber={questionNumber}
                  setQuestionNumber={setQuestionNumber}
                />
              )}
            </div>
          </div>
          <div className="moneyList">
            <ul className="money">
              {moneyList.map((list) => {
                return (
                  <li
                    className={
                      questionNumber == +list.id
                        ? "money_item active"
                        : "money_item"
                    }
                  >
                    <span className="money_item_number">{list.id}</span>
                    <span className="money_item_amount">{list.amount}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
