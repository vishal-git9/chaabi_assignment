import { useEffect, useRef, useState } from "react";

export const useTimer = (initialSeconds) => {
    const [seconds, setSeconds] = useState(initialSeconds);
    const [isRunning, setIsRunning] = useState(false);
    const intervalRef = useRef(null);
  
    useEffect(() => {
      if (isRunning) {
        intervalRef.current = setInterval(
          () => setSeconds((prevSeconds) => prevSeconds + 1),
          1000
        );
      }
  
      return () => {
        clearInterval(intervalRef.current);
      };
    }, [isRunning]);
  
    const resetTimer = () => {
      setSeconds(initialSeconds);
    };
  
    const pauseTimer = () => {
      setIsRunning(false);
      clearInterval(intervalRef.current);
    };
  
    const resumeTimer = () => {
      setIsRunning(true);
    };
  
    return [seconds, resetTimer, pauseTimer, resumeTimer];
  };