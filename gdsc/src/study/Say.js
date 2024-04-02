import React, { useState } from 'react';

const Say = () => {
  const [message, setMessage] = useState('');
  const onClickEnter = () => setMessage('안녕~');
  const onClickLeave = () => setMessage('빠이');
  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1>{message}</h1>
    </div>
  );
};

export default Say;

// () =>{return} 안에 return을 써야지 로직으로 안가고 원하는데로 진행됌
// -------------
//  () =>()
//  ()=> 위 세개 차이점 공부해보기
