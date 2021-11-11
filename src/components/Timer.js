import { useEffect, useState } from "react";
import useSound from "use-sound";
import wait from "../assets/wait.mp3";
import gameover from "../assets/wrong.mp3";

const Timer = ({ setStop, stoped, questionNumber }) => {
  const [timer, setTimer] = useState(30);
  const [waitSound, { stop }] = useSound(wait, { volume: 0.02 });
  const [gameOverSound] = useSound(gameover, { volume: 0.15 });

  useEffect(() => {
    waitSound();
    if (!timer) {
      setStop(true);
      stop();
      gameOverSound();
    }

    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [setStop, timer]);
  useEffect(() => {
    setTimer(30);
  }, [questionNumber, stoped]);
  return timer;
};

export default Timer;
