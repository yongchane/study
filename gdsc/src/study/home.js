import React from 'react';
import { Link } from 'react-router-dom';
import './PageStyle/ListStyle.scss';

const home = () => {
  return (
    <div>
      <header className="head">
        <div>
          <h3>yongchan React page</h3>
          <p>
            Hi, my name hyunyongchan. This page is my first react-page. Thank
            you for watching this page
          </p>
        </div>
        {/* <img src="https://picsum.photos/250/250" alt="..." /> */}
      </header>
      <section>
        <h1>홈</h1>
        <br></br>
        <ul className="numbered">
          <li>
            <Link to="/about"> 소개</Link>
            {/* Link to 다음에 들어갈 경로는 라우터에 있는 path에 있는 걸로 연결 */}
          </li>
          <li>
            <Link to="/profile/developer1">페이지 주인</Link>
          </li>
          <li>
            <Link to="/profile/developer2">인물</Link>
          </li>
          <li>
            <Link to="/articles">게시글</Link>
          </li>
          <li>
            <Link to="/study">수업내용</Link>
          </li>
        </ul>
        {/* a태그와 같은 역할인데 a태그는 mpa에서 써서 다른 페이지를 띄우는 반면 link는 라우터 돔내에서 사용하여 컴포넌트만 바꿔쳐서 재랜더링 ㄴㄴ */}
      </section>
    </div>
  );
};

export default home;
