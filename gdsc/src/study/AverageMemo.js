import React, { useMemo, useState } from 'react';
import { Value } from 'sass';

const getAverage = (number) => {
  console.log('평균값 계산 중...');
  if (number.length === 0) return 0;
  const sum = number.reduce((a, b) => a + b);
  //reduce = sum 즉 합칠때만 씀
  return sum / number.length;
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNum] = useState('');

  const onChange = (e) => {
    setNum(e.target.value);
  };
  const onInsert = (e) => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNum('');
  };

  const avg = useMemo(() => getAverage(list), [list]);
  //usememo는 값을 최적호함
  // usecallback은 함수를 최적화함
  return (
    <div>
      <input value={number} onChange={onChange}></input>
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>평균</b>
        {avg}
        {/* 등록될때만 렌더링 되기되 */}
        {/* {getAverage(list)} 칠때마다 렌더링 됨됨 */}
      </div>
    </div>
  );
};

export default Average;
