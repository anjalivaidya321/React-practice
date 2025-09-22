// import React, { useState } from "react";

// function Stopwatch() {
//   const [time, setTime] = useState(0); // seconds
//   const [running, setRunning] = useState(false);
//   const [intervalId, setIntervalId] = useState(null); // store interval id

//   // Start stopwatch
//   const start = () => {
//     if (!running) {
//       setRunning(true);
//       const id = setInterval(() => {
//         setTime((prev) => prev + 1); // increase seconds
//       }, 1000);
//       setIntervalId(id); // save interval id in state
//     }
//   };

//   // Stop stopwatch
//   const stop = () => {
//     clearInterval(intervalId); // stop interval
//     setRunning(false);
//   };

//   // Reset stopwatch
//   const reset = () => {
//     clearInterval(intervalId);
//     setRunning(false);
//     setTime(0);
//   };

//   return (
//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//       <h1>⏱ Stopwatch</h1>
//       <h2>{time} sec</h2>
//       <button onClick={start}>Start</button>
//       <button onClick={stop}>Stop</button>
//       <button onClick={reset}>Reset</button>
//     </div>
//   );
// }

// export default Stopwatch;


import React, { useState } from "react";

function Stopwatch() {
  const [time, setTime] = useState(0); // total seconds
  const [running, setRunning] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  // Start stopwatch
  const start = () => {
    if (!running) {
      setRunning(true);
      const id = setInterval(() => {
        setTime((prev) => prev + 1); // increase by 1 second
      }, 1000);
      setIntervalId(id);
    }
  };

  // Stop stopwatch
  const stop = () => {
    clearInterval(intervalId);
    setRunning(false);
  };

  // Reset stopwatch
  const reset = () => {
    clearInterval(intervalId);
    setRunning(false);
    setTime(0);
  };

  // Convert seconds → hh:mm:ss
  const formatTime = (totalSeconds) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    
    return hours + ":" + minutes + ":" + seconds;
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>⏱ Stopwatch</h1>
      <h2>{formatTime(time)}</h2>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Stopwatch;
