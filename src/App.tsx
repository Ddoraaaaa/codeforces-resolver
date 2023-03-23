import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import './App.css';



const App = () => {
    const [contestLog, setContestLog] = useState('');
    const [freezeTime, setFreezeTime] = useState(0);
    const [numGold, setNumGold] = useState(1);
    const [numSilver, setNumSilver] = useState(1);
    const [numBronze, setNumBronze] = useState(1);
  
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      console.log({
        contestLog,
        freezeTime,
        numGold,
        numSilver,
        numBronze,
      });
    };
  
    return (
      <div className="App">
        <form onSubmit={handleSubmit}>
          <label>
            Contest Log:
            <textarea value={contestLog} onChange={(e) => setContestLog(e.target.value)} />
          </label>
          <label>
            Freeze Time:
            <input type="number" value={freezeTime} onChange={(e) => setFreezeTime(Number(e.target.value))} />
          </label>
          <label>
            Number of Gold:
            <input type="number" value={numGold} min={1} max={5} onChange={(e) => setNumGold(Number(e.target.value))} />
          </label>
          <label>
            Number of Silver:
            <input type="number" value={numSilver} min={1} max={5} onChange={(e) => setNumSilver(Number(e.target.value))} />
          </label>
          <label>
            Number of Bronze:
            <input type="number" value={numBronze} min={1} max={5} onChange={(e) => setNumBronze(Number(e.target.value))} />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  };
  
  export default App;
