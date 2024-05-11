import React from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import './PageStyle/Layoutstyle.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

const Layout = () => {
  const navigate = useNavigate();
  return (
    <div>
      <header className="head1">
        <h1>
          <Link to="/home">React Page</Link>
        </h1>
      </header>
      <main>
        <Outlet />
        <br></br>
        <button
          type="button"
          class="btn btn-outline-secondary"
          onClick={() => navigate(-1)}
        >
          back
        </button>
        <div className="like-content"></div>
        <div className="like-content">
          <span>
            Did you like this page? Press like to make it easier for others to
            see
          </span>

          <button className="btn-secondary like-review">
            <i className="fa fa-heart" aria-hidden="true"></i> Like
          </button>
        </div>
      </main>
      <div className="foot">
        <footer className="footer-content">
          <h3>yongchan page</h3>
        </footer>
      </div>
    </div>
  );
};

export default Layout;
