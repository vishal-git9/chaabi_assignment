import { Dropdown } from "../components/dropdown"; //dropdown to select required words and length for practice

export const Options = ({handleStringGen}) => {
  return (
    <div className="options_box">
      <div className="option_one">
        <h3> Select words</h3>
        <Dropdown values={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} id="words" handleStringGen={handleStringGen}/>
      </div>
      <div className="option_two">
        <h3> Select length</h3>
        <Dropdown values={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} id="length" handleStringGen={handleStringGen} />
      </div>
    </div>
  );
};
