import React, { useReducer } from 'react';

function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value,
  };
}

const useIn = (Initial) => {
  const [state, dispatch] = useReducer(reducer, Initial);
  const onChane = (e) => {
    dispatch(e.target);
    // e.target.value랑 e.target이랑 뭐가 다른거임?
    // e.target은 이벤트가 발생한 요소에 대한 전체 참조를, e.target.value는 해당 요소의 값만을 반환
    //e.target을 사용하여 이벤트가 발생한 요소의 name과 value를 reducer 함수로 전달하고, 상태를 업데이트
  };
  return [state, onChane];
};

export default useIn;
