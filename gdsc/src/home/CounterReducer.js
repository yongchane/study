import React, { useReducer, useState } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'INCREASE':
      return { value: state.value + 1 };
    case 'DECREASE':
      return { value: state.value - 1 };
    default:
      return state;
  }
}
const CounterReducer = () => {
  const [state, dispatch] = useReducer(reducer, { value: 0 });

  return (
    <div>
      <p>{state.value}</p>
      <button onClick={() => dispatch({ type: 'INCREASE' })}>+1</button>
      <button onClick={() => dispatch({ type: 'DECREASE' })}>-1</button>
    </div>
  );
};

export default CounterReducer;
