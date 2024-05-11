// import './App.css';

import { RouterProvider } from 'react-router-dom';
import studyRouter from './router';
import AverageRef from './home/AverageRef';
import AverageCallback from './home/AverageCallback';
import InfoHook from './home/InfoHook';

function App() {
  return (
    <>
      <RouterProvider router={studyRouter} />
    </>
  );
}

export default App;
// 한개만 있을때 default 두개면 안써도됌
