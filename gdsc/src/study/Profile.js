import React from 'react';
import { useParams } from 'react-router-dom';

// 캡슐화
const data = {
  developer1: {
    name: '현용찬',
    discription: '3학년',
  },
  developer2: {
    name: '최은진',
    discription: '4학년',
  },
};
// url파라미터를 만드는 과정
const Profile = () => {
  const params = useParams();
  const profile = data[params.username];
  // params.username에 해당하는 값 ('developer1' 또는 'developer2')을 통해 data 객체에서 해당 사용자의 프로필 정보를 조회
  //아래 내용이 무슨 말인지 모르겠음
  // URL 파라미터(URL Parameters)는 웹 어플리케이션의 경로(path) 내에서 동적으로 변할 수 있는 부분을 말합니다. 이러한 파라미터들은 웹 페이지의 URL을 통해 특정 데이터를 전달하거나, 같은 페이지 내에서 다양한 내용을 표시할 때 사용됩니다.
  return (
    <div>
      <h1>User Profile</h1>
      {profile ? (
        <div>
          <h2>{profile.name}</h2>
          <h2>{profile.discription}</h2>
        </div>
      ) : (
        <p>존재하지 않는 프로필</p>
      )}
    </div>
  );
};

export default Profile;
