import React from "react";

const Counter = () => {
  return (
    <div>
      <h3 data-testid="counter">My counter</h3>
    </div>
  );
};

const style = {
  counter: {
    border: "1px solid gray",
    padding: "10px",
  },
};

export default Counter;
