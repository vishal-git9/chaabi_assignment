import '../styles/timer.css'; // Import the CSS file for styling
const Timer = ({seconds}) => {
  // Convert seconds to minutes and seconds format
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  return (
    <div className="timer">
      <div className="timer__digits">
        {minutes.toString().padStart(2, '0')}:
        {remainingSeconds.toString().padStart(2, '0')}
      </div>
    </div>
  );
};

export default Timer;
