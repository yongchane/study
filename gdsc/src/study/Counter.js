import React, { useState } from 'react';

const Counter = () => {
  const [value, setValue] = useState(0);
  //   const onChangeP = (e) => {
  //     setValue(value + 1);
  //   };
  //   const onChangeM = (e) => {
  //     setValue(value - 1);
  //   };

  // onClick안에는 e가 안들어감
  return (
    <div>
      <p>
        현재 카운터 값은<b>{value}</b>
      </p>
      {/* <button onClick={onChangeP}>+1</button>
      <button onClick={onChangeM}>-1</button> */}
      <button onClick={() => setValue(value + 1)}>+1</button>
      <button onClick={() => setValue(value - 1)}>-1</button>
    </div>
  );
};

export default Counter;
