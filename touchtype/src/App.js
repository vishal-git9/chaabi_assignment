import { useEffect, useState } from 'react';
import { Keyboard } from './components/keyboard';
import { Options } from './layout/options';
import './styles/App.css';
import { randomString } from './logic_functions/stringGen';
import { Taskinput } from './layout/taskInput';
import { Keyinput } from './components/keyinput';
import { matchString } from './logic_functions/match_string';

function App() {

  // app states
  const [randString, setRandomString] = useState("");
  const [words,setWords] = useState(1)
  const [length,setLength] = useState(1)
  const [check,setCheck] = useState(true)

  // calling the handleuserInput function

  const handleUserInput = (e)=>{
    let res = matchString(randString,e.target.value)
    setCheck(res)
  }


  // function for handling string generation
  const handleStringGen = (e)=>{
    if(e.target.id==="words"){
      setWords(Number(e.target.value))
      let {val} = randomString(words,length)
      setRandomString(val);
    }else if(e.target.id==="length"){
      setLength(Number(e.target.value))
      let {val} = randomString(words,length)
      setRandomString(val);
    }
  }


  // use effect
  useEffect(() => {
    let { val } = randomString(words,length);
    setRandomString(val);
  }, [length,words]);
  return (
    <div className="App">
      <Options handleStringGen={handleStringGen}/>
      <Taskinput string={randString} />
      <Keyinput handleUserInput={handleUserInput} check={check}/>
      <Keyboard/>
    </div>
  );
}

export default App;
