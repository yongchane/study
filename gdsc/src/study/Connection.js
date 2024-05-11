import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Value } from 'sass';

const Connection = () => {
  const [data, setData] = useState('');
  const [input, setInput] = useState('');
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // const { data } = await axios.get('http://localhost:8080');
    const { data } = await axios.post('http://localhost:8080', {
      title: '하',
      date: '오늘',
    });
    setData(data);
  };

  const onChange = (e) => {
    setInput(e.target.value);
  };
  return (
    <div>
      <input onChange={onChange} />
      <div>
        응답데이터
        {data}
      </div>
    </div>
  );
};

export default Connection;
