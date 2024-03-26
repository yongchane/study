// import './App.css';

import { RouterProvider } from 'react-router-dom';
import studyRouter from './router';
import Say from './study/Say';
function App() {
  return (
    <>
      <RouterProvider router={studyRouter} />
      <Say></Say>
    </>
  );
}

export default App;
// 한개만 있을때 default 두개면 안써도됌
