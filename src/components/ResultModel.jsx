import { forwardRef, useImperativeHandle, useRef } from "react";
import {createPortal} from 'react-dom';

const ResultModal = forwardRef(function ResultModel({ targetTime, timeRemaining, resetTimer }, ref) {
  const dialog = useRef();
  const userLost = timeRemaining <= 0;
  const formattedTimeRemaining = (timeRemaining / 1000).toFixed(2);
  const score = Math.round((1 - timeRemaining / (targetTime * 1000)) * 100);
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      }
    }
  });

  return createPortal(
    <dialog ref={dialog} className="result-modal" onClose={resetTimer}>
      {userLost && <h2>You lost </h2>}
      {!userLost && <h2>Your Score: {score}</h2>}
      <p>The target time was <strong>{targetTime} seconds.</strong></p>
      <p>You stopped the timer with {formattedTimeRemaining} seconds left.</p>
      <form method="dialog">

        <button onClick={resetTimer}>Close</button>
      </form>
    </dialog>,
    document.getElementById('modal')
  )
})

export default ResultModal;