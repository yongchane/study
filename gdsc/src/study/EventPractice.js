// import React, { useState } from 'react';

// import EventPractice from './EventPractice';

// const EventPractice = () => {
//   const [username, setUsername] = useState('');
//   const [message, setMessage] = useState('');

//   const onChangeUsername = (e) => setUsername(e.target.value);
//   const onChangeMessage = (e) => setMessage(e.target.value);

//   const onClick = () => {
//     alert(username + ':' + message);
//     setUsername('');
//     setMessage('');
//   };

//   const onKeyPress = (e) => {
//     if (e.key === 'Enter') {
//       onClick();
//     }
//   };

//   return (
//     <div style={{ display: 'flex', flexDirection: 'column' }}>
//       <h1>이벤트 연습</h1>

//       <input
//         type="text"
//         name="username"
//         value={username}
//         placeholder="사용자명"
//         style={{ width: '150px' }}
//         onChange={onChangeUsername} //input 은 onChange고 button은 onClick
//       />
//       {/* { width: '150px' } 해당 부분은 객체라서 위에 const style ={ width: '150px' }라고 쓰임 */}
//       <input
//         type="text"
//         name="message"
//         value={message}
//         placeholder="아무거나 입력해 보세요"
//         style={{ width: '150px' }}
//         onChange={onChangeMessage}
//         onKeyPress={onKeyPress}
//       />
//       <button style={{ width: '150px' }} onClick={onClick}>
//         확인
//       </button>
//     </div>
//   );
// };

// export default EventPractice;

//업그래이드 버전

import { useState } from 'react';
import './EventPractice.scss';

const EventPractice = () => {
  const [form, setForm] = useState({
    username: '', //username이 key고 ''가 value이다
    message: '',
  });
  //수많은 const를 합쳐주는 기능
  const { username, message } = form;
  const onChange = (e) => {
    const nextForm = {
      ...form,
      [e.target.name]: e.target.value,
      //name이 value가 바뀜으로서 밑에 name으로 정의된거로 바뀌므로 유동적으로 바뀜
      //value는 지정한 값이라고 생각하면 편함
    };
    setForm(nextForm);
  };

  const onClick = () => {
    //click은 e를 안넣고 onchange onkeypress같은건 넣음
    alert(username + ':' + message);
    setForm({
      username: '',
      message: '',
    });
  };

  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      onClick();
    }
  };

  return (
    <div className="templte">
      <h1>이벤트 연습</h1>

      <input
        type="text"
        name="username"
        value={username}
        placeholder="사용자명"
        style={{ width: '150px' }}
        onChange={onChange} //input 은 onChange고 button은 onClick
      />
      {/* { width: '150px' } 해당 부분은 객체라서 위에 const style ={ width: '150px' }라고 쓰임 */}
      <input
        type="text"
        name="message"
        value={message}
        placeholder="아무거나 입력해 보세요"
        style={{ width: '150px' }}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <button style={{ width: '150px' }} onClick={onClick}>
        확인
      </button>
    </div>
  );
};

export default EventPractice;
