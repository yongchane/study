import React, { useRef, useState } from 'react';

function InputSample() {
  const [inputs, setInputs] = useState({
    name: '',
    nickname: '',
  });
  const nameInput = useRef();

  const { name, nickname } = inputs;

  const onChange = (e) => {
    console.log(e);
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const onReset = () => {
    setInputs({
      name: '',
      nickname: '',
    });
    nameInput.current.focus();
  };

  return (
    <div>
      <input
        name="name"
        placeholder="이름"
        onChange={onChange}
        value={name}
        ref={nameInput}
        // 초기화하면 커서가 깜빡이게 하는 기능
      />

      <input
        name="nickname"
        placeholder="닉네임"
        onChange={onChange}
        value={nickname}
      />

      <button onClick={onReset}>초기화</button>
      <div>
        <b> 값:</b>
        {name} ({nickname})
      </div>
    </div>
  );
}

export default InputSample;
