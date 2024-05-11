import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './PageStyle/ListStyle.scss';
const studies = () => {
  return (
    <div>
      <Outlet />
      <h1>멋사 스터디 수업내용</h1>
      <section>
        <ul className="numbered">
          <li>
            <Link to="/study1">1번예제</Link>
          </li>
          <li>
            <Link to="/study2">2번예제</Link>
          </li>
          <li>
            <Link to="/study3">3번예제</Link>
          </li>
          <li>
            <Link to="/study4">4번예제</Link>
          </li>
          <li>
            <Link to="/study5">5번예제</Link>
          </li>
          <li>
            <Link to="/study6">6번예제</Link>
          </li>
          <li>
            <Link to="/study7">7번예제</Link>
          </li>
          <li>
            <Link to="/study8">8번예제</Link>
          </li>
          <li>
            <Link to="/study9">9번예제</Link>
          </li>
          <li>
            <Link to="/study10">10번예제</Link>
          </li>
          <li>
            <Link to="/study11">11번예제</Link>
          </li>
          <li>
            <Link to="/study12">12번예제</Link>
          </li>
          <li>
            <Link to="/study13">13번예제</Link>
          </li>
          <li>
            <Link to="/study14">14번예제</Link>
          </li>
          <li>
            <Link to="/study15">15번예제</Link>
          </li>
          <li>
            <Link to="/study16">16번예제</Link>
          </li>
          <li>
            <Link to="/study17">17번예제</Link>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default studies;
