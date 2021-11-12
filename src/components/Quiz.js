import React, { useState, useEffect } from "react";
import useSound from "use-sound";
import play from "../assets/play.mp3";
import correct from "../assets/correct.mp3";
import wrong from "../assets/wrong.mp3";
import wait from "../assets/wait.mp3";

const Quiz = ({ questionNumber, data, setQuestionNumber, setStop }) => {
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answerClassName, setAnswerClassName] = useState("answer");
  const [letsPlay] = useSound(play, { volume: 0.25 });
  const [correctAnsw] = useSound(correct, { volume: 0.25 });
  const [wrongAnsw] = useSound(wrong, { volume: 0.25 });
  const [, { stop }] = useSound(wait, { volume: 0.25 });

  useEffect(() => {
    letsPlay();
  }, [letsPlay]);

  useEffect(() => {
    setQuestion(data[questionNumber - 1]);
  }, [data, questionNumber]);

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
        stop();
        setTimeout(() => {
          setStop(true);
        }, 1500);
      }
    }, 6000);
  };

  return (
    <div className="quiz">
      <div className="question">{question?.question}</div>
      <div className="answers">
        {question?.answers.map((a) => (
          <div
            key={Math.random()}
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
