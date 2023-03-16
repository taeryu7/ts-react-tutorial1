//타입스크립트로 리액트 상태 관리하기
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState<number>(0);
  const onIncrease = () => setCount(count + 1);
  const onDecrease = () => setCount(count - 1);
  return (
    <div>
      <h1>{count}</h1>
      <div>
        <button onClick={onIncrease}>+1</button>
        <button onClick={onDecrease}>-1</button>
      </div>
    </div>
  );
}

export default Counter;
// TypeScript 없이 리액트 컴포넌트를 작성하는 것과 별반 차이가 없다.
// useState 를 사용할 때 useState<number>() 와 같이 Generics 를 사용하여 해당 상태가 어떤 타입을 가지고 있을지 설정만 해주면 된다.
