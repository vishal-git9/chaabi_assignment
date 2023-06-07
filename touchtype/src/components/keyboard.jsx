import React from 'react'
import "../styles/keyboard.css"
export const Keyboard = () => {
  return (
    <div className="keyboard">
        <div className="row">
          <div className="key backtick">`</div>
          <div className="key green">1</div>
          <div className="key green">2</div>
          <div className="key blue">3</div>
          <div className="key blue">4</div>
          <div className="key pink">5</div>
          <div className="key orange">6</div>
          <div className="key yellow">7</div>
          <div className="key pink">8</div>
          <div className="key blue">9</div>
          <div className="key green">0</div>
          <div className="key green">-</div>
          <div className="key green">=</div>
          <div className="key backspace">Backspace</div>
        </div>
        <div className="row">
          <div className="key tab">Tab</div>
          <div className="key green">Q</div>
          <div className="key blue">W</div>
          <div className="key pink">E</div>
          <div className="key orange">R</div>
          <div className="key orange">T</div>
          <div className="key yellow">Y</div>
          <div className="key yellow">U</div>
          <div className="key pink">I</div>
          <div className="key blue">O</div>
          <div className="key green">P</div>
          <div className="key green">[</div>
          <div className="key green">]</div>
          <div className="key green">\</div>
        </div>
        <div className="row">
          <div className="key capslock">Caps Lock</div>
          <div className="key green">A</div>
          <div className="key blue">S</div>
          <div className="key pink">D</div>
          <div className="key orange">F</div>
          <div className="key orange">G</div>
          <div className="key yellow">H</div>
          <div className="key yellow">J</div>
          <div className="key pink">K</div>
          <div className="key blue">L</div>
          <div className="key green">;</div>
          <div className="key green">'</div>
          <div className="key enter">Enter</div>
        </div>
        <div className="row">
          <div className="key shift">Shift</div>
          <div className="key green">Z</div>
          <div className="key blue">X</div>
          <div className="key pink">C</div>
          <div className="key orange">V</div>
          <div className="key orange">B</div>
          <div className="key yellow">N</div>
          <div className="key yellow">M</div>
          <div className="key pink">,</div>
          <div className="key blue">.</div>
          <div className="key green">/</div>
          <div className="key shift">Shift</div>
        </div>
        <div className="row">
          <div className="key space">Space</div>
        </div>
      </div>
  )
}
