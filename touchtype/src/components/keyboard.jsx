import { useEffect, useRef } from "react"
import "../styles/keyboard.css"
import { matchKeyboard } from "../logic_functions/match_keyboard"
export const Keyboard = ({index=0,taskStr}) => {
    const first_row_ref = useRef(null)
    const second_row_ref = useRef(null)
    const third_row_ref = useRef(null)
    const fourth_row_ref = useRef(null)
    const fifth_row_ref = useRef(null)
    useEffect(()=>{
      matchKeyboard([first_row_ref.current,second_row_ref.current,third_row_ref.current,fourth_row_ref.current,fifth_row_ref.current],taskStr,index)
    },[index,taskStr])
  return (
    <div className="keyboard">
        <div className="row" id='row_1' ref={first_row_ref}>
          <div className="key backtick" id="backtick">`</div>
          <div className="key green" id='1'>1</div>
          <div className="key green" id='2'>2</div>
          <div className="key blue" id='3'>3</div>
          <div className="key blue" id='4'>4</div>
          <div className="key pink" id='5'>5</div>
          <div className="key orange" id='6'>6</div>
          <div className="key yellow" id='7'>7</div>
          <div className="key pink" id='8'>8</div>
          <div className="key blue" id='9'>9</div>
          <div className="key green" id='0'>0</div>
          <div className="key green" id='-'>-</div>
          <div className="key green" id='='>=</div>
          <div className="key backspace" id='back'>Backspace</div>
        </div>
        <div className="row" ref={second_row_ref}>
          <div className="key tab" id='key_tab'>Tab</div>
          <div className="key green" id='Q'>Q</div>
          <div className="key blue" id='W'>W</div>
          <div className="key pink" id='E'>E</div>
          <div className="key orange" id='R'>R</div>
          <div className="key orange" id='T'>T</div>
          <div className="key yellow" id='Y'>Y</div>
          <div className="key yellow" id='U'>U</div>
          <div className="key pink" id='I'>I</div>
          <div className="key blue" id='O'>O</div>
          <div className="key green" id='P'>P</div>
          <div className="key green" id='['>[</div>
          <div className="key green" id=']'>]</div>
          <div className="key green" id='\'>\</div>
        </div>
        <div className="row" ref={third_row_ref}>
          <div className="key capslock" id='key_capslock'>Caps Lock</div>
          <div className="key green" id='A'>A</div>
          <div className="key blue" id='S'>S</div>
          <div className="key pink" id='D'>D</div>
          <div className="key orange" id='F'>F</div>
          <div className="key orange" id='G'>G</div>
          <div className="key yellow" id='H'>H</div>
          <div className="key yellow" id='J'>J</div>
          <div className="key pink" id='K'>K</div>
          <div className="key blue" id='L'>L</div>
          <div className="key green" id=';'>;</div>
          <div className="key green" id="'">'</div>
          <div className="key enter" id='enter'>Enter</div>
        </div>
        <div className="row" ref={fourth_row_ref}>
          <div className="key shift" id='key_shift'>Shift</div>
          <div className="key green" id='Z'>Z</div>
          <div className="key blue" id='X'>X</div>
          <div className="key pink" id='C'>C</div>
          <div className="key orange" id='V'>V</div>
          <div className="key orange" id='B'>B</div>
          <div className="key yellow" id='N'>N</div>
          <div className="key yellow" id='M'>M</div>
          <div className="key pink" id=','>,</div>
          <div className="key blue" id='.'>.</div>
          <div className="key green" id='/'>/</div>
          <div className="key shift" id='key_shift'>Shift</div>
        </div>
        <div className="row" ref={fifth_row_ref}>
          <div className="key space" id='key_space'>Space</div>
        </div>
      </div>
  )
}
