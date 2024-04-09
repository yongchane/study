import React, { useState } from 'react';

const IterationSample = () => {
  const [names, setNames] = useState([
    { id: 1, text: '눈사람' },
    { id: 2, text: '얼음' },
    { id: 3, text: '눈' },
    { id: 4, text: '바람' },
  ]);
  // const names = ['눈사람', '얼음', '눈', '바람', '사람'];
  // const nameList = names.map((name, index) => <li key={index}>{name}</li>);
  const [inputText, setInputText] = useState('');
  const [nextId, setNextId] = useState(5);

  const onChange = (e) => setInputText(e.target.value);
  const onClick = () => {
    const nextNames = names.concat({
      //concat을 사용하여 내가 입력한 문자를 추가 할 수 있다
      id: nextId,
      text: inputText,
    });
    setNextId(nextId + 1);
    setNames(nextNames);
    setInputText('');
  };

  const onRemove = (id) => {
    const nextNames = names.filter((name) => name.id !== id);
    //filter을 사용하면 자기가 원하는 것만 필터링 됌
    //더블 클릭하면 그 값이 같으니까 다른 값만 내비두고 같은 값만 없앤다
    //삭제하는 로직은 .filter((name) => name.id !== id);
    // 4!==4 false 4!==5 true

    setNames(nextNames);
  };

  const nameList = names.map((name) => (
    <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
      {/* onRemve만 쓰면 바로 렌더링 되기 때문에 ()=> onRemove(name.id)라고 선헌 하면 압력 함수가 호출되면onRemove(name.id)거 살행됌 */}
      {name.text}
    </li>
  ));
  // name,index   key={index}
  //어떤 함수에 다른 함수를 인자로(파라미터로) 넣는다 -> 콜백함수
  // index에 고유 속성(숫자 like 0,1,2,3...)이 들어가서 key ={index}로 불러옴 그러면 더 빨리 불러 올 수 있음

  // const onKeyPress = (e) => {
  //   if (e.key === 'Enter') {
  //     onClick();
  //   }
  // };
  const onForm = (e) => {
    onClick();
    e.preventDefault();
  };
  //onKeyPress대신 form테그를 통해 엔터 기능을 활성화함 근데 서버로 보내기 때문에 그걸 막기위해  e.preventDefault();를 정의해줌

  return (
    <form onSubmit={onForm}>
      <input value={inputText} onChange={onChange} />
      <button type="submit"> 추가</button>
      <ul>{nameList}</ul>
    </form>
  );
};

export default IterationSample;
// 컴포넌트가 하나니가 default를 사용
