import React from 'react';
import logo from './logo.svg';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

/*
이 컴포넌트 안에는 const App: React.FC = () => { ... } 와 같이 화살표함수를 사용하여 컴포넌트가 선언되어있다.
지금까지 다뤄왔던 컴포넌트들은 function 키워드를 사용해서 선언했는데 컴포넌트를 선언할때 화살표 함수를 사용해서 선언해도 무방하다.

*/