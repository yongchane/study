import React from 'react';
import { useParams } from 'react-router-dom';

const Article = () => {
  const { id } = useParams();
  //useParams 훅을 사용하여 현재 URL에서 id 파라미터의 값을 추출합니다. 예를 들어, 사용자가 /articles/1 URL에 접속했다면, id는 '1'이 됌
  console.log();
  return (
    <div>
      <h2>게시글{id}</h2>
    </div>
  );
};

export default Article;
