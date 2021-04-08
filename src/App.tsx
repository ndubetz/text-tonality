import React from 'react';
import './App.css';
import RequestForm from './component/RequestForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Reactfuck
        </a>
      <RequestForm />
      </header>
    </div>
  );
}

export default App;
