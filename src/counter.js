import React, { useState } from "react";

const Counter = (props) => {
  
  const [value, setValue] = useState(0);
  let state = false;
  const increment = () => {
    setValue(value + 1);
  };
  const decrement = () => {
    setValue(value - 1);
  };
  const reset = () => {
    setValue(0);
  };
  
  if (value === 0) {
    state = true;
  }
  return (
    <div>
      <h1>Simple Counter</h1>
      <div className="mainItem">
        <div className="value">
          <p>{value}</p>
        </div>
        <div className="buttons">
          <div>
            <button className="main-buttons inc" onClick={increment}>increase</button>
          </div>
          <div>
            <button className="main-buttons dec" onClick={decrement} disabled={state}>
              decrease
            </button>
          </div>
          <div>
            <button className="main-buttons reset" onClick={reset}>reset</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
