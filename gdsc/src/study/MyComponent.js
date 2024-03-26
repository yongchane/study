import React from 'react';

const MyComponent = ({ name, children }) => {
  return (
    <div>
      안녕하세요. 제 이름은 {name} 이다
      <br />
      children값은 {children}
    </div>
  );
};

MyComponent.defaultProps = {
  name: '기본이름',
};

export default MyComponent;
