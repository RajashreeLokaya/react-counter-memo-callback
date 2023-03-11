import React, { useCallback, useMemo, useState } from "react";
import CustomButton from "../utility";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = useCallback(() => {
    setCount((c) => c + 1);
  }, []);
  const handleDecrement = useCallback(() => {
    setCount((c) => c - 1);
  }, []);

  const doubleVal = useMemo(() => {
    return count * 2;
  }, [count]);

  return (
    <>
      <CustomButton
        className="decrement"
        forName="decrement"
        onButtonClick={handleDecrement}
      />
      <span>{count}</span>
      <CustomButton
        className="increment"
        forName="increment"
        label="increment"
        onButtonClick={handleIncrement}
      />
      <div>doble value is {doubleVal}</div>
    </>
  );
};

export default Counter;
