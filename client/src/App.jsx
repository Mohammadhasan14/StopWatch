import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [isRunning, setIsRunning] = useState(false);
  const [milliseconds, setMilliseconds] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);

  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        setMilliseconds((prevMilliseconds) => prevMilliseconds + 10);
      }, 10);
    }

    return () => clearInterval(intervalId);
  }, [isRunning]);

  useEffect(() => {
    if (milliseconds >= 1000) {
      setSeconds((prevSeconds) => prevSeconds + 1);
      setMilliseconds(0);
    }
  }, [milliseconds]);

  useEffect(() => {
    if (seconds >= 60) {
      setMinutes((prevMinutes) => prevMinutes + 1);
      setSeconds(0);
    }
  }, [seconds]);

  useEffect(() => {
    if (minutes >= 60) {
      setHours((prevHours) => prevHours + 1);
      setMinutes(0);
    }
  }, [minutes]);

  useEffect(() => {
    if (hours >= 12) {
      setHours(0);
    }
  }, [minutes]);

  function handleStart() {
    setIsRunning(true);
  }

  function handleStop() {
    setIsRunning(false);
  }

  function handleReset() {
    setIsRunning(false);
    setMilliseconds(0);
    setSeconds(0);
    setMinutes(0);
    setHours(0);
  }

  return (
    <>
      <h1>Stopwatch</h1>
      <p>{`${milliseconds
        .toString()
        .padStart(3, '0')}:${seconds.toString().padStart(2, '0')}:${minutes
          .toString()
          .padStart(2, '0')}:${hours.toString().padStart(2, '0')}`}</p>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
}

export default App;
