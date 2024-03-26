import { createBrowserRouter } from 'react-router-dom';
import { Suspense, lazy } from 'react';

const Loading = <div>Loading...</div>;
const Example1 = lazy(() => import('./study/First_ex'));
const Example2 = lazy(() => import('./study/Two_ex'));
const Example3 = lazy(() => import('./study/MyComponent'));

const studyRouter = createBrowserRouter([
  {
    path: 'study1',
    element: (
      <Suspense fallback={Loading}>
        <Example1></Example1>
      </Suspense>
    ),
  },
  {
    path: 'study2',
    element: (
      <Suspense fallback={Loading}>
        <Example2></Example2>
      </Suspense>
    ),
  },
  {
    path: 'study3',
    element: (
      <Suspense fallback={Loading}>
        <Example3>리엑트</Example3>
      </Suspense>
    ),
  },
]);
export default studyRouter;
