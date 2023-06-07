import "../styles/dropdown.css"
export const Taskinput = ({ string }) => {
  // task input for showing user task readOnly
    return (
      <div className="input_box">
        <input type="text" value={string} readOnly />
      </div>
    );
  };
  