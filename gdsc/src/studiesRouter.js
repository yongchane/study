import { Suspense, lazy } from 'react';
const Loading = <div>Loading...</div>;
const Example1 = lazy(() => import('./study/First_ex'));
const Example2 = lazy(() => import('./study/Two_ex'));
const Example3 = lazy(() => import('./study/MyComponent'));
const Example4 = lazy(() => import('./study/EventPractice'));
const Example5 = lazy(() => import('./study/IterationSample'));
const Example6 = lazy(() => import('./study/InputSample'));
const Example7 = lazy(() => import('./study/EffectVisible'));
const Example8 = lazy(() => import('./study/Counter'));
const Example9 = lazy(() => import('./study/Info'));
const Example10 = lazy(() => import('./study/AverageCallback'));
const Example11 = lazy(() => import('./study/AverageMemo'));
const Example12 = lazy(() => import('./study/Connection'));
const Example13 = lazy(() => import('./study/ConuterReducer'));
const Example14 = lazy(() => import('./study/EffectIn'));
const Example15 = lazy(() => import('./study/InfoCustomHooks'));
const Example16 = lazy(() => import('./study/InputReducer'));
const Example17 = lazy(() => import('./study/Say'));
const Study = lazy(() => import('./study/studies'));

const studiesRouter = [
  {
    path: 'study',
    element: (
      <Suspense fallback={Loading}>
        <Study></Study>
      </Suspense>
    ),
  },
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
  {
    path: 'study4',
    element: (
      <Suspense fallback={Loading}>
        <Example4 />
      </Suspense>
    ),
  },
  {
    path: 'study5',
    element: (
      <Suspense fallback={Loading}>
        <Example5 />
      </Suspense>
    ),
  },
  {
    path: 'study6',
    element: (
      <Suspense fallback={Loading}>
        <Example6 />
      </Suspense>
    ),
  },
  {
    path: 'study7',
    element: (
      <Suspense fallback={Loading}>
        <Example7 />
      </Suspense>
    ),
  },
  {
    path: 'study8',
    element: (
      <Suspense fallback={Loading}>
        <Example8 />
      </Suspense>
    ),
  },
  {
    path: 'study9',
    element: (
      <Suspense fallback={Loading}>
        <Example9 />
      </Suspense>
    ),
  },
  {
    path: 'study10',
    element: (
      <Suspense fallback={Loading}>
        <Example10 />
      </Suspense>
    ),
  },
  {
    path: 'study11',
    element: (
      <Suspense fallback={Loading}>
        <Example11 />
      </Suspense>
    ),
  },
  {
    path: 'study12',
    element: (
      <Suspense fallback={Loading}>
        <Example12 />
      </Suspense>
    ),
  },
  {
    path: 'study13',
    element: (
      <Suspense fallback={Loading}>
        <Example13 />
      </Suspense>
    ),
  },
  {
    path: 'study14',
    element: (
      <Suspense fallback={Loading}>
        <Example14 />
      </Suspense>
    ),
  },
  {
    path: 'study15',
    element: (
      <Suspense fallback={Loading}>
        <Example15 />
      </Suspense>
    ),
  },
  {
    path: 'study16',
    element: (
      <Suspense fallback={Loading}>
        <Example16 />
      </Suspense>
    ),
  },
  {
    path: 'study17',
    element: (
      <Suspense fallback={Loading}>
        <Example17 />
      </Suspense>
    ),
  },
];
export default studiesRouter;
