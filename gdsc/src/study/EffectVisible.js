import React, { useState } from 'react';
import EffectIn from './EffectIn';

const EffectVisible = () => {
  const [visible, setVisible] = useState(false);
  console.log('부모컴포넌트도 렌더링이 되나요?');

  return (
    <div>
      <button onClick={() => setVisible(!visible)}>
        {/* !visible을 통해 false를 true로 바꿈 */}
        {visible ? '숨기기' : '보이기'}
      </button>
      <hr />
      {visible && <EffectIn />}
      {/* visible이 true면 <EffectIn /> 이 실행 */}
    </div>
  );
};

export default EffectVisible;
