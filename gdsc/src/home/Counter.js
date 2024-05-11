import React, { useState } from 'react';
import { Value } from 'sass';

const Counter = () => {
  const [value, setValue] = useState(0);

  return (
    <div>
      <p>{value}</p>
      <button onClick={() => setValue(value + 1)}>+1</button>
      <button onClick={() => setValue(value - 1)}> -1 </button>
    </div>
  );
};

export default Counter;
