import { useEffect, useState } from "react";
import { Keyboard } from "./components/keyboard";
import { Options } from "./layout/options";
import "./styles/App.css";
import { randomString } from "./logic_functions/stringGen";
import { Taskinput } from "./layout/taskInput";
import { Keyinput } from "./components/keyinput";
import { matchString } from "./logic_functions/match_string";
import Navbar from "./components/navbar";
import Timer from "./components/timer";
import { useTimer } from "./hooks/useTimer";
import { useSound } from "use-sound";
import { handleUserResult } from "./redux/result/result.actions";
import { useDispatch, useSelector } from "react-redux";

function App() {
  // app states
  const [randString, setRandomString] = useState(""); // intialize the random generate strings for task
  const [words, setWords] = useState(4); // intialise the no of words to be shown in a string
  const [length, setLength] = useState(4); // intialize the no of strings to be there in task
  const [check, setCheck] = useState(true); // intialize the checking the state for correct words
  const [Strindex, setStrIndex] = useState(0); // intialize the strIndex to know the index of the last correct word

  const [playTypefx] = useSound("./Keyboard_Button.mp3"); // creating the typing sound for better experience

  const [correct, setCorrect] = useState(0); // intialize the correct to check the correct typed keyword
  const [totalKeys_pressed, settotalKeys_pressed] = useState(0); // intialize the totalkeys pressed by user in whole window of 5 minutes

  // using the custom useTimer hook for timer

  const [seconds, resetTimer, pauseTimer, resumeTimer] = useTimer(0);

  // intialising the accuracy and words per minute in a window of 5 minutes
  const dispatch = useDispatch();
  const { Accuracy, WordMinute } = useSelector((store) => store);

  // calling the handleuserInput function that checks and maintains every user input action

  const handleUserInput = (e) => {
    if(e.key==="Enter") return;
    if(e.key==="Shift") return;
    resumeTimer();
    playTypefx();
    if (Strindex + 1 === randString.length) {
      e.target.value = "";
      pauseTimer();
      setStrIndex(0);
      setCheck(true);
      let { val } = randomString(words, length);
      setRandomString(val);
      handleComplete();
      return;
    }
    if (e.key === "Backspace") {
      let { check } = matchString(
        randString,
        e.target.value,
        Strindex,
        correct
      );
      setCheck(check);
    } else {
      let { check, index, correctKeys } = matchString(
        randString,
        e.target.value,
        Strindex,
        correct
      );
      setCheck(check);
      setCorrect(correctKeys);
      setStrIndex(index);
    }
    settotalKeys_pressed((prev) => prev + 1);
  };

  // handleComplete function runs on a single window of completion
  const handleComplete = () => {
    const Accuracy = Math.floor((correct / totalKeys_pressed) * 100);
    const wordMinute = Math.floor(totalKeys_pressed / 5 / (seconds / 60));

    const data = {
      Accuracy,
      WordMinute: wordMinute,
    };
    handleUserResult(data, dispatch);
    // checking and calling the final completion function when the user has completed 5 minute practice
    if (seconds >= 300) {
      handlePracticeWindow();
    }
  };
  // function for handling string generation using select tag
  const handleStringGen = (e) => {
    if (e.target.value === randString) {
      e.target.value = "";
      console.log("finisded");
      return;
    }
    if (e.target.id === "words") {
      setWords(Number(e.target.value));
      let { val } = randomString(words, length);
      setRandomString(val);
    } else if (e.target.id === "length") {
      setLength(Number(e.target.value));
      let { val } = randomString(words, length);
      setRandomString(val);
    }
  };

  // function for handling handlePracticeWindow after completion of 5 minute window practice

  const handlePracticeWindow = () => {
    resetTimer();
    const data = {
      Accuracy: 0,
      WordMinute: 0,
    };
    handleUserResult(data, dispatch);
    settotalKeys_pressed(0)
    setCorrect(0)
  };

  // use effect
  useEffect(() => {
    let { val } = randomString(words, length);
    setRandomString(val);
  }, [length, words]);
  return (
    <div className="App">
      <Navbar />
      <Timer seconds={seconds} />
      <Options handleStringGen={handleStringGen} />
      <Taskinput string={randString} />
      <Keyinput handleUserInput={handleUserInput} check={check} />
      <Keyboard index={Strindex} taskStr={randString} />
      <div className="result_info">
        <div className="word_info">
          WPM:<span>{WordMinute}</span>
        </div>
        <div className="accuracy_info">
          Accuracy:<span>{Accuracy}%</span>
        </div>
      </div>
    </div>
  );
}

export default App;
