import { useRef, useState } from "react";
import ResultModel from "./ResultModel";

export default function TimerChallenge({ title, targetTimeSeconds }) {
  const targetTimeMs = targetTimeSeconds * 1000;
  const timer = useRef();
  const dialog = useRef();
  const [timerStarted, setTimerStarted] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);


  function handleStart() {
    setTimerStarted(true);
    timer.current = setTimeout(() => {
      setTimerExpired(true);
      dialog.current.open();
    }, targetTimeMs);
  }

  function handleStop() {
    clearTimeout(timer.current);
  }
  return <>
    <ResultModel ref={dialog} targetTime={targetTimeSeconds}/>
    <section className="challenge">
      <h2>{title}</h2>
      <p className="challenge-time">
        {targetTimeSeconds} second{targetTimeSeconds > 1 ? 's' : ''}
      </p>
      <p>
        <button onClick={timerStarted ? handleStop : handleStart}>
          {timerStarted ? 'Stop' : 'Start'} Challenge
        </button>
      </p>
      <p className={timerStarted ? 'active' : undefined}>
        {timerStarted ? 'Timer is running...' : 'Timer inactive'}
      </p>

    </section>
  </>
}
