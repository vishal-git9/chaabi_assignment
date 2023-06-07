import { useEffect, useRef } from "react";
import "../styles/dropdown.css";
import useSound from "use-sound";
export const Keyinput = ({ handleUserInput,check }) => {
    const Inputref = useRef(null)
    const [playWronfx] = useSound("./wrong.wav")
    useEffect(()=>{
        if(!check){
          playWronfx()
            Inputref.current.style.border = "2px solid red"
        }else{
            Inputref.current.style.border = "2px solid #f0f0f0"
        }
    },[check,playWronfx])
  return (
    <div className="input_box">
      <input ref={Inputref} spellCheck="false" type="text" onKeyUp={handleUserInput} />
    </div>
  );
};