import { useRef, useState } from "react";
import ResultModel from "./ResultModel";

const TIMER_COUNTDOWN_INTERVAL_MS = 10;

export default function TimerChallenge({ title, targetTimeSeconds }) {
  const targetTimeMs = targetTimeSeconds * 1000;
  const timer = useRef();
  const dialog = useRef();

  const [timeRemaining, setTimeRemaining] = useState(targetTimeMs);

  const timerIsActive = timeRemaining > 0 && timeRemaining < targetTimeMs;
  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    dialog.current.open();
  }

  function handleStart() {
    timer.current = setInterval(() => {
      setTimeRemaining(prevTimeRemaining => prevTimeRemaining - TIMER_COUNTDOWN_INTERVAL_MS);

    }, TIMER_COUNTDOWN_INTERVAL_MS);
  }

  function handleStop() {
    clearInterval(timer.current);
    dialog.current.open();
  }

  function resetTimer() {
    setTimeRemaining(targetTimeMs);
  }

  return <>
    <ResultModel ref={dialog} targetTime={targetTimeSeconds} timeRemaining={timeRemaining} resetTimer={resetTimer}/>
    <section className="challenge">
      <h2>{title}</h2>
      <p className="challenge-time">
        {targetTimeSeconds} second{targetTimeSeconds > 1 ? 's' : ''}
      </p>
      <p>
        <button onClick={timerIsActive ? handleStop : handleStart}>
          {timerIsActive ? 'Stop' : 'Start'} Challenge
        </button>
      </p>
      <p className={timerIsActive ? 'active' : undefined}>
        {timerIsActive ? 'Timer is running...' : 'Timer inactive'}
      </p>

    </section>
  </>
}
