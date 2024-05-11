import React, { useEffect, useState } from 'react';

const Info1 = () => {
  const [value, setValue] = useState('');
  const [name, setName] = useState('');
  useEffect(() => {
    console.log('렌더링이 완료되었습니다');
    console.log({
      value,
      name,
    });
  }, [name]);
  const onClickSetValue = (e) => {
    setValue(e.target.value);
  };
  const onClickSetName = (e) => {
    setName(e.target.value);
  };

  return (
    <div>
      <input value={value} onChange={onClickSetValue}></input>
      <input value={name} onChange={onClickSetName}></input>
      {/* input일때는 onChange쓰임 나머지는 거의 onClick */}
      <p>이름</p>
      {value}
      <p>name</p>
      {name}
    </div>
  );
};

export default Info1;
