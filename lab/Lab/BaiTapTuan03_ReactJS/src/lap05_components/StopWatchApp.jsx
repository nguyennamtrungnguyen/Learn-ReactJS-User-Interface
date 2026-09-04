import React, { useState, useRef } from "react";
import "./StopWatchApp.css";

const StopWatchApp = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const [laps, setLaps] = useState([]);
  const [lapName, setLapName] = useState("");

  // REF LƯU INTERVAL
  const intervalRef = useRef(null);

  // REF FOCUS INPUT
  const inputRef = useRef(null);

  const handleStart = () => {
    if (running) return;

    setRunning(true);

    intervalRef.current = setInterval(() => {
      setTime((prev) => prev + 10); // 10ms
    }, 10);
  };

  const handlePause = () => {
    setRunning(false);
    clearInterval(intervalRef.current);
  };

  const handleReset = () => {
    clearInterval(intervalRef.current);
    setRunning(false);
    setTime(0);
    setLaps([]);
  };

  const handleAddLap = () => {
    if (!lapName.trim()) return;

    setLaps((prev) => [...prev, { id: Date.now(), name: lapName, time }]);

    setLapName("");

    // FOCUS INPUT
    inputRef.current.focus();
  };

  // FORMAT TIME
  const formatTime = (ms) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    const milliseconds = ms % 1000;

    return `${minutes}:${seconds.toString().padStart(2, "0")}.${milliseconds
      .toString()
      .padStart(3, "0")}`;
  };

  return (
    <div className="stopwatch-container">
      <h1>Stopwatch</h1>

      <div className="time">{formatTime(time)}</div>

      <div className="buttons">
        <button onClick={handleStart}>Start</button>
        <button onClick={handlePause}>Pause</button>
        <button onClick={handleReset}>Reset</button>
      </div>

      <div className="lap-box">
        <input
          ref={inputRef}
          value={lapName}
          onChange={(e) => setLapName(e.target.value)}
          placeholder="Lap name..."
        />
        <button onClick={handleAddLap}>Add Lap</button>
      </div>

      <ul className="lap-list">
        {laps.map((lap) => (
          <li key={lap.id}>
            {lap.name} - {formatTime(lap.time)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StopWatchApp;
