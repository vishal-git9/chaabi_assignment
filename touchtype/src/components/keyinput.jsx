import { useEffect, useRef } from "react";
import "../styles/dropdown.css";
export const Keyinput = ({ handleUserInput,check }) => {
    const Inputref = useRef(null)

    useEffect(()=>{
        if(!check){
            Inputref.current.style.border = "2px solid red"
        }else{
            Inputref.current.style.border = "2px solid #f0f0f0"
        }
    },[check])
  return (
    <div className="input_box">
      <input ref={Inputref} spellCheck="false" type="text" onKeyUp={handleUserInput} />
    </div>
  );
};