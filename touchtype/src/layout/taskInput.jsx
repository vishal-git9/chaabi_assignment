import "../styles/dropdown.css"
export const Taskinput = ({ string }) => {
    return (
      <div className="input_box">
        <input type="text" value={string} readOnly />
      </div>
    );
  };
  