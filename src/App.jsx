import Player from './components/Player.jsx';
import TimerChallenge from './components/TimerChallenge.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title="Easy" targetTimeSeconds={1}/>
        <TimerChallenge title="Not Easy" targetTimeSeconds={5}/>
        <TimerChallenge title="Getting tough" targetTimeSeconds={10}/>
        <TimerChallenge title="Pros only" targetTimeSeconds={15}/>
      </div>
    </>
  );
}

export default App;
