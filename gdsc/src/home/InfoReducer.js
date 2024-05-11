import React, { useReducer } from 'react';

function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value,
  };
}

const InfoReducer = () => {
  const [state, dispatch] = useReducer(reducer, {
    name: '',
    nickname: '',
  });
  const { name, nickname } = state;
  const onChange = (e) => {
    dispatch(e.target);
  };
  return (
    <div>
      <input name="name" value={name} onChange={onChange}></input>
      <input name="nickname" value={nickname} onChange={onChange}></input>
      {/* input일때는 onChange쓰임 나머지는 거의 onClick */}
      <p>이름</p>
      {name}
      <p>name</p>
      {nickname}
    </div>
  );
};

export default InfoReducer;
