import React from 'react';

type GreetingsProps = {
  name: string;
};

const Greetings: React.FC<GreetingsProps> = ({ name }) => (
  <div>Hello, {name}</div>
);

export default Greetings;

// React.FC 를 사용 할 때는 props 의 타입을 Generics 로 넣어서 사용한다. 이렇게 React.FC를 사용해서 얻을 수 있는 이점은 두가지가 있다.
// 1. props 에 기본적으로 children 이 들어가있다.
// 2. 컴포넌트의 defaultProps, propTypes, contextTypes 를 설정 할 때 자동완성이 될 수 있다.
