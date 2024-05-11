import React from 'react';
import useIn from '../hooks/useIn';

const InfoHook = () => {
  const [state, onChane] = useIn({ name: '', nickname: '' });
  const { name, nickname } = state;
  return (
    <div>
      <input name="name" value={name} onChange={onChane}></input>
      <input name="nickname" value={nickname} onChange={onChane}></input>
      <div>
        <b>이름</b>
        {name}
      </div>
      <div>
        <b>닉네임</b>
        {nickname}
      </div>
    </div>
  );
};

export default InfoHook;
