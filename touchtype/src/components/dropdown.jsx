export const Dropdown = ({ values, id,handleStringGen }) => {
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