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

function App() {
  // app states
  const [randString, setRandomString] = useState("");  // intialize the random generate strings for task
  const [words, setWords] = useState(4); // intialise the no of words to be shown in a string
  const [length, setLength] = useState(4); // intialize the no of strings to be there in task
  const [check, setCheck] = useState(true); // intialize the checking the state for correct words
  const [Strindex, setStrIndex] = useState(0); // intialize the strIndex to know the index of the last correct word


  const [correct,setCorrect] = useState(0) // intialize the correct to check the correct typed keyword
  const [totalKeys_pressed,settotalKeys_pressed] = useState(0) // intialize the totalkeys pressed by user in whole window of 5 minutes

  // using the custom useTimer hook for timer 

  const [seconds, resetTimer, pauseTimer, resumeTimer] = useTimer(0)

  // intialising the accuracy and words per minute in a window of 5 minutes

  const [accuracy,setAccuracy] = useState(0)
  const [wordsMinute,setWordsMinute] = useState(0)



  // calling the handleuserInput function that checks and maintains every user input action  

  const handleUserInput = (e) => {
    resumeTimer()
    if(Strindex+1===randString.length){
      e.target.value = ""
      pauseTimer()
      setStrIndex(0);
      setCheck(true);
      let { val } = randomString(words, length);
      setRandomString(val); 
      handleComplete()
      return;
    }
    if(e.key==="Backspace"){
      let { check } = matchString(randString, e.target.value, Strindex,correct);
      setCheck(check);
    }else{
      let { check, index,correctKeys } = matchString(randString, e.target.value, Strindex,correct);
      setCheck(check);
      setCorrect(correctKeys)
      setStrIndex(index);
    }
    settotalKeys_pressed((prev)=>prev+1)
  };



  // handleComplete function runs on a single window of completion
  const handleComplete = ()=>{
    const Accuracy = Math.floor((correct/ totalKeys_pressed) * 100)
    const wordMinute = Math.floor((totalKeys_pressed/5)/(seconds / 60))
    setAccuracy(Accuracy)
    setWordsMinute(wordMinute)

    // checking and calling the final completion function when the user has completed 5 minute practice
    if(seconds>=300){
      handlePracticeWindow()
    }
  }
  // function for handling string generation using select tag
  const handleStringGen = (e) => {
    if(e.target.value === randString){
      e.target.value = ""
      console.log("finisded")
      return
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

  const handlePracticeWindow = ()=>{
    resetTimer()
    setAccuracy(0)
    setWordsMinute(0)
  }

  // use effect
  useEffect(() => {
    let { val } = randomString(words, length);
    setRandomString(val);
  }, [length, words]);
  return (
    <div className="App">
      <Navbar/>
      <Timer seconds={seconds}/>
      <Options handleStringGen={handleStringGen} />
      <Taskinput string={randString} />
      <Keyinput handleUserInput={handleUserInput} check={check}/>
      <Keyboard index={Strindex} taskStr={randString} />
      <div className="result_info">
        <div>
          WPM:<span>0</span>
        </div>
        <div>
          Accuracy:<span>0</span>
        </div>
      </div>
    </div>
  );
}

export default App;
