//import "./ProgressBar.css";

function ProgressBar({ maxValue, onSetCurrentSubArrayIndex, value }) {
  const onChangeHandler = () => {
    const x = document.getElementById("progressBar").value;
    onSetCurrentSubArrayIndex(x);
  };

  return (
    <div style={{ width: "100%" }}>
      <input
        id="progressBar"
        type="range"
        // ref="inputRangeRef"
        onChange={onChangeHandler}
        min="0"
        max={maxValue - 1}
        step="1"
        value={value}
        style={{ width: "80%" }}
      />
    </div>
  );
}

export default ProgressBar;
