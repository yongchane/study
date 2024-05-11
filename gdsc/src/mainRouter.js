import { Suspense, lazy } from 'react';
import Home from './study/home';
import studiesRouter from './studiesRouter';
const Loading = <div>Loading...</div>;
const About = lazy(() => import('./study/About'));
const Articles = lazy(() => import('./study/Articles'));
const Article = lazy(() => import('./study/Article'));
const Profile = lazy(() => import('./study/Profile'));
const Study = lazy(() => import('./study/studies'));
//컴포넌트 취급하지 말고 객체 취급해야해서 =()=>가 아니라 =[]임
const mainRouter = [
  {
    path: '',
    element: (
      <Suspense fallback={Loading}>
        <Home />
      </Suspense>
    ),
  },
  // {
  //   path: 'study',
  //   element: (
  //     <Suspense fallback={Loading}>
  //       <Study></Study>
  //     </Suspense>
  //   ),
  //   children: studiesRouter,
  // },
  {
    path: 'about',
    element: (
      <Suspense fallback={Loading}>
        <About />
      </Suspense>
    ),
  },
  {
    path: 'profile/:username',
    element: (
      <Suspense fallback={Loading}>
        <Profile />
      </Suspense>
    ),
  },
  {
    path: 'articles',
    element: (
      <Suspense fallback={Loading}>
        <Articles />
      </Suspense>
    ),
    children: [
      {
        path: ':id',
        element: (
          <Suspense fallback={Loading}>
            <Article />
          </Suspense>
        ),
      },
    ],
  },
];

export default mainRouter;
