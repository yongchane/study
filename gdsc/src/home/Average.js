import React, { useMemo, useState } from 'react';

const getAverage = (numbers) => {
  console.log('평균값 계산중');
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  //reduce = sum 즉 합칠때만 씀
  return sum / numbers.length;
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState('');
  const onChange = (e) => {
    setNumber(e.target.value);
  };
  // 숫자를 적으면 그 숫자를 추가해주는 함수
  const onInsert = (e) => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber('');
  };
  const avg = useMemo(() => getAverage(list), [list]);
  return (
    <div>
      <input value={number} onChange={onChange} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {/* Map 객체는 키-값 쌍을 저장하는데 사용된다. */}
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>평균값:</b>
        {/* {getAverage(list)} */}
        {avg}
      </div>
    </div>
  );
};

export default Average;
