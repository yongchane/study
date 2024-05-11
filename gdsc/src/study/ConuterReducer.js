import React, { useReducer } from 'react';

//상태가 많을따 useReducer사용
//recuer함수=> 컴포넌트 밖으로 뻄
function reducer(state, action) {
  // 무조건 처음엔 state 그리고 action
  switch (action.type) {
    case 'INCREMENT':
      return { value: state.value + 1 };
    case 'DECREMENT':
      return { value: state.value - 1 };
    default:
      return state;
  }
}

const ConuterReducer = () => {
  // const [state]
  const [state, dispatch] = useReducer(reducer, { value: 0 });
  return (
    <div>
      <p>{state.value}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+1</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-1</button>
    </div>
  );
};

export default ConuterReducer;
