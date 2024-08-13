import { useRef, useState } from "react";

export default function TimerChallenge({title, targetTimeSeconds}) {
  const targetTimeMs = targetTimeSeconds * 1000;
  const timer = useRef();
  const [timerStarted, setTimerStarted] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);

  
  function handleStart() {
    setTimerStarted(true);
    timer.current = setTimeout(() => {
      setTimerExpired(true);
    }, targetTimeMs);
  }

  function handleStop() {
    clearTimeout(timer.current);
  }
  return <section className="challenge">
    <h2>{title}</h2>
    {timerExpired && <p>You lost!</p>}
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
}
