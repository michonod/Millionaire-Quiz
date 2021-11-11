import "./App.css";
import React, { useState, useEffect } from "react";
import Quiz from "./components/Quiz";
import Timer from "./components/Timer";
import Login from "./components/Login";
import data from "./Data";
import moneyList from "./MoneyList.js";

function App() {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  const [earnedMoney, setEarnedMoney] = useState("$ 0");
  const [username, setUsername] = useState(null);
  const [isMillionaire, setIsMillionaire] = useState(false);

  const resetGameHandler = () => {
    setQuestionNumber(1);
    setStop(false);
    setEarnedMoney("$ 0");
    setIsMillionaire(false);
  };

  const restartButton = (
    <button className="restartBtn" onClick={resetGameHandler}>
      Play again
    </button>
  );

  useEffect(() => {
    if (questionNumber > 15) {
      setIsMillionaire(true);
      setStop(true);
    }
    questionNumber > 1 &&
      setEarnedMoney(moneyList.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber, moneyList]);
  return (
    <div className="app">
      {!username && <Login setUsername={setUsername} />}
      {username && (
        <>
          {stop && (
            <div className="earnedMoneyBox">
              <h1>
                {username} you earned {earnedMoney}
              </h1>
            </div>
          )}
          {stop && isMillionaire && (
            <h1 className="earnedMoneyBox">
              Congratulation...
              <br /> You are a JavaScript Master
              <br />
              {username} you earned {earnedMoney}
            </h1>
          )}
          <div className="main">
            <div className="top">
              {!stop && (
                <div className="timer">
                  <Timer
                    stoped={stop}
                    setStop={setStop}
                    questionNumber={questionNumber}
                  />
                </div>
              )}
              {stop && restartButton}
            </div>
            <div className="bottom">
              {!stop && (
                <Quiz
                  stoped={stop}
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
