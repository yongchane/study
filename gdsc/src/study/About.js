import React from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

const About = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const detail = searchParams.get('detail');
  const mode = searchParams.get('mode');

  const onToggleDetail = () => {
    setSearchParams({ mode, detail: detail === 'true' ? false : true });
  };
  //mode는 그대로 유지하고 detail값이 true면 false로 변환하는 컴포넌트

  const onIncrease = () => {
    const nextMode = mode === null ? 1 : parseInt(mode) + 1;
    setSearchParams({ mode: nextMode, detail });
  };
  //쿼리스트링은 내가 선택한 옵션같은것이다(?~~~~)?뒤에 존재하는 링크 같을걸 쿼리스트링
  //url 파라미터는 상품과 같이 변하지 않는 고유한것

  return (
    <div>
      <h1>소개</h1>
      <p>리액트 라우터를 사용해보는 프로젝트</p>
      {/* <p>퀴리스트링:{decodeURIComponent(location.search)}</p> */}
      <p>detail:{detail}</p>
      <p>mode:{mode}</p>
      <button onClick={onToggleDetail}>Toggle detail</button>
      <button onClick={onIncrease}>mode+1</button>
    </div>
  );
};

export default About;
