import React, { useState, useEffect } from "react";
import useSound from "use-sound";
import play from "../assets/play.mp3";
import correct from "../assets/correct.mp3";
import wrong from "../assets/wrong.mp3";

const Quiz = ({ questionNumber, data, setQuestionNumber, setStop }) => {
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answerClassName, setAnswerClassName] = useState("answer");

  const [letsPlay] = useSound(play);
  const [correctAnsw] = useSound(correct);
  const [wrongAnsw] = useSound(wrong);

  useEffect(() => {
    letsPlay();
  }, [letsPlay]);

  useEffect(() => {
    setQuestion(data[questionNumber - 1]);
  }, [data, questionNumber]);

  let answerClass = `answer active`;

  const answerClickHandler = (a) => {
    setSelectedAnswer(a);
    setAnswerClassName("answer active");
    setTimeout(() => {
      setAnswerClassName(a.correct ? "answer correct" : "answer wrong");
    }, 3000);
    setTimeout(() => {
      if (a.correct) {
        correctAnsw();
        setTimeout(() => {
          setQuestionNumber((prevState) => prevState + 1);
          setSelectedAnswer(null);
        }, 1500);
      } else {
        wrongAnsw();
        setTimeout(() => {
          setStop(true);
        }, 1500);
      }
    }, 7000);
  };

  return (
    <div className="quiz">
      <div className="question">{question?.question}</div>
      <div className="answers">
        {question?.answers.map((a) => (
          <div
            className={selectedAnswer === a ? answerClassName : "answer"}
            onClick={() => answerClickHandler(a)}
          >
            {a.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
