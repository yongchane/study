import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './PageStyle/ListStyle.scss';
const Articles = () => {
  return (
    <div>
      <Outlet />
      <h2>게시글</h2>
      {/* children을 쓰기 위헤 outlet쓰기 */}
      <section>
        <ul className="numbered">
          <li>
            <Link to="/articles/1">게시글1</Link>
          </li>
          <li>
            <Link to="/articles/2">게시글2</Link>
          </li>
          <li>
            <Link to="/articles/3">게시글3</Link>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Articles;
