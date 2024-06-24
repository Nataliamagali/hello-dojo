import React from 'react';
import './App.css';
import TodoList from './TodoList';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello Dojo!</h1>
        <h2>Things I need to do:</h2>
        <TodoList/>
      </header>
    </div>
  );
}

export default App;
