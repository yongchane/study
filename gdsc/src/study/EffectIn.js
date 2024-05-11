import React, { useEffect, useState } from 'react';

const EffectIn = () => {
  const [name, setName] = useState('');
  const [nick, setNick] = useState('');

  // useEffect(() => {
  //   //렌더링 된 후에 훅스를 관리하는 훅스가 useEffect 따라서 마지막에 실행되는 훅스
  //   console.log('렌더링이 완료되었습니다');
  //   console.log({ name, nick });
  // }, []);
  //[]가 없으면 항상 렌더링 될때 콘솔로그에 기록 되고 []가 있으면 처음에만 뜸 (처음 마운트 될때만 따라서 있으면 성능이 올라감)

  // useEffect(() => {
  //   console.log('렌더링이 완료되었습니다');
  //   console.log({ name });
  // },[name]); // name이라는 인풋에 타자를 칠때(업데이트) 마운트 시와 name이 업데이트 될때 콘솔 로그가 뜸

  useEffect(() => {
    console.log('렌더링이 완료되었습니다');
    console.log({ name });
    return () => {
      console.log('cleanup');
      console.log(name);
    }; // return쓰면 언마운트시에 사용
  }, [name]);

  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeNickName = (e) => {
    setNick(e.target.value);
  };
  return (
    <div>
      <div>
        <input onChange={onChangeName} value={name} />
        <input onChange={onChangeNickName} value={nick} />
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

export default EffectIn;
