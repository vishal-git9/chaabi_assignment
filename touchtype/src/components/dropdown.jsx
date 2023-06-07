export const Dropdown = ({ values,id,handleStringGen }) => {
  // taking props as array of options in values, id of select tag and function 
    return (
      <select name="" id={id} onChange={handleStringGen}>
        {values?.map((el, i) => (
          <option key={i} value={el}>
            {el}
          </option>
        ))}
      </select>
    );
  };