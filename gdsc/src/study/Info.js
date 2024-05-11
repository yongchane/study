import React, { useState } from 'react';

const Info = () => {
  // const [name,setName]=useState('')
  // const [nick,setNick]=useState('')
  const [form, setForm] = useState({
    name: '',
    nick: '',
  });
  const { name, nick } = form;
  //객체라서{}로 선언

  //   const onChangeName = (e) => setName(e.target.value);
  //   const onChangeNick = (e) => setNick(e.target.value);
  const onChange = (e) => {
    const nextForm = {
      ...form,
      [e.target.id]: e.target.value,
    };
    setForm(nextForm);
  };

  return (
    <div>
      <div>
        <input onChange={onChange} value={name} id="name" />
        <input onChange={onChange} value={nick} id="nick" />
      </div>

      <div>
        <div>
          <b>이름:</b>
          {name}
        </div>
      </div>
      <div>
        <b>닉네임</b>
        {nick}
      </div>
    </div>
  );
};

export default Info;
