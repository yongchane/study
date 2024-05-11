// import React, { useState } from 'react';
// import axios from 'axios';

// const App1 = () => {
//   const [data, setData] = useState(null);
//   const onClick = async () => {
//     try {
//       const response = await axios.get(
//         'https://newsapi.org/v2/top-headlines?country=kr&apiKey=e6a9b70aea5a4dd1b265f13208bebe74'
//       );
//       setData(response.data);
//     } catch (e) {
//       console.log(e);
//     }
//     // axios
//     //   .get('https://jsonplaceholder.typicode.com/todos/1')
//     //   .then((response) => {
//     //     setData(response.data);
//     //   });
//     // axios.get 함수를 사용하였다. 이 함수는 파라미터로 전달된 주소에 GET요청을 해 준다.
//     //그리고 이에 대한 결과는 .then을 통해 비동기적으로 확인 할 수 있다.
//   };
//   return (
//     <div>
//       <div>
//         <button onClick={onClick}>불러오기</button>
//       </div>
//       {data && <textarea rows={7} value={JSON.stringify(data, null, 2)} />}
//     </div>
//   );
// };
// export default App1;
import NewList from './NewList';
import Categories from './Categories';
import { useCallback, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import NewsPage from './pages/NewsPage';

const App = () => {
  // const [category, setCategory] = useState('all');
  // const onSelect = useCallback((category) => setCategory(category), []);

  return (
    <Routes>
      <Route path="/" element={<NewsPage />} />
      <Route path="/:category" element={<NewsPage />} />
    </Routes>
  );
};

export default App;
