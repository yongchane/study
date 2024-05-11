import { createBrowserRouter } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Layout from './study/Layout';
import mainRouter from './mainRouter';
import studiesRouter from './studiesRouter';
const Home1 = lazy(() => import('./study/home'));
const Loading = <div>Loading...</div>;

const studyRouter = createBrowserRouter([
  {
    path: '/', // 루트 경로에 대한 설정
    element: (
      <Suspense fallback={Loading}>
        <Layout />
      </Suspense>
    ),
    children: [
      ...mainRouter,
      ...studiesRouter, // mainRouter 배열을 여기에 확장
      // Home1 컴포넌트를 렌더링하는 라우트를 추가
      {
        path: 'home',
        element: (
          <Suspense fallback={Loading}>
            <Home1 />
          </Suspense>
        ),
      },
    ],
  },
]);
export default studyRouter;
