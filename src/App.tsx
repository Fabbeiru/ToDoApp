import React from 'react';
import './index.css';

function App() {
  return (
    <div className="App">
      <div className='wrapper'>
        <header>
          <h1>To Do App</h1>
        </header>

        <form className='input-form'>
          <input type="text" placeholder='Write your task here' autoFocus/>
          <button type="submit" className='input-button'>Save</button>
        </form>
      </div>
    </div>
  );
}

export default App;
