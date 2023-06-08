import React from 'react'
import { Dropdown } from '../components/dropdown'

export const ChoiceOptions = ({handleChoice}) => {
  return (
    <div className="options_box">
      <div className="option_one">
        <h3>Select Choice</h3>
        <Dropdown values={["Sentence","Letters"]} id="choice" handleStringGen={handleChoice}/>
      </div>
    </div>
  )
}
